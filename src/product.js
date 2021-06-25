import query_item from './query.js';

(async function(){
  const pageUrl = window.location.href;
  const item = await query_item(getCurrentProductId(pageUrl));
  console.log(item);
})()

function getCurrentProductId(pageUrl) {
  const start = pageUrl.indexOf("=");
  // const id = pageUrl.substring(start + 1);
  const id = (window.location.href).search;
  console.log(id);
  console.log("http://localhost:3000/api/teddies/" + id);
  return id;
}