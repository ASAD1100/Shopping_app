import { useContext } from "react"
import {ShopContext} from  '../context/ShopContext'
import { useParams } from "react-router";
import BreadCrumb from "../breadCrumbs/BreadCrumb";
import Productdisplay from "../product_display/Productdisplay";
import Descriptionbox from "../descriptionbox/descriptionbox";
import Relatedproducts from "../realtedproducts/relatedproducts";


const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();//used to find the product id
  const product=all_product.find((e)=>e.id===Number(productId))

  return (
    <div>
      <BreadCrumb product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox />
      <Relatedproducts/>
    </div>
  )
}

export default Product
