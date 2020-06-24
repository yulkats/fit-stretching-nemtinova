const form = document.querySelector(".review-form");
const userName = document.querySelector(".user-name");
const email = document.querySelector(".user-email");
const userPhone = document.querySelector(".user-phone");
const userLastName = document.querySelector(".user-last-name");

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
    showError(input, "Email не коректный");
  }
}

// Check phone is valid
function checkPhone(input) {
  const re = /[0-9]{10}/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Телефон не коректный");
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
      `${getFieldName(input)} Должгно быть минимум ${min} буквы`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} Должгно быть максимум ${max} букв`
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

  checkRequired([userName, userPhone]);
  checkLength(userName, 3, 15);
  // checkLength(userLastName, 3, 15);
  // checkEmail(email);
  checkPhone(userPhone);
});
