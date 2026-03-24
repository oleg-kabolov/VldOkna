/// CSS
import "../assets/css/bootstrap.css";
import "../assets/slick/slick.css";
import "../assets/slick/slick-theme.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click",
  );
});

console.log(1);
