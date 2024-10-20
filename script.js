const sliderEl = document.querySelector("#myRange")
const viewValue = document.querySelector(".view-count")
const subPrice = document.querySelector(".subs-cost")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value; 
    viewValue.textContent = tempSliderValue;

    const pricing = (tempSliderValue * 0.16).toFixed(2)

    subPrice.textContent = pricing;

    const progress = (tempSliderValue / sliderEl.max) * 100;


   
    sliderEl.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;
  })
