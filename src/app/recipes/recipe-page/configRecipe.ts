export const recipeConfig = (data : any, tags: any) =>[ 
    {
        id:data.idMeal,
        title : data.strMeal,
        area: data.strArea,
        cat: data.strCategory,
        img: data.strMealThumb,
        desc : data.strInstructions,
        sourceRecipe : data.strSource,
        youtube: data.strYoutube,
        tags: tags,
        ingredients : [data.strIngredient1,data.strIngredient2,data.strIngredient3,data.strIngredient4,data.strIngredient5,data.strIngredient6,data.strIngredient7,data.strIngredient8,data.strIngredient9,data.strIngredient10,data.strIngredient11,data.strIngredient12,data.strIngredient13,data.strIngredient14,data.strIngredient15,data.strIngredient16,data.strIngredient17,data.strIngredient18,data.strIngredient19,data.strIngredient20],
        measures:[data.strMeasure1,data.strMeasure2,data.strMeasure3,data.strMeasure4,data.strMeasure5,data.strMeasure6,data.strMeasure7,data.strMeasure8,data.strMeasure9,data.strMeasure10,data.strMeasure11,data.strMeasure12,data.strMeasure13,data.strMeasure14,data.strMeasure15,data.strMeasure16,data.strMeasure17,data.strMeasure18,data.strMeasure19,data.strMeasure20,],
        like: false

    }]
