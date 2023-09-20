const cart = [
  {
    id: 1,
    imgUrl: '#',
    name: 'Điện thoại OPPO A54 (4GB/128GB)',
    productTitle: 'Điện thoại OPPO A54 (4GB/128GB) - Đen - Hàng Chính Hãng',
    deliveryTime: 'thứ 5, 21/09',
    price: 15000000,
    quantity: 2,
  },
  {
    id: 2,
    imgUrl: '#',
    name: 'Điện thoại Samsung A12 (4GB/64GB)',
    productTitle: 'Điện thoại Samsung A12 (4GB/64GB) - Đen - Hàng Chính Hãng',
    deliveryTime: 'thứ 5, 21/09',
    price: 7500000,
    quantity: 1,
  },
];
let discountCode = 'DISCOUNT10';
let address = '123 Main St, City, Country';

function updateCartDisplay() {
  const cartList = document.getElementById('product-list');

  // Clear existing items
  cartList.innerHTML = '';

  cart.forEach((item) => {
    const { id, imgUrl, name, productTitle, deliveryTime, price, quantity } = item;
    const listItem = document.createElement('div');
    listItem.className = 'product-row';
    listItem.innerHTML = `
      <input type="checkbox" />
      <div class="product-container">
        <img src="${imgUrl}" alt="${name}" class="product-img" />
        <div class="product-info">
          <p>${productTitle}</p>
          <p>Giao ${deliveryTime}</p>
        </div>
      </div>
      <div class="df-price">${price.toLocaleString()}đ</div>
      <div class="qty-button-container">
        <div class="qty-button-group">
          <span class="qty-decrease"
            ><img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
              alt="decrease"
          /></span>
          <input type="tel" class="qty-input" value="${quantity}" />
          <span class="qty-increase"
            ><img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
              alt="increase"
          /></span>
        </div>
      </div>
      <div class="sum-price">${(price * quantity).toLocaleString()}</div>
      <button class="icon-button">
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted">
      </button>
    `;
    cartList.appendChild(listItem);
  });
}

updateCartDisplay();
