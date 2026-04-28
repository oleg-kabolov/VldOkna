const gallery = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");
  const [arrowLeft, arrowRight] = [
    document.createElement("div"),
    document.createElement("div"),
  ];
  const [imgLeft, imgRight] = [
    document.createElement("img"),
    document.createElement("img"),
  ];
  const body = document.querySelector("body");
  const imageCollection = document.querySelectorAll("img.preview");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);
  imgPopup.appendChild(arrowLeft);
  imgPopup.appendChild(arrowRight);

  bigImage.style.width = "70vw";

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      body.style.overflow = "hidden";
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      body.style.overflow = "visible";
    }
  });

  console.log(imageCollection);

  [imgLeft, imgRight].forEach((img) => {
    img.src = "../assets/img/arrow.png";
    img.style.width = "10vw";
  });

  // Добавляем в контейнеры
  arrowLeft.appendChild(imgLeft);
  arrowRight.appendChild(imgRight);

  arrowLeft.setAttribute(
    "style",
    "position:absolute; top:40vw; left: 1vw; width: 15px; height: 15px; cursor:pointer",
  );
  arrowRight.setAttribute(
    "style",
    "position:absolute; rotate: 180deg; top:48vw; right: 1vw; width: 15px; height: 15px; cursor:pointer",
  );

  [arrowLeft, arrowRight].forEach((div) => {
    div.addEventListener("click", (e) => {
      let target = e.target;
      if (target && target.matches(".arror-left")) {
      }
    });
  });
};

export default gallery;
