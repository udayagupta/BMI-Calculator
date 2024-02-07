let button = document.querySelector(".calculate-btn");
let meter = document.querySelectorAll(".meter-value");
let meter_values = Array.from(meter);
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let bmi_value = document.querySelector(".bmi-value");
let reset = document.querySelector(".reset");


button.addEventListener("click", () => {
    if (weight.value === "" || height.value === "") {
        weight.style.borderColor = "red";
        height.style.borderColor = "red";
        return false;
    }

    let bmi = calculate_bmi(weight.value, height.value);

    if (bmi && bmi !== "NaN") bmi_value.textContent = bmi;


    // [div.meter-value.normal, div.meter-value.under-weight, div.meter-value.over-weight, div.meter-value.obese, div.meter-value.over-obese]
    if (bmi < 18.5 && bmi > 0) {
        meter_values[1].classList.toggle("bg-under-weight")
    }

    else if (bmi >= 18.5 && bmi < 24.9) {
        meter_values[0].classList.toggle("bg-normal");
    }

    else if (bmi >= 25 && bmi < 29.9) {
        meter_values[2].classList.toggle("bg-over-weight")
    }

    else if (bmi >= 30 && bmi < 39.9) {
        meter_values[3].classList.togglr("bg-obese")
    }

    else if (bmi >= 40) {
        meter_values[4].classList.toggle("bg-over-obese");
    }

    
    button.style.display = "none";
    reset.style.display = "block";
});


reset.addEventListener("click", () => {
    

    if (weight.value !== "" && height.value !== "") {
        bmi_value.innerHTML = "";
        weight.value = "";
        height.value = "";
        button.style.display = "block";
        reset.style.display = "none";
        weight.style.borderColor = "gray";
        height.style.borderColor = "gray";

        meter_values.forEach(e => {
            
            let classList = e.classList;

            if (classList.length === 3) {
                let lastClass = classList[classList.length - 1];
                e.classList.remove(lastClass);
            }

            
        });
    } else return false;
});


function calculate_bmi(weight, height) {
    if (weight <= 0 || height <= 0) return false;

    let height_in_m = height / 100;

    let bmi = weight / (height_in_m * height_in_m);

    return bmi.toFixed(2);
}
