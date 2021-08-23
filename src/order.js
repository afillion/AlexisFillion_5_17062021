(async function(){
  var url_string = window.location.search;
  var url = new URLSearchParams(url_string);
  let orderId = url.get('orderId');
  console.log(orderId);
  let price = url.get('totalPrice');
  console.log(price);
  const order = document.getElementById("order");
  order.textContent = `Votre commande ${orderId}, pour un total de ${price}.00€`;
})()