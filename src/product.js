import { query_item } from './query.js';

(async function(){
  const pageUrl = window.location.href;
  const item = await query_item(getCurrentProductId(pageUrl));
  console.log(item);
  display(item);
})()

function getCurrentProductId(pageUrl) {
  const start = pageUrl.indexOf("=");
  const id = pageUrl.substring(start + 1);
  return id;
}

function display(item) {
  document.getElementById("itemPageTitle").textContent += item.name;
  document.getElementById("itemTitle").textContent = item.name;
  document.getElementById("itemTxt").textContent = item.description;
  document.getElementById("itemPrice").textContent = item.price / 100 + ".00";
  document.getElementById("itemImg").setAttribute("src", item.imageUrl);
  const href = document.getElementById("itemId");
  href.addEventListener("click", function(){
    const itemUrl = "product.html?id=" + item._id;
    href.setAttribute("href", itemUrl);
  });
  const select = document.getElementById("colorSelect");
  for (let i = 0; i < item.colors.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", item.colors[i]);
    option.innerText = item.colors[i];
    select.appendChild(option);
  }
  const btn = document.getElementById("addCartBtn");
  btn.addEventListener("click", function(){
    console.log(select.value);
    if (window.localStorage.getItem((item._id + "_" + select.value))) {
      console.log('if');
      item['quantity']++;
      window.localStorage.setItem((item._id + "_" + select.value), JSON.stringify(item));
    }
    else {
      console.log('else');
      item['quantity'] = 1;
      window.localStorage.setItem((item._id + "_" + select.value), JSON.stringify(item));
    }
    console.log(item);
    console.log(window.localStorage);
  });
}