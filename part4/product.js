import { products } from "./Data.js"
export const product = () => {
    products.forEach( (ele) => {console.log(`${ele.id} - ${ele.name} - ${ele.desc} - ${ele.price} - ${ele.category} `)} )
}