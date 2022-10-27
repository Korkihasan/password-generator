var password = document.getElementById("password");
var range = document.querySelector(".range");
var field = document.getElementById("password-nummber");

range.addEventListener("input", function (e) {
  field.value = e.target.value;
});
field.addEventListener("input", function (e) {
  range.value = e.target.value;
});

var checkedcharslowercase = document.getElementById("charslowercase");
var checkedcharsuppercase = document.getElementById("charsuppercase");
var checkedcharsnumber = document.getElementById("charsnumber");
var checkedcharssymbols = document.getElementById("charssymbols");

var charslowercase = "abcdefghijklmnopqrstuvwxyz";
var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsnumber = "0123456789";
var charssymbols = "!@#$%^&*()";

var chars = charslowercase + charsuppercase + charssymbols + charsnumber;

function setSettings() {
  console.log("here");
}

function passwordchange() {
  if (document.getElementById("easytosay").checked) {
    checkedcharslowercase.checked = true;
    checkedcharsuppercase.checked = true;
    checkedcharsnumber.checked = false;
    checkedcharssymbols.checked = false;
    checkedcharsnumber.disabled = true;
    checkedcharssymbols.disabled = true;
    var charslowercase = "abcdefghijklmnopqrstuvwxyz";
    var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chars = charslowercase + charsuppercase;
  } else if (document.getElementById("easytoread").checked) {
    checkedcharslowercase.checked = true;
    checkedcharsuppercase.checked = true;
    checkedcharsnumber.disabled = false;
    checkedcharssymbols.disabled = false;
    var charslowercase = "abcdefghijklmnopqrstuvwxyz";
    var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chars = charslowercase + charsuppercase;

    if (
      document.getElementById("charsnumber").checked &&
      document.getElementById("charssymbols").checked
    ) {
      var charslowercase = "abcdefghijklmnopqrstuvwxyz";
      var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charsnumber = "0123456789";
      var charssymbols = "!@#$%^&*()";
      var chars = charslowercase + charsuppercase + charsnumber + charssymbols;
    } else if (document.getElementById("charsnumber").checked) {
      var charslowercase = "abcdefghijklmnopqrstuvwxyz";
      var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charsnumber = "0123456789";
      var chars = charslowercase + charsuppercase + charsnumber;
    } else if (document.getElementById("charssymbols").checked) {
      var charslowercase = "abcdefghijklmnopqrstuvwxyz";
      var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charssymbols = "!@#$%^&*()";
      var chars = charslowercase + charsuppercase + charssymbols;
    }
  } else if (document.getElementById("allcharacters").checked) {
    checkedcharslowercase.checked = true;
    checkedcharsuppercase.checked = true;
    checkedcharsnumber.checked = true;
    checkedcharssymbols.checked = true;
    checkedcharsnumber.disabled = false;
    checkedcharssymbols.disabled = false;
    var charsuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charslowercase = "abcdefghijklmnopqrstuvwxyz";
    var charsnumber = "0123456789";
    var charssymbols = "!@#$%^&*()";

    var chars = charslowercase + charsuppercase + charssymbols + charsnumber;
  }
  var passwordLength = field.value;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;

  var passwordcolor = document.getElementById("password-strength");

  if (field.value >= 0 && field.value <= 3) {
    passwordcolor.style.backgroundColor = "transparent";
  } else if (field.value > 3 && field.value <= 6) {
    passwordcolor.style.backgroundColor = "rgb(223, 102, 97)";
    passwordcolor.style.width = "25%";
  } else if (field.value >= 7 && field.value < 9) {
    passwordcolor.style.backgroundColor = "rgb(239, 194, 15)";
    passwordcolor.style.width = "50%";
  } else if (field.value >= 9 && field.value <= 10) {
    passwordcolor.style.backgroundColor = "rgb(0, 168, 120)";
    passwordcolor.style.width = "75%";
  } else if (range.value >= 11) {
    passwordcolor.style.backgroundColor = "rgb(0, 107, 77)";
    passwordcolor.style.width = "100%";
  }
}

function copyTextToClipboard() {
  var copyText = document.getElementById("password").value;
  navigator.clipboard.writeText(copyText).then();
}

document.addEventListener("DOMContentLoaded", passwordchange);
