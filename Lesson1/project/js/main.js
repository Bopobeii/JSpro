const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (id = 0, title = '', price = 0, img='https://placehold.it/150x100') => {
  return `<div class="product-item" data-id="${id}">
<img class="product-item__img" src="${img}" alt="">
            <h3 class="product-item__title">${title}</h3>
            <p class="product-item__price">${price}</p>
            <button class="product-item__by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list = []) => {

  list.forEach(item => {
  let prod = renderProduct(item.id, item.title, item.price)
  document.querySelector('.products').insertAdjacentHTML('beforeend', prod);
  console.log(prod);
}); 
};

renderProducts(products);