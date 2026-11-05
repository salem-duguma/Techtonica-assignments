const ingredients = document.querySelectorAll(
  "#ingredients-list li"
);
ingredients.forEach(function(ingredient) {
  const ingredientCheckbox = document.createElement("input");

  ingredientCheckbox.type = "checkbox";

  ingredient.prepend(ingredientCheckbox);
});