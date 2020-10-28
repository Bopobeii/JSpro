class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
    this.all_price();
  }

  _fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }

  all_price() {
    let summ = 0;
    for (let product of this.#goods) {
summ += product.price;
          }
    return summ;
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/150x100') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
<img class="product-item__img" src="${this.img}" alt="">
            <h3 class="product-item__title">${this.title}</h3>
            <p class="product-item__price">${this.price}</p>
            <button class="product-item__by-btn">Добавить в корзину</button>
          </div>`;
  }
}

const list = new ProductList();


class ShoppingCart {
  /*Как я это вижу. При каждом нажатии "Добавить в корзину" брать данные товара из разметки. Было бы проще обратится к методу _fetchGoods() и по id товара брать нужный объект, но как понял это неовозможно. Дальше отрендерить эти данные в сиписок покупок в корзине*/
  constructor() {
  };
};

class ElementCart {
constructor() {
  };
};

/*
const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = '', price = 0, img = 'https://placehold.it/150x100') =>  `<div class="product-item">
            <img class="product-item__img" src="${img}" alt="">
            <h3 class="product-item__title">${title}</h3>
            <p class="product-item__price">${price}</p>
            <button class="product-item__by-btn">Добавить в корзину</button>
          </div>`;
;

const renderProducts = (list = []) => {

  const productList = list.forEach(item => {
   prod = renderProduct(item.title, item.price)
   document.querySelector('.products').insertAdjacentHTML('beforeend', `${prod}`);
  console.log(prod);
});
//  const productList = list.map(item => renderProduct(item.title, item.price));
  
 
};

renderProducts(products);

*/