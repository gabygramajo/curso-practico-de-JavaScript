
// Fórmula para descuentos. 
// P = Precio | D = Descuento. 
// (P * (100 - D)) / 100 

const InputCoupon = document.getElementById("InputCoupon");
const couponValue = InputCoupon.value;

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];

function calculateDiscountedPrice(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function validateUserCoupon(couponValue) {

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  }

  const resultFound = coupons.find(isCouponValueValid);
  return resultFound;
}

function onClickButtonPriceDiscount() {

  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const InputCoupon = document.getElementById("InputCoupon");
  const couponValue = InputCoupon.value;

  const userCoupon = validateUserCoupon(couponValue);

  if (!userCoupon) {
      alert(`El cupón ${couponValue} no es válido`)
  } else {
    
    const descuento = userCoupon.discount;
    const precioConDescuento = calculateDiscountedPrice(priceValue, descuento);

    const totalPrice = document.getElementById("TotalPrice");
    totalPrice.innerText = `Precio con descuento: $${precioConDescuento}.`;
  } 
}
