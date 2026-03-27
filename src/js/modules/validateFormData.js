const validateFormData = (state) => {
  const modalBtn = document.querySelectorAll("button[class^='popup_']");
  const modalProfile = document.querySelector(".popup_calc_profile");

  modalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      for (let key in state) {
        if (state[key] !== "") {
          modalProfile.style.display = "block";
          item.prepend("you should fill all fields");
          item.setAttribute("disabled", "disabled");
        } else {
          console.log("0");
          item.removeAttribute("disabled", "disabled");
        }
      }
    });
  });
};

export default validateFormData;
