const calories = document.querySelector(".calorie .result .calories");
const cbtn = document.querySelector(".calorie .result .calculate");
const age = document.querySelector(".calorie form #age");
const height = document.querySelector(".calorie form #height");
const weight = document.querySelector(".calorie form #weight");
const errormsg = document.querySelector(".calorie .result .error");
const activity = document.querySelector(".calorie form #activity");
const calorieResult = document.querySelector(".calorie-result");
const foodBtn = document.querySelector("#food-btn");

const calculateTDEE = (BMR, activityLevel) => {
    switch (activityLevel) {
        case "Sedentary":
            return BMR * 1.2;
        case "Lightly Active":
            return BMR * 1.375;
        case "Moderately Active":
            return BMR * 1.55;
        case "Very Active":
            return BMR * 1.725;
        case "Extra Active":
            return BMR * 1.9;
        default:
            return BMR;
    }
};

cbtn.addEventListener("click", () => {
    if (
        age.classList.contains("invalid") ||
        height.classList.contains("invalid") ||
        weight.classList.contains("invalid")
    ) {
        errormsg.classList.add("active");
        return;
    }

    errormsg.classList.remove("active");
    let genderValue = document.querySelector(
        ".calorie form input[name='gender']:checked"
    ).value;
    let BMR =
        genderValue === "male"
            ? 88.362 + 13.397 * weight.value + 4.799 * height.value - 5.677 * age.value
            : 447.593 + 9.247 * weight.value + 3.098 * height.value - 4.330 * age.value;

    let TDEE = calculateTDEE(BMR, activity.value);
    calories.innerHTML = `Calories to be eaten: ${TDEE.toFixed(2)}`;
    calorieResult.style.display = "block";
});

foodBtn.addEventListener("click", () => {
    document.querySelector(".food-choices").style.display = "block";
});
