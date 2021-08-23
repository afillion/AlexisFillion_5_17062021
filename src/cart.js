import { send_item } from './query.js';

(function() {
  const tbody = document.getElementById("tabBody");
  const store_tab = Object.values(window.localStorage);
  let total_price = 0;
  for (let i = 0; i < store_tab.length; i++) {
    const row = document.createElement("tr");
    const el = JSON.parse(store_tab[i]);
    tbody.appendChild(row);
    const td_name = document.createElement("td");
    td_name.textContent = el.name;
    row.appendChild(td_name);
    const td_price = document.createElement("td");
    td_price.textContent = el.price / 100 + ".00€";
    row.appendChild(td_price);
    total_price += el.price;
  }
  document.getElementById("total").textContent = "Prix total : " + total_price / 100 + ".00€";
  formListener();
  document.getElementById('form').addEventListener('submit', verify_userInput);
})()

function verify_userInput(e) {
  e.preventDefault();
  console.log("verify_userInput");
  let alpha_regex = /^[A-Za-z]+$/;
  let email_regex = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
  let adress_regex = /^[0-9]+[A-Za-z\s]+$/;
  let zipcode_regex = /^[0-9]{5}$/;
  if (
    validator(document.getElementById('firstname').value, alpha_regex) &&
    validator(document.getElementById('lastname').value, alpha_regex) &&
    validator(document.getElementById('email').value, email_regex) &&
    validator(document.getElementById('adress').value, adress_regex) &&
    validator(document.getElementById('zipcode').value, zipcode_regex) &&
    validator(document.getElementById('city').value, alpha_regex)
    ) {
    console.log("validator == true");
    console.log(Object.values(window.localStorage));
    const products = Object.values(window.localStorage).map((el) => {return JSON.parse(el)}).map((product) => {return product._id});
    const order = {
      contact: {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        address: document.getElementById('adress').value + " " + document.getElementById('zipcode').value,
        city: document.getElementById('city').value 
      },
      products: products
    }
    console.log(order);
    send_item(order);
  }
  else console.log("validator == false");
}

function validator(value, regex) {
  if (regex.test(value)) return true;
  else return false;
}

function formListener() {
  var firstname = document.getElementById('firstname');
  firstname.addEventListener('change', function firstname_validator(e) {
    console.log(firstname);
    let regex = /^[A-Za-z]+$/;
    let value = e.target.value;
    let msg = document.getElementById("firstname_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      firstname.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      firstname.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "Veuillez utiliser uniquement des caratères alphabétique";
    }
  });
  var lastname = document.getElementById('lastname');
  lastname.addEventListener('change', function(e) {
    console.log(lastname);
    let regex = /^[A-Za-z]+$/;
    let value = e.target.value;
    let msg = document.getElementById("lastname_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      lastname.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      lastname.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "Veuillez utiliser uniquement des caratères alphabétique";
    }
  });
  var email = document.getElementById('email');
  email.addEventListener('change', function(e) {
    console.log(email);
    let regex = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
    let value = e.target.value;
    let msg = document.getElementById("email_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      email.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      email.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "Veuillez inscrire une adresse mail au format Dupont.jean@maboite.com";
    }
  });
  var adress = document.getElementById('adress');
  adress.addEventListener('change', function(e) {
    console.log(adress);
    let regex = /^[0-9]+[A-Za-z\s]+$/;
    let value = e.target.value;
    let msg = document.getElementById("adress_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      adress.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      adress.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "example: 1 Avenue Pascal";
    }
  });
  var zipcode = document.getElementById('zipcode');
  zipcode.addEventListener('change', function(e) {
    console.log(zipcode);
    let regex = /^[0-9]{5}$/;
    let value = e.target.value;
    let msg = document.getElementById("zipcode_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      zipcode.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      zipcode.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "Veuillez utiliser uniquement des caratères numérique";
    }
  });
  var city = document.getElementById('city');
  city.addEventListener('change', function(e) {
    console.log(city);
    let regex = /^[A-Za-z]+$/;
    let value = e.target.value;
    let msg = document.getElementById("city_msg");
    if (regex.test(e.target.value)) {
      console.log(true);
      city.setAttribute("style", "border: 1px solid green");
      msg.textContent = "";
    }
    else {
      console.log(false);
      city.setAttribute("style", "border: 1px solid red");
      msg.setAttribute("style", "color: red");
      msg.textContent = "Veuillez utiliser uniquement des caratères alphabétique";
    }
  });
}