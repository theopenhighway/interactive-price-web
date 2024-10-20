const sliderEl = document.querySelector("#myRange")
const viewValue = document.querySelector(".view-count")
const subPrice = document.querySelector(".subs-count")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value; 
    
    viewValue.textContent = tempSliderValue;
    
    const progress = (tempSliderValue / sliderEl.max) * 100;
   
    sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  })
  
// sliderEl.addEventListener("input", (event) => {
//   const tempSliderValue = event.target.value;
//   viewValue.textContent = tempSliderValue;

//   const progress = (tempSliderValue / sliderEl.max) * 100;

//   sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
// })