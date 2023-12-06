import React from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'


const Productdisplay = (props) => {
    const {product}= props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt=""  className='productdisplay-main-img'/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon}  alt="" />
            <img src={star_icon}  alt="" />
            <img src={star_icon}  alt="" />
            <img src={star_dull_icon}  alt="" />
            <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
                A lightwight jacket useful in winter
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add to cart</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span>Women, T-Shirt, crop top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags :</span>Modern , latest
            </p>
        </div>
      </div>
    </div>
  )
}

export default Productdisplay