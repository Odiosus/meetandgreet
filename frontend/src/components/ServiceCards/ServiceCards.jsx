import styles from './ServiceCards.module.scss';
import meetAssistImage from '../../assets/images/bg-card/meet-assist.png';
import fastTrackImage from '../../assets/images/bg-card/fast-track.png';
import vipLoungeImage from '../../assets/images/bg-card/vip-lounge.png';
import transferImage from '../../assets/images/bg-card/transfer.png';
import officialsImage from '../../assets/images/bg-card/officials.png';
import cipImage from '../../assets/images/bg-card/cip.png';
import Button from "../Buttons/Button.jsx";

const services = [
  {
    title: 'MEET+ASSIST',
    description: 'High-quality passenger escort service \n' +
      'at the airport, providing maximum comfort, convenience during your trip',
    price: 'from 200 €',
    link: '#',
    backgroundImage: meetAssistImage,
  },
  {
    title: 'FAST TRACK',
    description: 'Premium passenger transportation service to or from the airport, providing maximum comfort, convenience and personalized service',
    price: 'from 200 €',
    link: '#',
    backgroundImage: fastTrackImage,
  },
  {
    title: 'VIP LOUNGE',
    description: 'A comfortable flight waiting with access to exclusive amenities, including luxury seating areas, snacks and drinks, as well as personalized service',
    price: 'from 200 €',
    link: '#',
    backgroundImage: vipLoungeImage,
  },
  {
    title: 'AIRPORT VIP TRANSFER',
    description: 'A comfortable flight waiting with access to exclusive amenities, including luxury seating areas, snacks and drinks, as well as personalized service',
    price: 'from 200 €',
    link: '#',
    backgroundImage: transferImage,
  },
  {
    title: 'OFFICIALS LOUNGE',
    description: 'Exclusive recreation areas for VIP persons \n' +
      'and delegations, personalized service \n' +
      'and an increased level of security ',
    price: 'from 200 €',
    link: '#',
    backgroundImage: officialsImage,
  },
  {
    title: 'CIP SERVICE',
    description: 'Expedited passage of all formalities, comfortable recreation areas, personalized service for the most convenient and fast travel',
    price: 'from 200 €',
    link: '#',
    backgroundImage: cipImage,
  },
];

// Компонент для одной карточки
function ServiceCard ({title, description, price, link, backgroundImage}) {
  return (
    <div className={styles.serviceCard}
      style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h2 className={styles.serviceTitle}>{title}</h2>
      <div className={styles.serviceContent}>
        <p className={styles.serviceDescription}>{description}</p>
        <div className={styles.serviceFooter}>
          <span className={styles.servicePrice}>{price}</span>
          <Button text="See more" to={link} />
        </div>
      </div>
    </div>
  );
}

// Основной компонент
export default function ServiceCards () {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {services.map( (service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            link={service.link}
            backgroundImage={service.backgroundImage}
          />
        ) )}
      </div>
    </div>
  );
}