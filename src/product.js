(function(){
  const pageUrl = window.location.href;
  alert(pageUrl);
  getCurrentProduct(pageUrl);
})()

function getCurrentProduct(pageUrl) {
  const start = pageUrl.indexOf("=");
  const id = pageUrl.substring(start + 1);
  console.log(id)
}