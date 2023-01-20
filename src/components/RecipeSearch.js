const spoonAPIKey = "332d07c641fd4c11af3cf76f666e3666";

export async function pantryRecipeSearch(searchCriteria, page, resultsPerPage) {
  console.log("searchCriteria: ", searchCriteria);
  let ingredients = searchCriteria.ingredients;
  let mealType = searchCriteria.mealType;
  let cuisine = searchCriteria.cuisine;
  let ingredientString = ``;
  let typeString = ``;
  let cuisineString = ``;
  ingredientString = ingredients.join().toLowerCase().replace(/ /g, "%20");
  console.log(ingredientString);
  // ingredientString.replace(/ /g, "%20");
  // console.log(ingredientString);
  if (mealType.length > 0) {
    mealType.replace(" ", "%20");
    typeString = `&type=${mealType}`;
  }
  if (cuisine.length > 0) {
    cuisine.replace(" ", "%20");
    cuisineString = `&cuisine=${cuisine}`;
  }
  const offset = (page - 1) * resultsPerPage;
  const fetchString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPIKey}&includeIngredients=${ingredientString}&sort=max-used-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true${typeString}${cuisineString}&offset=${offset}&number=${resultsPerPage}`;
  console.log(fetchString);
  // const response = await fetch(fetchString);
  // const recipes = await response.json();
  // console.log(recipes);
  // return recipes;
}

// https://api.spoonacular.com/recipes/complexSearch?apiKey=332d07c641fd4c11af3cf76f666e3666&query=&includeIngredients=flour,beef,egg%20whites&sort=min-missing-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true&type=main%20course&excludeIngredients=&number=1
// &sortDirection=asc  desc
