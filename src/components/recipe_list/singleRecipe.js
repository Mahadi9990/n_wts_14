import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function SingleRecipe({ recipes }) {
  return (
    <div>
        <h1 className="text-4xl text-center font-extrabold mb-5">Single Card area</h1>
        <div className="w-92 h-72 flex justify-center items-center mx-auto">
              <Card>
                <CardContent>
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-center">{recipes.title}</h1>
                    </div>
                    <div className="">
                    <img src={recipes.images[0]} alt={recipes.title} /> 
                    </div>
                    <div className="">
                        <p className="justify-center">{recipes.description}</p>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                        <button className="btn font-bold">{recipes.category.toUpperCase()}</button>
                        <button className="btn">$ {recipes.price}</button>
                    </div>
                </CardContent>
              </Card> 
        </div>
    </div>
  );
}
