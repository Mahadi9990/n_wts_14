import connectToDb from "@/app/database";
import Blog from "@/app/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddBlogData = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDb();
    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;

    const { error } = AddBlogData.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlogData = await Blog.create(extractBlogData);
    if (newlyCreatedBlogData) {
      return NextResponse.json({
        success: true,
        message: "Blog created successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Somethings is wrong",
      });
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Somethings is wrong",
    });
  }
}
