(function() {
  const tbody = document.getElementById("tabBody");
  const store_tab = Object.values(window.localStorage);
  for (let i = 0; i < store_tab.length; i++) {
    const row = document.createElement("tr");
    const el = JSON.parse(store_tab[i]);
    tbody.appendChild(row);
    const td_name = document.createElement("td");
    td_name.innerText = el.name;
    row.appendChild(td_name);
    const td_quantity = document.createElement("td");
    td_quantity.innerText = 1;
    row.appendChild(td_quantity);
    const td_price = document.createElement("td");
    td_price.innerText = el.price / 100 + ".00";
    row.appendChild(td_price);
  }
})()