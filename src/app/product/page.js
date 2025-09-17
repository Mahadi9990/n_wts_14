import RecipeListComponet from '@/components/recipe_list'
import React from 'react'



async function allRecipeList (){

    try {
        const res =await fetch("https://dummyjson.com/products")
        const data = await res.json()
        return data?.products

    } catch (error) {
        throw new Error(error)
    }
}
export default async function RecipeListPage() {
        const recipes = await allRecipeList()
  return (
    <div>{<RecipeListComponet recipes={recipes} />}</div>
  )
}
