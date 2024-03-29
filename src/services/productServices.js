import { stripe } from "../utils/stripe";

export const getProducts=async (limit)=>{
    const products= await stripe.products.list({
        limit:limit||5,
        expand:['data.default_price']
    })
    return products
}

export const getProductById=async (productId)=>{
    const product= await stripe.products.retrieve(productId,{
       
        expand:['default_price']
    })
    return product
}