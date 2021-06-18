//modification de la fonction initiale pour utiliser .then() et .catch()
//Objectif = pouvoir attraper l'erreur et en etre alerter si il y en a une
export default async function retrieveContent() {
  const url = "http://localhost:3000/api/teddies";

  return fetch(url).then(
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