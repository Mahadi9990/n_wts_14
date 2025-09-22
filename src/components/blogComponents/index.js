"use client";

import { useState } from "react";
import AddComponent from "../addComponetn";

const initialFromData = {
  title:"",
  description:""
}
export default function BlogComponents() {
  const [openDilog, setopenDilog] = useState(false);
  const [loading, setloading] = useState(false);
  const [blogFormData, setblogFormData] = useState(initialFromData);
  console.log(blogFormData)
  
  async function handleSaveData() {
    try {
      setloading(true)
      const apiRespond = await fetch("/api/add-blog",{
        method:"POST",
        body:JSON.stringify(blogFormData)
      })
      const result = await apiRespond.json()
      if(result?.success){
        setblogFormData(blogFormData)
        setloading(false)
        setopenDilog(false)
      }
    } catch (error) {
      console.log(error)
      setloading(false)
      setblogFormData(initialFromData)
    }
  }
  return (
    <div>
      <AddComponent loading={loading} setloading={setloading} blogFormData={blogFormData} setblogFormData={setblogFormData} openDilog={openDilog} setopenDilog={setopenDilog} handleSaveData={handleSaveData}/>
    </div>
  );
}
