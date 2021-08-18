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

export async function send_item(e) { 
  e.preventDefault();
  console.log("form action");
  console.log(e);
}