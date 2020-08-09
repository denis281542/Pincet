//Modal window
const button = document.querySelector("#popup-header");
const btnMain = document.querySelector("#popup-btn");
const modal = document.querySelector("#modal");
const modalButton = document.querySelector("#cancel-modal");

const toggleModal = (modal) => modal.classList.toggle("modal--hidden");


button.addEventListener("click", () => toggleModal(modal));
modalButton.addEventListener("click", () => toggleModal(modal));

btnMain.addEventListener("click", () => toggleModal(modal));

// Validates form
const form = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault();
  
  const name = event.target.querySelector("input[type=text]").value;
  const nameHint = event.target.querySelector(".name-hint");
  const phone = event.target.querySelector("#phone").value;
  const phoneHint = event.target.querySelector(".phone-hint");

  const isValidName = validateName(name);
  if (!isValidName) {
    nameHint.classList.add("name-hint--active");
    return;
  }
  if (nameHint.classList.contains("name-hint--active")) {
    nameHint.classList.remove("name-hint--active");
  }
  alert("name валидный! Можно отправить форму");

  const isValidPhone = validatePhone(phone);
  if (!isValidPhone) {
    phoneHint.classList.add("phone-hint--active");
    return;
  }
  if (phoneHint.classList.contains("phone-hint--active")) {
    phoneHint.classList.remove("phone-hint--active");
  }
  alert("phone валидный! Можно отправить форму");

};

form.addEventListener("submit", submitForm);

// utils
function validatePhone(phone) {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(phone);
}

function validateName(name) {
  const re = /^([a-zA-Z ]){2,30}$/;
  return re.test(name);
}






