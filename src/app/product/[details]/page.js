
import SingleRecipe from "@/components/recipe_list/singleRecipe";

export default async function ProductPage({ params }) {
  const { details } =await params; 
  let recipes ={}
  try {
    const res = await fetch(`https://dummyjson.com/products/${details}`)
    const data =await res.json()
    recipes = data
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      <SingleRecipe recipes={recipes}/>
    </div>
  );
}