function myFunction() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction2() {
  var x = document.getElementById("psw2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
/**************************************/
var password = document.getElementById("psw")
  , confirm_password = document.getElementById("psw2");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    alert("Password Does Not Match. Please Fix Error To Submit")
  } else {
    confirm_password.setCustomValidity('');
  }
}
confirm_password.onchange = validatePassword;


function NumbersOnly(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}

function validateform() {
  var Name = document.myform.Name.value;
  var email = document.myform.email.value;
  var psw = document.myform.psw.value;
  var Date = document.myform.Date.value;
  var address = document.myform.address.value;
  var select = document.myform.select.value;
  var gender = document.myform.gender.value;

  if (Name == "" || email == "" || psw == "" || Date == "" || address == "" || select == "" || gender == "") {
    alert("Please Complete All The Required Data To Submit");
    console.log("lesa")

  }
  else {
    console.log("5lst inputs")
    var popup = document.getElementById("popup");
    function openPopup() {
      console.log("hello")
      popup.classList.add("open-popup");

    }
    var registerBtn = document.querySelector(".register");
    var form = document.querySelector("#form")
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault()
      console.log("submited")
      console.log(form)

      popup.classList.add("open-popup");
    })
    function closePopup() {
      popup.classList.remove("open-popup");
    }
  }
  return false;
}