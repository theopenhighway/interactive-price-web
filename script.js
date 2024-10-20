const sliderEl = document.querySelector("#range")
const viewValue = document.querySelector(".view-count")
const subPrice = document.querySelector(".subs-count")


function progressScript() {
    const sliderValue = sliderEl.value;
    sliderEl.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
  }
  
  progressScript()
  
// sliderEl.addEventListener("input", (event) => {
//   const tempSliderValue = event.target.value;
//   viewValue.textContent = tempSliderValue;

//   const progress = (tempSliderValue / sliderEl.max) * 100;

//   sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
// })