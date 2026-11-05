const ingredients = document.querySelectorAll(
  "#ingredients-list li"
);
ingredients.forEach(function(ingredient) {
  const ingredientCheckbox = document.createElement("input");

  ingredientCheckbox.type = "checkbox";

  ingredient.prepend(ingredientCheckbox);
  ingredientCheckbox.addEventListener("change", function() {
    ingredient.classList.toggle("checked");
    updateIngredientCounter();
});
});
const ingredientCounter = document.querySelector(
  "#ingredient-counter"
);
function updateIngredientCounter() { 
    const checkedIngredients = document.querySelectorAll(
  "#ingredients-list input:checked"
).length;
const remainingIngredients = 
ingredients.length - checkedIngredients;
ingredientCounter.textContent =
  `Ingredients remaining: ${remainingIngredients}`;
}
updateIngredientCounter();