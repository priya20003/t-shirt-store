import Link from "next/link"

import ProductCard from "../components/ProductCard"
import {  getProducts } from "../services/productServices"


const Page = async () => {
 const products= await getProducts()
  return (
    <div>
      <div className=' bg-slate-400 h-130  p-5'>
   <h1 className=' text-6xl flex justify-center font-extrabold px-7 py-4  text-blue-950'>INDIA MOST PURCHASE T-SHIRT</h1>
   </div>
   <div className="m-4 flex flex-wrap gap-2">
    {products.data.map(item=>  <ProductCard  key={item.id} item={item}/>)}
          
           </div>
           <Link href="/products" className="inline-block text-orange-400 p-4 font-bold hover:underline">View All {">"}</Link>
    </div>
  )
}

export default Page
