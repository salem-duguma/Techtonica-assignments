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
const toggleButton = document.querySelector("#toggle-tips-button");
const cookingTips = document.querySelector("#cooking-tips");
toggleButton.addEventListener("click", function() {
if (cookingTips.hidden === true) {
    cookingTips.hidden = false;
    toggleButton.textContent = "Hide Cooking Tips";
 } else {
    cookingTips.hidden = true;
    toggleButton.textContent = "Show Cooking Tips";
 }
});
const changeColorButton = document.querySelector(
    "#change-color-button"
);
changeColorButton.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
});
const addNotesButton = document.querySelector("#add-notes-button");

const notesContainer = document.querySelector("#notes-container");
addNotesButton.addEventListener("click", function() {
    if (notesContainer.children.length === 0) {
        const notesTextArea = document.createElement("textarea");

        notesTextArea.placeholder = "Write your cooking notes here...";

        notesContainer.appendChild(notesTextArea);
    }
});