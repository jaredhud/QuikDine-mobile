const spoonAPIKey = "332d07c641fd4c11af3cf76f666e3666";

export async function pantryRecipeSearch(searchCriteria, page, resultsPerPage) {
  console.log("searchCriteria: ", searchCriteria);
  const query = searchCriteria.query;
  const ingredients = searchCriteria.ingredients;
  const mealType = searchCriteria.mealType;
  const cuisine = searchCriteria.cuisine;
  let ingredientString = ``;
  let typeString = ``;
  let cuisineString = ``;
  if (query.length > 0) {
    const queryString = `&query=${query}`;
  } else {
    const queryString = ``;
  }
  if (ingredients.length > 0) {
    ingredientString = `&includesIngredients=${ingredients
      .join()
      .toLowerCase()
      .replace(/ /g, "%20")}`;
  }
  console.log(ingredientString);
  if (mealType.length > 0) {
    typeString = `&type=${mealType.replace(/ /g, "%20")}`;
  }
  if (cuisine.length > 0) {
    cuisineString = `&cuisine=${cuisine.replace(/ /g, "%20")}`;
  }
  const offset = (page - 1) * resultsPerPage;
  const fetchString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPIKey}${ingredientString}&sort=max-used-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true${typeString}${cuisineString}&offset=${offset}&number=${resultsPerPage}`;
  console.log(fetchString);
  // const response = await fetch(fetchString);
  // const recipes = await response.json();
  // console.log(recipes);
  // return recipes;
}

// https://api.spoonacular.com/recipes/complexSearch?apiKey=332d07c641fd4c11af3cf76f666e3666&query=&includeIngredients=flour,beef,egg%20whites&sort=min-missing-ingredients&addRecipeInformation=true&addRecipeNutrition=false&fillIngredients=true&type=main%20course&excludeIngredients=&number=1
// &sortDirection=asc  desc
