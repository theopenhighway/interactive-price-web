const sliderEl = document.querySelector("#myRange")
const viewValue = document.querySelector(".view-count")
const subPrice = document.querySelector(".subs-cost")
const unit = document.querySelector(".unit")
const toggleSwitch = document.querySelector("#switch")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value; 
    viewValue.textContent = tempSliderValue;

    const monthlyPricing = (tempSliderValue * 0.16).toFixed(2)
    const annualPricing = ((monthlyPricing * 12)*0.75).toFixed(2)
    subPrice.textContent = monthlyPricing;

    const progress = (tempSliderValue / sliderEl.max) * 100;

        


   
    sliderEl.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;
  })

  toggleSwitch.addEventListener('click', () => {
        
    if (unit.innerHTML == " /month") {
        unit.innerHTML = " /year"
    } else {
        unit.innerHTML = " /month"
    }
})