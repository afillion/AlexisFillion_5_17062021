import retrieveContent from './query.js';
import { storageAvailable } from './store.js';

//anonymous main function. () at the end is the call of this function.
//aim to take return of retrieveContent() and call functions to display data get by retrieveContent()
(async function() {
  if (storageAvailable('localStorage')) {
    // Nous pouvons utiliser localStorage
    console.log("localStorage OK");
    const storage = window.localStorage;
    console.log(storage);
  }
  else {
    // Malheureusement, localStorage n'est pas disponible
    alert("localStorage KO");
  }
  const articles = await retrieveContent()
  console.log(articles);
  for (const article of articles) {
    showContent(article);
  }
})()

function showContent(article) {
  //L'élément HTML <template> (ou Template Content ou modèle de contenu) est un mécanisme utilisé pour stocker du contenu HTML (côté client)
  //qui ne doit pas être affiché lors du chargement de la page mais qui peut être instancié et affiché par la suite grâce à un script JavaScript.
  const template_element = document.getElementById("templateArticle");
  //La méthode Document importNode() crée une nouvelle copie du Node ou DocumentFragment spécifié à partir d'un autre document
  //afin qu'il puisse être inséré dans le document actuel.
  const clone = document.importNode(template_element.content, true);

  clone.getElementById("articleTitle").textContent = article.name;
  clone.getElementById("articleTxt").textContent = article.description;
  clone.getElementById("articlePrice").textContent = article.price / 100 +".00€";
  clone.getElementById("articleImg").setAttribute("src", article.imageUrl);
  const href = clone.getElementById("articleId");
  href.addEventListener('click', function(){
    const articleUrl = getArticleUrl(article._id);
    href.setAttribute("href", articleUrl);
  });

  document.getElementById("list").appendChild(clone);
}

function getArticleUrl(id) {
  return "product.html?id=" + id;
}