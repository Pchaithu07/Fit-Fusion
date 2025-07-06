const getFoodBtn = document.querySelector("#get-food");
const foodChart = document.querySelector("#food-chart");
const regionSelect = document.querySelector("#region");
const budgetSelect = document.querySelector("#budget");
const foodTypeSelect = document.querySelector("#food-type");

getFoodBtn.addEventListener("click", () => {
    const region = regionSelect.value;
    const budget = budgetSelect.value;
    const foodType = foodTypeSelect.value;

    fetchFoodChoices(region, budget, foodType).then(choices => {
        foodChart.innerHTML = choices;
        foodChart.style.display = "block";
    });
});
function fetchFoodChoices(region, budget, foodType) {
    const foodData = {
        "Indian": {
            "Low": {
                "Veg": `
                    Rice: 200g (~260 kcal)<br>
                    Dal: 150g (~180 kcal)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    Cucumber: 100g (~16 kcal)<br>
                    Carrot: 100g (~41 kcal)<br>
                    Curd: 100g (~61 kcal)<br>
                    <strong>Total Calories: ~968 kcal</strong><br>
                    <strong>Total Protein: ~14g</strong>
                `,
                "Non-Veg": `
                    Chicken Thigh: 100g (~20g protein)<br>
                    Eggs: 3 large (~18g protein)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    Rice: 150g (~195 kcal)<br>
                    <strong>Total Protein: ~40g</strong><br>
                    <strong>Total Calories: ~975 kcal</strong>
                `
            },
            "Medium": {
                "Veg": `
                    Rice: 200g (~260 kcal)<br>
                    Dal: 200g (~240 kcal)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    Paneer: 100g (~18g protein, ~296 kcal)<br>
                    Mixed Vegetable Curry: 200g (~150 kcal)<br>
                    <strong>Total Calories: ~1,096 kcal</strong><br>
                    <strong>Total Protein: ~49g</strong>
                `,
                "Non-Veg": `
                    Chicken Breast: 100g (~31g protein)<br>
                    Fish (Salmon): 100g (~31g protein)<br>
                    Rice: 200g (~260 kcal)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    <strong>Total Protein: ~62g</strong><br>
                    <strong>Total Calories: ~1,080 kcal</strong>
                `
            },
            "High": {
                "Veg": `
                    Rice: 200g (~260 kcal)<br>
                    Dal: 200g (~240 kcal)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    Paneer: 150g (~27g protein, ~444 kcal)<br>
                    Greek Yogurt: 200g (~12.5g protein, ~120 kcal)<br>
                    <strong>Total Calories: ~1,234 kcal</strong><br>
                    <strong>Total Protein: ~68g</strong>
                `,
                "Non-Veg": `
                    Chicken Breast: 150g (~46g protein)<br>
                    Fish (Salmon): 100g (~31g protein)<br>
                    Eggs: 3 large (~18g protein)<br>
                    Prawns: 100g (~20g protein)<br>
                    Rice: 200g (~260 kcal)<br>
                    Chapati: 2 medium (~150 kcal)<br>
                    <strong>Total Protein: ~115g</strong><br>
                    <strong>Total Calories: ~1,280 kcal</strong>
                `
            }
        },
        "Continental": {
            "Low": {
                "Veg": `
                    Lentils: 1 cup cooked (~18g protein)<br>
                    Brown Rice: 1 cup cooked (~5g protein)<br>
                    Spinach: 2 cups cooked (~6g protein)<br>
                    Chickpeas: 1 cup cooked (~15g protein)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~44g</strong><br>
                    <strong>Total Calories: ~960 kcal</strong>
                `,
                "Non-Veg": `
                    Chicken Breast: 100g (~31g protein)<br>
                    Eggs: 2 large (~12g protein)<br>
                    Canned Tuna: 1 can (~36g protein)<br>
                    Rice: 150g (~195 kcal)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~79g</strong><br>
                    <strong>Total Calories: ~975 kcal</strong>
                `
            },
            "Medium": {
                "Veg": `
                    Quinoa: 1 cup cooked (~8g protein)<br>
                    Greek Yogurt: 1 cup (~10g protein)<br>
                    Sweet Potatoes: 2 medium-sized (~4g protein)<br>
                    Chickpeas: 1 cup cooked (~15g protein)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~37g</strong><br>
                    <strong>Total Calories: ~980 kcal</strong>
                `,
                "Non-Veg": `
                    Chicken Breast: 150g (~46g protein)<br>
                    Salmon: 100g (~31g protein)<br>
                    Eggs: 4 large (~24g protein)<br>
                    Greek Yogurt: 1 cup (~10g protein)<br>
                    Rice: 150g (~195 kcal)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~111g</strong><br>
                    <strong>Total Calories: ~995 kcal</strong>
                `
            },
            "High": {
                "Veg": `
                    Greek Yogurt: 1 cup (~10g protein)<br>
                    Edamame: 1 cup cooked (~17g protein)<br>
                    Chia Seeds: 3 tablespoons (~6g protein)<br>
                    Almonds: 1/2 cup (~15g protein)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~48g</strong><br>
                    <strong>Total Calories: ~1,020 kcal</strong>
                `,
                "Non-Veg": `
                    Filet Mignon: 150g (~27g protein)<br>
                    Tuna Steak: 150g (~31g protein)<br>
                    Lobster: 150g (~30g protein)<br>
                    Duck Breast: 150g (~27g protein)<br>
                    Rice: 150g (~195 kcal)<br>
                    Bread: 2 slices (~140 kcal)<br>
                    <strong>Total Protein: ~115g</strong><br>
                    <strong>Total Calories: ~1,050 kcal</strong>
                `
            }
        }
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            const choices = foodData[region] && foodData[region][budget] && foodData[region][budget][foodType];
            resolve(choices || 'No food choices available for the selected region, budget, and food type.');
        }, 500);
    });
}
