/// CSS
import "../assets/css/bootstrap.css";
import "../assets/slick/slick.css";
import "../assets/slick/slick-theme.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
<<<<<<< HEAD
import timer from "./modules/timer";
=======
import changeModalState from "./modules/changeModalState";
import validateFormData from "./modules/validateFormData";
>>>>>>> es-001

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

<<<<<<< HEAD
  let deadline = "2026-04-09";
=======
  let modalState = {};

  changeModalState(modalState);

>>>>>>> es-001
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click",
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block",
  );
<<<<<<< HEAD
  forms();
  timer(".container1", deadline);
=======
  validateFormData(modalState);
  forms(modalState);
>>>>>>> es-001
});
