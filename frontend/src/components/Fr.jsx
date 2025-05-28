/*
!!!
  <!DOCTYPE
html >
< html
lang = "ru" >
  < head >
  < meta
charset = "UTF-8" >
  < meta
name = "viewport"
content = "width=device-width, initial-scale=1.0" >
  < title > Аккордеон
услуг < /title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    .service-card {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    flex: 0 0 80px;
    overflow: hidden;
  }

    .service-card:hover {
    flex: 1 0 300px;
  }

    .service-title {
    writing - mode: vertical-rl;
    transform: rotate(180deg);
    transition: all 0.5s ease;
  }

    .service-card:hover .service-title {
    writing - mode: horizontal-tb;
    transform: rotate(0deg);
  }

    .service-content {
    opacity: 0;
    max-height: 0;
    transition: all 0.5s ease;
  }

    .service-card:hover .service-content {
    opacity: 1;
    max-height: 200px;
  }

    .card-container {
    display: flex;
    gap: 8px;
    height: 400px;
    padding: 20px;
  }

    .service-card:nth-child(1) {background - color: #FF9AA2;}
    .service-card:nth-child(2) {background - color: #FFB7B2;}
    .service-card:nth-child(3) {background - color: #FFDAC1;}
    .service-card:nth-child(4) {background - color: #E2F0CB;}
    .service-card:nth-child(5) {background - color: #B5EAD7;}
    .service-card:nth-child(6) {background - color: #C7CEEA;}
  </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
  <div class="max-w-6xl w-full">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Наши услуги</h1>

    <div class="card-container rounded-xl shadow-lg bg-white">
      <!-- Карточка 1 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">Веб-разработка</h2>
        <div class="service-content text-white">
          <p class="mb-6">Создание современных адаптивных веб-сайтов и веб-приложений с использованием передовых
                          технологий.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 25 000 ₽</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Карточка 2 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">Мобильные приложения</h2>
        <div class="service-content text-white">
          <p class="mb-6">Разработка кроссплатформенных мобильных приложений для iOS и Android с нативным
                          пользовательским опытом.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 50 000 ₽</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Карточка 3 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">UI/UX дизайн</h2>
        <div class="service-content text-white">
          <p class="mb-6">Создание интуитивно понятных интерфейсов с продуманным пользовательским опытом для вашего
                          продукта.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 15 000 ₽</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Карточка 4 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">SEO продвижение</h2>
        <div class="service-content text-white">
          <p class="mb-6">Комплексное продвижение сайтов в поисковых системах для привлечения целевого трафика и
                          увеличения продаж.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 10 000 ₽/мес</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Карточка 5 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">Контекстная реклама</h2>
        <div class="service-content text-white">
          <p class="mb-6">Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads для быстрого привлечения
                          клиентов.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 15 000 ₽</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Карточка 6 -->
      <div class="service-card rounded-lg p-4 flex flex-col cursor-pointer">
        <h2 class="service-title text-xl font-bold mb-4 text-white flex-grow">Поддержка сайтов</h2>
        <div class="service-content text-white">
          <p class="mb-6">Регулярное обновление контента, техническая поддержка и оперативное устранение неполадок на
                          вашем сайте.</p>
          <div class="flex justify-between items-end">
            <span class="text-xl font-bold">от 5 000 ₽/мес</span>
            <a href="#"
              class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">Подробнее <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Добавляем небольшую задержку перед появлением контента при наведении
    document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener( 'mouseenter', function() {
      setTimeout( () => {
        this.querySelector( '.service-content' ).style.opacity = '1';
        this.querySelector( '.service-content' ).style.maxHeight = '200px';
      }, 200 );
    } );

    card.addEventListener('mouseleave', function() {
    this.querySelector('.service-content').style.opacity = '0';
    this.querySelector('.service-content').style.maxHeight = '0';
  });
  });
  </script>
</body>
</html>
*/

