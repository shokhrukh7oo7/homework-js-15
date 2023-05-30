const products = [
  {
    imgSrc: "./images/card-1-blinchik.svg",
    sale: "-50%",
    productName: "Г/Ц Блинчики с мясом вес, <br />Россия",
    firstPrice: "14,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/moloko.png",
    sale: "-50%",
    productName:
      "Молоко ПРОСТОКВАШИНО паст. <br />питьевое цельное отборное...",
    firstPrice: "24,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-3-kolbasa.svg",
    sale: "-50%",
    productName:
      "Колбаса сырокопченая МЯСНАЯ <br />ИСТОРИЯ Сальчичон и Тоскан...",
    firstPrice: "34,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "25,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "41,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "24,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "35,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "32,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "40,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "44,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "54,50 ₽",
    secondPrice: "50,50 ₽",
  },
  {
    imgSrc: "./images/card-4-sosiska.png",
    sale: "-50%",
    productName: "Сосиски вареные МЯСНАЯ <br />ИСТОРИЯ Молочные и С сыро...",
    firstPrice: "14,50 ₽",
    secondPrice: "50,50 ₽",
  },
];

function createCard(imgSrc, sale, productName, firstPrice, secondPrice) {
  return `
      <div class="card">
        <div class="card-top">
          <img src="${imgSrc}" alt="img" />
          <span class="sale">${sale}</span>
          <span class="material-symbols-outlined heart"> favorite </span>
        </div>
        <div class="card-bottom">
          <div class="price-pay">
            <div class="price">
              <p class="first-price">${firstPrice}</p>
              <p class="second-price">${secondPrice}</p>
            </div>
  
            <div class="pay">
              <p class="with-card">С картой</p>
              <p class="simple">Обычная</p>
            </div>
          </div>
  
          <div class="card-info">
            <p>${productName}</p>
          </div>
  
          <div class="card-star">
            <span class="material-symbols-outlined"> star </span>
            <span class="material-symbols-outlined"> star </span>
            <span class="material-symbols-outlined"> star </span>
            <span class="material-symbols-outlined"> star </span>
            <span class="material-symbols-outlined"> star </span>
          </div>
  
          <div class="card-btn">
            <button><a href="#">В корзину</a></button>
          </div>
        </div>
      </div>
    `;
}

function generateCards() {
  const section = document.createElement("section");
  section.id = "aksiya";

  const container = document.createElement("div");
  container.className = "container";

  const nameAksiya = document.createElement("div");
  nameAksiya.className = "name-aksiya";
  nameAksiya.innerHTML = `
      <h1>Акции</h1>
      <a href="#">Все продукты <span>></span></a>
    `;
  container.appendChild(nameAksiya);

  const cards = document.createElement("div");
  cards.className = "cards";

  products.slice(0, 4).forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = createCard(
      product.imgSrc,
      product.sale,
      product.productName,
      product.firstPrice,
      product.secondPrice
    );
    cards.appendChild(card);
  });

  container.appendChild(cards);
  section.appendChild(container);

  const bodyMain = document.querySelector("body main");
  bodyMain.appendChild(section);
}

generateCards();
