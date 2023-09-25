const pathToProductsFolder = './assets/images/products/';

const cart = [
  {
    id: 'oa54',
    imgUrl: pathToProductsFolder + 'oppo_a54.jpg',
    name: 'Oppo A54',
    productTitle: 'Điện Thoại Oppo A54 (4GB/128GB) - Xanh Dương - Hàng Chính Hãng',
    deliveryTime: 'thứ 5, 21/09',
    price: 2400000,
    discount: 0.25,
    quantity: 1,
  },
  {
    id: 'xm9a',
    imgUrl: pathToProductsFolder + 'xiaomi_redmi_9a.jpg',
    name: 'Xiaomi Redmi 9A',
    productTitle: 'Điện thoại Xiaomi Redmi 9A (2GB/32GB) - Xanh lam - Hàng chính hãng',
    deliveryTime: 'thứ 5, 21/09',
    price: 3999000,
    discount: 0.2,
    quantity: 1,
  },
  {
    id: 'ip14',
    imgUrl: pathToProductsFolder + 'iphone_14_pro_max.png',
    name: 'Apple iPhone 14 Pro Max',
    productTitle: 'Apple iPhone 14 Pro Max 128GB Bạc',
    deliveryTime: 'thứ 5, 21/09',
    price: 33999000,
    discount: 0.2,
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
    const { id, imgUrl, name, productTitle, deliveryTime, price, discount, quantity } = item;
    const discountPrice = price * (1 - discount);
    const listItem = document.createElement('div');
    listItem.className = 'product-row';
    listItem.innerHTML = `
    <div class="col1">
      <div class="product-container">
        <input type="checkbox" />
        <div class="product">
          <img src="${imgUrl}" alt="${name}" class="product-img" />
          <div class="product-info">
            <p>${productTitle}</p>
            <p>Giao ${deliveryTime}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col2">
      <p>
        <span class="dc-price">${discountPrice.toLocaleString()}₫</span>
        <del class="df-price">${price.toLocaleString()}₫</del>
      </p>
    </div>
    <div class="col3">
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
    <div class="col4"><span class="fn-price">${(
      discountPrice * quantity
    ).toLocaleString()}₫</span></div>
    <div class="col5">
      <button class="icon-button">
        <img
          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
          alt="deleted"
        />
      </button>
    </div>
    `;
    cartList.appendChild(listItem);
  });
}

updateCartDisplay();