/*
footer
<div
style={{
  background: "#26323e",
    padding: "70px 0 14px 0",
}}>
<h1
style={{
  color: "#ede4db",
    fontFamily: "Manrope",
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 2.0833333333333335,
    marginLeft: 96,
    textTransform: "uppercase",
}}>
CONTACT US
</h1>
<div
  style={{
    margin: "48 0 0 96",
  }}>
  <h1
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.125,
      marginLeft: 64,
      textTransform: "capitalize",
    }}>
    MEET PLUS GREET
  </h1>
  <div
    style={{
      padding: "0 297px 0 0",
    }}>
    <svg
      width="37"
      height="40"
      viewBox="0 0 37 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_7187_2350)">
        <path
          d="M24.888 0V11.8965H20.5956V6.50775L13.7646 15.3926H10.2626L4.29248 6.85077V20.9973L0 24.9636V0H4.75273L12.0941 10.5064L20.1735 0H24.888Z"
          fill="#EDE4DB"
        />
        <path
          d="M36.9968 27.3629C36.9997 30.3691 35.938 33.2781 34.002 35.5684C32.066 37.8587 29.3823 39.3805 26.4321 39.861C23.4818 40.3415 20.4578 39.7493 17.9023 38.1905C15.3467 36.6318 13.4267 34.2084 12.4863 31.3548C11.5459 28.5012 11.6468 25.404 12.7707 22.6185C13.8946 19.8329 15.9682 17.541 18.6196 16.1538C21.2711 14.7665 24.3271 14.3746 27.2398 15.0482C30.1525 15.7218 32.7315 17.4169 34.5143 19.8297L31.3284 22.7741C30.2947 21.2049 28.7622 20.0349 26.9817 19.4555C25.2011 18.8761 23.2778 18.9216 21.5263 19.5845C19.7747 20.2473 18.2986 21.4884 17.3393 23.1047C16.38 24.721 15.9943 26.6168 16.2453 28.4823C16.4963 30.3477 17.3691 32.0722 18.721 33.3739C20.0729 34.6755 21.8239 35.4773 23.6876 35.648C25.5513 35.8187 27.4174 35.3483 28.9808 34.3136C30.5442 33.279 31.7123 31.7414 32.2942 29.9523H23.559L28.1841 25.6778H36.8883C36.9621 26.2364 36.9983 26.7994 36.9968 27.3629Z"
          fill="#EDE4DB"
        />
      </g>
      <defs>
        <clipPath id="clip0_7187_2350">
          <rect width="37" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</div>
<div
  style={{
    alignItems: "center",
    display: "flex",
    margin: "44 0 0 96",
  }}>
  <h3
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 20,
      lineHeight: 1.8,
      textTransform: "capitalize",
    }}>
    JSC «Первоклассные решения»
    <br />
    Moscow, 1st Tikhvinsky tulip, no. 5-7, premises. 1p
    <br />
    Tel: +66 99 160 97 11
  </h3>
  <h3
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 20,
      lineHeight: 1.8,
      marginLeft: 384,
    }}>
    TIN: 9707025574
    <br />
    RRC: 770701001
  </h3>
  <div
    style={{
      background: "url(TODO) no-repeat center center cover",
      flexShrink: 0,
      height: 40,
      marginLeft: 537,
      width: 40,
    }}
  />
  <div
    style={{
      marginLeft: 44,
    }}>
    <div
      style={{
        height: 40,
        width: 40,
      }}
    />
    <div
      style={{
        background: "url(TODO) no-repeat center center cover",
        height: 40,
        width: 40,
      }}
    />
  </div>
  <div
    style={{
      marginLeft: 44,
    }}>
    <div
      style={{
        background: "url(TODO) no-repeat center center cover",
        height: 40,
        width: 40,
      }}
    />
    <div
      style={{
        height: 40,
        width: 44,
      }}
    />
  </div>
</div>
<div
  style={{
    background: "#ede4db",
    height: 1,
    marginTop: 96,
    width: 1920,
  }}
/>
<div
  style={{
    alignItems: "center",
    display: "flex",
    margin: "14 0 0 96",
  }}>
  <h3
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 20,
      lineHeight: 1.8,
      textTransform: "capitalize",
    }}>
    Privacy Policy
  </h3>
  <h2
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 24,
      marginLeft: 24,
    }}>
    ·
  </h2>
  <h3
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 20,
      lineHeight: 1.8,
      marginLeft: 32,
      textTransform: "capitalize",
    }}>
    Cookies policy
  </h3>
  <h3
    style={{
      color: "#ede4db",
      fontFamily: "Manrope",
      fontSize: 20,
      lineHeight: 1.8,
      marginLeft: 1158,
      textTransform: "capitalize",
    }}>
    2024 © All Rights reserved
  </h3>
</div>
</div>
*/
/*
<!DOCTYPE
html >
< html
lang = "en" >
  < head >
  < meta
charset = "UTF-8" >
  < meta
name = "viewport"
content = "width=device-width, initial-scale=1.0" >
  < title > Dynamic
Service
Cards < /title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    .service-card {
    transition: all 0.3s ease;
    perspective: 1000px;
  }

    .service-title {
    writing - mode: vertical-rl;
    text-orientation: mixed;
    transition: all 0.3s ease;
  }

    .service-card:hover .service-title {
    writing - mode: horizontal-tb;
  }

    .service-details {
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
    transform: translateY(20px);
  }

    .service-card:hover .service-details {
    opacity: 1;
    max-height: 200px;
    transform: translateY(0);
  }

    .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }

    @media (max-width: 768px) {
    .card-container {
    grid-template-columns: 1fr;
  }
  }
  </style>
</head>
<body class="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h1>

    <div class="card-container">
      <!-- Card 1 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-indigo-600 transform rotate-0 hover:rotate-0">
              <i class="fas fa-cut mr-2"></i> Парикмахерские услуги
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Профессиональные стрижки, укладки и окрашивание волос от наших мастеров с
                                          многолетним опытом.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-indigo-600">от 1500₽</span>
              <button onclick="window.location.href='service1.html'"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-green-600">
              <i class="fas fa-spa mr-2"></i> Косметология
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Комплексный уход за кожей лица и тела с использованием профессиональной
                                          косметики и оборудования.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-green-600">от 2500₽</span>
              <button onclick="window.location.href='service2.html'"
                class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-purple-600">
              <i class="fas fa-hand-sparkles mr-2"></i> Маникюр
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Классический, аппаратный и комбинированный маникюр с покрытием гель-лаком или
                                          обычным лаком.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-purple-600">от 1200₽</span>
              <button onclick="window.location.href='service3.html'"
                class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-red-600">
              <i class="fas fa-tshirt mr-2"></i> Массаж
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Расслабляющий, лечебный и антицеллюлитный массаж от сертифицированных
                                          специалистов.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-red-600">от 2000₽</span>
              <button onclick="window.location.href='service4.html'"
                class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-yellow-600">
              <i class="fas fa-eye mr-2"></i> Брови и ресницы
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Коррекция и окрашивание бровей, ламинирование ресниц и наращивание по
                                          индивидуальным параметрам.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-yellow-600">от 1800₽</span>
              <button onclick="window.location.href='service5.html'"
                class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="service-card bg-white rounded-lg shadow-md overflow-hidden h-64 hover:h-96">
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center justify-center h-1/2">
            <div class="service-title text-xl font-bold text-blue-600">
              <i class="fas fa-user-tie mr-2"></i> Мужской уход
            </div>
          </div>
          <div class="service-details mt-4">
            <p class="text-gray-600 mb-4">Барбер услуги, мужские стрижки, коррекция бороды и усов, уход за кожей для
                                          мужчин.</p>
            <div class="flex justify-between items-end mt-auto">
              <span class="text-lg font-semibold text-blue-600">от 1700₽</span>
              <button onclick="window.location.href='service6.html'"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Смотреть подробнее <i class="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>*/
