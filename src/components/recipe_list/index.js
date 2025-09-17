import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeListComponet({ recipes }) {
  return (
    <div>
      <h1 className="text-4xl text-center font-extrabold">All Card area</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes && recipes.length > 0
          ? recipes.map((item) => (
              <Link key={item.id} href={`product/${item.id}`}>
                <Card >
                  <CardContent>
                    <div className="">
                      <img src={item.images} alt="" />
                    </div>
                    <div className="">
                      <h1>{item.title}</h1>
                    </div>
                  </CardContent>
                </Card>
              </Link>
          ))
          : null}
      </div>
    </div>
  );
}
