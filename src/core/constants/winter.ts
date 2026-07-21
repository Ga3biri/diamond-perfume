import { Product } from "../../app/shared/models/product.model";

export const PRODUCTS: Product[] = [

{
id:1,
name:"Accento",
image:"/images/products/accento.webp",
minPrice:40,
maxPrice:700,
category:"Summer",
isNew:true
},

{
id:2,
name:"Acqua di Gio",
image:"/images/products/acqua.webp",
minPrice:40,
maxPrice:500,
category:"Summer",
isNew:false
},

{
id:3,
name:"40 Knots",
image:"/images/products/40knots.webp",
minPrice:50,
maxPrice:800,
category:"Winter",
isNew:true
},

{
id:4,
name:"212 VIP",
image:"/images/products/212vip.webp",
minPrice:40,
maxPrice:500,
category:"Winter",
isNew:false
}

];