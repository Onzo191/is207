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

// Callback
document.addEventListener('click', function (event) {
  const classList = event.target.classList;
  console.log(event.target);
  if (classList.contains('qty-decrease')) {
    const productId = event.target.getAttribute('data-id');
    updateProductQuantity(productId, -1);
  } else if (classList.contains('qty-increase')) {
    const productId = event.target.getAttribute('data-id');
    updateProductQuantity(productId, 1);
  } else if (classList.contains('remove-button')) {
    const productId = event.target.getAttribute('data-id');
    removeProduct(productId);
  } else if (classList.contains('clear-button')) {
    clearCart();
  }

  // Blabla, luoi qua!
});

// Cart item display
const updateCartDisplay = () => {
  const cartList = document.getElementById('product-list');

  // Clear existing items
  cartList.innerHTML = '';

  if (!cart.length) {
    cartList.innerHTML = 'Your Cart is Empty!';
  } else
    cart.forEach((item) => {
      const { id, imgUrl, name, productTitle, deliveryTime, price, discount, quantity } = item;
      const discountPrice = Math.ceil((price * (1 - discount)) / 10000) * 10000;

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
        <span class="icon-button qty-decrease" data-id="${id}"
          ><img
            src="./assets/images/decrease.svg"
            alt="decrease"
        /></span>
        <input type="tel" class="qty-input" value="${quantity}" min="1" data-id="${id}"/>
        <span class="icon-button qty-increase" data-id="${id}"
          ><img
            src="./assets/images/increase.svg"
            alt="increase"
        /></span>
      </div>
    </div>
    <div class="col4"><span class="fn-price">${(
      discountPrice * quantity
    ).toLocaleString()}₫</span></div>
    <div class="col5">
      <span class="icon-button remove-button" data-id="${id}">
        <img
          src="./assets/images/trash.svg"
          alt="deleted"
        />
      </span>
    </div>
    `;
      cartList.appendChild(listItem);
    });

  updateFinalPrice();
};

// Update Total Price
const updateFinalPrice = () => {
  const cartTotal = calculateCartTotal();

  // gonna have discount or sumthin' change the final price
  const totalPriceElement = document.getElementById('total-price');
  const totalPrice = cartTotal;

  // freakin final price
  const finalPriceElement = document.getElementById('total-price-final');
  const finalPrice = cartTotal;
  totalPriceElement.textContent = `${totalPrice.toLocaleString()}₫`;
  finalPriceElement.textContent = `${finalPrice.toLocaleString()}₫`;
};

const calculateCartTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    const { price, discount, quantity } = item;
    const discountPrice = Math.ceil((price * (1 - discount)) / 10000) * 10000;
    total += discountPrice * quantity;
  });
  return total;
};

// Update product quantity
const updateProductQuantity = (productId, change) => {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += change;
    if (product.quantity < 1) {
      alert('Product Removed!');
      // product.quantity = 1;
      removeProduct(productId);
    }

    updateCartDisplay();
  }
};

// Remove product
const removeProduct = (productId) => {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    updateCartDisplay();
  }
};

// Clear cart
const clearCart = () => {
  cart.splice(0, cart.length);
  updateCartDisplay();
};

// mount #1
updateCartDisplay();
