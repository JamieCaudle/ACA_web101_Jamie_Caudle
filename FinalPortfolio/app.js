let textAnimation = document.getElementById("textContainer");

const removeAnimation = () => {
  textAnimation.classList.remove("animate__lightSpeedInLeft");
};

const addAnimation = () => {
  textAnimation.classList.add("animate__slideInUp");
};

let screenWidth = window.innerWidth;
if (screenWidth <= 600) {
  removeAnimation();
  addAnimation();
}
