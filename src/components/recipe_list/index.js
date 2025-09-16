import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function RecipeListComponet({ recipes }) {
  return (
    <div>
        <h1 className="text-4xl text-center font-extrabold">All Card area</h1>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes && recipes.length > 0
          ? recipes.map((item) => (
              <Card key={item.id}>
                <CardContent>
                    <div className="">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="">
                        <h1>{item.name}</h1>
                    </div>
                </CardContent>
              </Card> 
          ))
          : null}
        </div>
    </div>
  );
}
