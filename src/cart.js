import { send_item } from './query.js';

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
    document.getElementById('form').addEventListener('submit', send_item);
    formListener();
  }
})()

function formListener() {
  var firstname = document.getElementById('firstname');
  firstname.addEventListener('change', function(e) {
    console.log(firstname);
    let regex = /[0-9]/g;
    let value = e.target.value;
    if (value.match(regex)) {
        console.log(false);
    } else {
        console.log(true);
    }
  });
  var lastname = document.getElementById('lastname');
  lastname.addEventListener('change', function(e) {
    console.log(lastname);
  });
  var email = document.getElementById('email');
  email.addEventListener('change', function(e) {
    console.log(email);
  });
  var adress = document.getElementById('adress');
  adress.addEventListener('change', function(e) {
    console.log(adress);
  });
  var zipcode = document.getElementById('zipcode');
  zipcode.addEventListener('change', function(e) {
    console.log(zipcode);
  });
  var city = document.getElementById('city');
  city.addEventListener('change', function(e) {
    console.log(city);
  });
}