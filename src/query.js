//modification de la fonction initiale pour utiliser .then() et .catch()
//Objectif = pouvoir attraper l'erreur et en etre alerter si il y en a une
export default async function retrieveContent() {
  const url = "http://localhost:3000/api/teddies/";

  console.log("retrieveContent()");
  return fetch(url,{method:"GET"}).then(
    function (response) {
      return response.json()
    }
  )
  .then(
    function (articles) {
      return articles
    }
  )
  .catch(
    function(err) {
      alert(err)
    }
  )
}

export async function query_item(id) {
  return fetch("http://localhost:3000/api/teddies/" + id, {method:"GET"}).then(
    function (response) {
      return response.json();
    }
  )
  .then(
    function (item) {
      return item
    }
  )
  .catch(
    err => {alert(err)}
  )
}

export async function send_item(order) { 
  console.log("send_item");
  
  return fetch("http://localhost:3000/api/teddies/order", 
  {method:"POST", body:JSON.stringify(order), headers: {'Content-Type': 'application/json; charset=utf-8'}})
  .then(
    (response) => response.json()
  )
  .then(
    (json) => {
      console.log(json);
      console.log(Object.values(window.localStorage));
      let total = Object.values(window.localStorage).map((el) => {return JSON.parse(el)}).map((product) => {return product.price / 100});
      let total_price = 0;
      total.forEach(el => {
        total_price += el;
      });
      window.localStorage.clear();
      window.location.href = `${window.location.origin}/order.html?orderId=${json.orderId}&totalPrice=${total_price}`;
    }
  )
  .catch(
    err => {alert(err)}
  )
}
