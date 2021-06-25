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
  console.log("entry of query_item()");
  console.log("http://localhost:3000/api/teddies/" + id);
  alert("test");
  return fetch("http://localhost:3000/api/teddies/" + id, {method:"GET"}).then(
    function (response) {
      return response.json();
    }
  )
  .then(
    function (item) {
      console.log(item);
      return item
    }
  )
  .catch(
    err => {alert(err)}
  )
}