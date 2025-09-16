"use client";
import useSWR from "swr";
// import { useEffect, useState } from "react"
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Clint_site_data() {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // const [loading, setloading] = useState(false);
  // const [data, setdata] = useState([]);
  // async function dataFetch (){
  //     try {
  //         setloading(true)
  //         const res =await fetch('https://dummyjson.com/products')
  //         const all =await res.json()
  //         if(all?.products){
  //             setdata(all.products)
  //             setloading(false)
  //         }
  //     } catch (error) {
  //        console.log(error)
  //        setloading(false)
  //        setdata([])
  //     }
  // }
  // useEffect(()=>{
  //     dataFetch()
  // },[])
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      {data?.products && data?.products?.length > 0
        ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
        : null}
      
    </div>
  );
}
