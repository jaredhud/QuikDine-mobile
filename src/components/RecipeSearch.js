const spoonAPIKey = "332d07c641fd4c11af3cf76f666e3666";

async function complexRecipeSearch(searchCriteria) {
  console.log("searchCriteria: ", searchCriteria);
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPIKey}&query=${searchCriteria}&addRecipeInformation=true`
  );
  const recipes = await response.json();
  console.log(recipes);
  return recipes;
}

// https://api.spoonacular.com/recipes/complexSearch?apiKey=332d07c641fd4c11af3cf76f666e3666&query=&includeIngredients=flour,beef,egg%20whites&sort=min-missing-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true&type=main%20course&excludeIngredients=&number=1
// &sortDirection=asc  desc
