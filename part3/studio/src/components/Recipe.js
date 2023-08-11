const RecipeAuthor = () => {
   let authorLink = "https://www.facebook.com/marybMCC3/";
   let authorPhoto = "data:image/jpeg;base64,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";
   let authorName = "Mary Berg";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 lemon, zested", "1 1/2 cups buttermilk", "4 eggs", "3 teaspoons vanilla extract", "1/2 teaspoon almond extract"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Strawberry Lemon Crepe Cake</h1>
            <p>A crepe cake with lemon curd filling and topped with strawberries and whipped cream</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="data:image/jpeg;base64,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" alt="recipePhoto" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}