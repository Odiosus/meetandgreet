import { useState, useCallback } from 'react';

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
  const [focusedIndex, setFocusedIndex] = useState(
    fields.reduce( (acc, field) => {
      acc[field] = -1; // -1 означает отсутствие фокуса на элементе списка
      return acc;
    }, {} )
  );

  const getFilteredData = useCallback( (term, fieldData = data) => {
    if (!term) {
      return fieldData; // Показываем все аэропорты, если поиск пустой
    }
    return fieldData.filter(
      (item) =>
        item.name.toLowerCase().includes( term.toLowerCase() ) ||
        item.code.toLowerCase().includes( term.toLowerCase() )
    );
  }, [data] );

  const handleSearchChange = useCallback( (field, value) => {
    setSearchTerms( (prev) => ({...prev, [field]: value}) );
    setIsOpen( (prev) => ({...prev, [field]: true}) );
    setSelected( (prev) => ({...prev, [field]: ''}) );
    setFocusedIndex( (prev) => ({...prev, [field]: -1}) );
  }, [] );

  const handleSelect = useCallback( (item, field) => {
    const currentCode = item.code;
    const otherFields = fields.filter( (f) => f !== field );
    const otherCodes = otherFields
      .filter( (f) => selected[f] )
      .map( (f) => selected[f].match( /\((.*?)\)/ )?.[1] );

    const validationError = validate?.( field, currentCode, otherCodes );
    if (validationError) {
      alert( validationError );
      return;
    }

    setSelected( (prev) => ({
      ...prev,
      [field]: `${item.name} (${item.code})`,
    }) );
    setSearchTerms( (prev) => ({...prev, [field]: ''}) );
    setIsOpen( (prev) => ({...prev, [field]: false}) );
    setFocusedIndex( (prev) => ({...prev, [field]: -1}) );
  }, [fields, selected, validate] );

  const handleFocus = useCallback( (field) => {
    setIsOpen( (prev) => ({...prev, [field]: true}) );
  }, [] );

  const handleBlur = useCallback( (field) => {
    // Задержка для обработки клика по элементу списка
    setTimeout( () => {
      setIsOpen( (prev) => ({...prev, [field]: false}) );
      setFocusedIndex( (prev) => ({...prev, [field]: -1}) );
    }, 200 );
  }, [] );

  const handleKeyDown = useCallback( (field, e, filteredData) => {
    if (!isOpen[field]) {
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex( (prev) => ({
        ...prev,
        [field]: Math.min( prev[field] + 1, filteredData.length - 1 ),
      }) );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex( (prev) => ({
        ...prev,
        [field]: Math.max( prev[field] - 1, -1 ),
      }) );
    } else if (e.key === 'Enter' && focusedIndex[field] >= 0) {
      e.preventDefault();
      handleSelect( filteredData[focusedIndex[field]], field );
    } else if (e.key === 'Escape') {
      setIsOpen( (prev) => ({...prev, [field]: false}) );
      setFocusedIndex( (prev) => ({...prev, [field]: -1}) );
    }
  }, [isOpen, focusedIndex, handleSelect] );

  return {
    searchTerms,
    selected,
    isOpen,
    focusedIndex,
    getFilteredData,
    handleSearchChange,
    handleSelect,
    handleFocus,
    handleBlur,
    handleKeyDown,
    setSelected,
  };
};