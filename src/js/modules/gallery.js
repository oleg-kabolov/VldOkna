const gallery = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");
  const body = document.querySelector("body");
  const imageCollection = document.querySelectorAll("img.preview");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);

  bigImage.style.width = "60vh";

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imageCollection.forEach((img) => {});
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
};

export default gallery;
