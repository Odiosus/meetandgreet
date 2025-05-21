import styles from './ServiceCards.module.scss';

// Данные для карточек (заглушка)
const services = [
  {
    title: 'Веб-разработка',
    description: 'Создание современных адаптивных веб-сайтов и веб-приложений с использованием передовых технологий.',
    price: 'от 25 000 ₽',
    link: '#',
    backgroundColor: '#FF9AA2',
  },
  {
    title: 'Мобильные приложения',
    description: 'Разработка кроссплатформенных мобильных приложений для iOS и Android с нативным пользовательским опытом.',
    price: 'от 50 000 ₽',
    link: '#',
    backgroundColor: '#FFB7B2',
  },
  {
    title: 'UI/UX дизайн',
    description: 'Создание интуитивно понятных интерфейсов с продуманным пользовательским опытом для вашего продукта.',
    price: 'от 15 000 ₽',
    link: '#',
    backgroundColor: '#FFDAC1',
  },
  {
    title: 'SEO продвижение',
    description: 'Комплексное продвижение сайтов в поисковых системах для привлечения целевого трафика и увеличения продаж.',
    price: 'от 10 000 ₽/мес',
    link: '#',
    backgroundColor: '#E2F0CB',
  },
  {
    title: 'Контекстная реклама',
    description: 'Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads для быстрого привлечения клиентов.',
    price: 'от 15 000 ₽',
    link: '#',
    backgroundColor: '#B5EAD7',
  },
  {
    title: 'Поддержка сайтов',
    description: 'Регулярное обновление контента, техническая поддержка и оперативное устранение неполадок на вашем сайте.',
    price: 'от 5 000 ₽/мес',
    link: '#',
    backgroundColor: '#C7CEEA',
  },
];

// Компонент для одной карточки
function ServiceCard ({title, description, price, link, backgroundColor}) {
  return (
    <div className={styles.serviceCard}
      style={{backgroundColor}}>
      <h2 className={styles.serviceTitle}>{title}</h2>
      <div className={styles.serviceContent}>
        <p className={styles.serviceDescription}>{description}</p>
        <div className={styles.serviceFooter}>
          <span className={styles.servicePrice}>{price}</span>
          <a href={link}
            className={styles.serviceLink}>
            Подробнее <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши услуги</h1>
      <div className={styles.cardContainer}>
        {services.map( (service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            link={service.link}
            backgroundColor={service.backgroundColor}
          />
        ) )}
      </div>
    </div>
  );
}