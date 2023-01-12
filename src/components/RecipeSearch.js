const spoonAPIKey = "332d07c641fd4c11af3cf76f666e3666";

export async function complexRecipeSearch(
  searchCriteria,
  page,
  resultsPerPage
) {
  console.log("searchCriteria: ", searchCriteria);
  let ingredients = searchCriteria.ingredients;
  let mealType = searchCriteria.mealType;
  let typeString = ``;
  if (mealType) {
    mealType.replace(" ", "%20");
    typeString = `&type=${mealType}`;
  }
  const offset = (page - 1) * resultsPerPage;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPIKey}&${ingredients}&sort=max-used-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true${typeString}&offset=${offset}&number=${resultsPerPage}`
  );
  const recipes = await response.json();
  console.log(recipes);
  return recipes;
}

// https://api.spoonacular.com/recipes/complexSearch?apiKey=332d07c641fd4c11af3cf76f666e3666&query=&includeIngredients=flour,beef,egg%20whites&sort=min-missing-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true&type=main%20course&excludeIngredients=&number=1
// &sortDirection=asc  desc
