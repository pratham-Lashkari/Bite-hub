export const  organizeIngredients =(categories, ingredients)=> {
  return categories.map(category => {
    return {
      ...category,
      ingredients: category.ingredientsItem.map(ingredientId => {
        return ingredients.find(ingredient => ingredient.id === ingredientId);
      })
    };
  });
}

