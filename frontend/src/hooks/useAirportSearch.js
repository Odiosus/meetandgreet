import { useState } from 'react';

export const useAirportSearch = (fields, data, validate) => {
  const initialState = fields.reduce( (acc, field) => {
    acc[field] = '';
    return acc;
  }, {} );

  const [searchTerms, setSearchTerms] = useState( initialState );
  const [selected, setSelected] = useState( initialState );
  const [isOpen, setIsOpen] = useState(
    fields.reduce( (acc, field) => {
      acc[field] = false;
      return acc;
    }, {} )
  );

  const getFilteredData = (term, fieldData = data) => {
    if (!term || term.length < 3) {
      return [];
    }
    return fieldData.filter( item =>
      item.name.toLowerCase().includes( term.toLowerCase() ) ||
      item.code.toLowerCase().includes( term.toLowerCase() )
    );
  };

  const handleSearchChange = (field, value) => {
    setSearchTerms( prev => ({...prev, [field]: value}) );
    setIsOpen( prev => ({...prev, [field]: value.length >= 3}) );
    setSelected( prev => ({...prev, [field]: ''}) );
  };

  const handleSelect = (item, field) => {
    const currentCode = item.code;
    const otherFields = fields.filter( f => f !== field );
    const otherCodes = otherFields
      .filter( f => selected[f] )
      .map( f => selected[f].match( /\((.*?)\)/ )?.[1] );

    const validationError = validate?.( field, currentCode, otherCodes );
    if (validationError) {
      alert( validationError );
      return;
    }

    setSelected( prev => ({
      ...prev,
      [field]: `${item.name} (${item.code})`,
    }) );
    setSearchTerms( prev => ({...prev, [field]: ''}) );
    setIsOpen( prev => ({...prev, [field]: false}) );
  };

  return {
    searchTerms,
    selected,
    isOpen,
    getFilteredData,
    handleSearchChange,
    handleSelect,
    setSelected,
  };
};