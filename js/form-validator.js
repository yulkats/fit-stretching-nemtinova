class FormValidator {
  constructor(){
    this.form = document.querySelector(".review-form");
    this.userName = document.querySelector(".user-name");
    this.email = document.querySelector(".user-email");
    this.userPhone = document.querySelector(".user-phone");
    this.userMarks = document.querySelector(".user-marks");
    this.addEventListener();
  }

  showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, "Email is not valid");
    }
  }

  checkPhone(input) {
    const re = /[0-9]{9}/;
    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, "Phone is not valid");
    }
  }

  checkRequired(inputArr) {
    inputArr.forEach((input) => {
      if (input.value.trim() === "") {
        console.log(this)
        this.showError(input, `${this.getFieldName(input)} Is required`);
      } else {
        this.showSuccess(input);
      }
    });
  }

  checkLength(input, min, max) {
    if (input.value.length < min) {
      this.showError(
        input,
        `${this.getFieldName(input)} Must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      this.showSuccess(input);
    }
  }

  getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  addEventListener(){
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.checkRequired([this.userName, this.email, this.userPhone, this.userMarks]);
      this.checkLength(this.userName, 1, 2);
      this.checkEmail(this.email);
      this.checkPhone(this.userPhone);
    });
  }

}

new FormValidator();
