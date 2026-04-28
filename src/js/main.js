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

import timer from "./modules/timer";
import gallery from "./modules/gallery";

import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let deadline = `2027-04-29`;

  let modalState = {};

  changeModalState(modalState);

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

  forms();
  timer(".container1", deadline);

  forms(modalState);
  gallery();
});