/*
<div
  style={{
    background: "#ecf2f6",
    padding: "140px 229px 109px 251px",
  }}>
  <h1
    style={{
      color: "#2a3659",
      fontSize: 50,
      marginLeft: 446,
      textTransform: "uppercase",
    }}>
    <span
      style={{
        color: "#2a3659",
        fontFamily: "Manrope",
        fontSize: 50,
      }}>
      search
    </span>
    <span
      style={{
        color: "#2a3659",
        fontFamily: "Manrope",
        fontSize: 50,
        fontWeight: 300,
      }}>
      {" "}
    </span>
    <span
      style={{
        color: "#2a3659",
        fontFamily: "Playfair Display",
        fontSize: 50,
        fontStyle: "italic",
        fontWeight: 500,
      }}>
      VIP services
    </span>
    <span
      style={{
        color: "#2a3659",
        fontFamily: "Manrope",
        fontSize: 50,
        fontWeight: 300,
      }}>
      {" "}
    </span>
  </h1>
  <div
    style={{
      background: "url(TODO) no-repeat center center cover",
      marginTop: 32,
      padding: "67px 308px 42px 362px",
    }}>
    <div
      style={{
        alignItems: "center",
        display: "flex",
      }}>
      <div
        style={{
          alignItems: "center",
          borderRadius: 38,
          display: "flex",
          border: "1px solid #2a3659",
          padding: "11px 380px 7px 26px",
        }}>
        <h2
          style={{
            color: "#2a3659",
            fontFamily: "SF Pro Display",
            fontSize: 24,
            textAlign: "right",
          }}>
          􀊫
        </h2>
        <p
          style={{
            color: "#2a3659",
            fontFamily: "Manrope",
            marginLeft: 24,
            textTransform: "uppercase",
          }}>
          enter city or airport
        </p>
      </div>
      <div
        style={{
          borderRadius: 38,
          color: "#2a3659",
          fontFamily: "Manrope",
          marginLeft: 8,
          textTransform: "uppercase",
          border: "1px solid #2a3659",
          padding: "15px 35px",
        }}>
        search
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 585,
      }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
        }}>
        <p
          style={{
            color: "#2a3659",
            fontSize: 18,
            textTransform: "uppercase",
          }}>
          <span
            style={{
              color: "#2a3659",
              fontFamily: "Manrope",
              fontSize: 18,
            }}>
            If{" "}
          </span>
          <span
            style={{
              color: "#2a3659",
              fontFamily: "Playfair Display SC",
              fontSize: 18,
              fontStyle: "italic",
            }}>
            you
          </span>
          <span
            style={{
              color: "#2a3659",
              fontFamily: "Manrope",
              fontSize: 18,
            }}>
            {" "}
            do not see{" "}
          </span>
          <span
            style={{
              color: "#2a3659",
              fontFamily: "Playfair Display",
              fontSize: 18,
              fontStyle: "italic",
            }}>
            the airport needed
          </span>
          <span
            style={{
              color: "#2a3659",
              fontFamily: "Manrope",
              fontSize: 18,
            }}>
            {" "}
          </span>
        </p>
        <div
          style={{
            borderRadius: 38,
            color: "#2a3659",
            fontFamily: "Manrope",
            fontSize: 18,
            marginLeft: 28,
            textTransform: "uppercase",
            border: "1px solid #2a3659",
            padding: "15px 29px",
          }}>
          get in touch
        </div>
      </div>
    </div>
  </div>
</div>
*/
