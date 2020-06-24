// function initMap(){
//     const option = {
//       center: { lat: 49.822805, lng: 23.985527 },
//       zoom: 15
//     };
//     const map = new google.maps.Map(document.getElementById('map'), option)
// }

const form = document.querySelector(".review-form");
const userName = document.querySelector(".user-name");
const email = document.querySelector(".user-email");
const userPhone = document.querySelector(".user-phone");
const userMarks = document.querySelector(".user-marks");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check phone is valid
function checkPhone(input) {
  const re = /[0-9]{9}/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Phone is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} Is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} Must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, email, userPhone, userMarks]);
  checkLength(userName, 3, 15);
  checkEmail(email);
  checkPhone(userPhone);
});
