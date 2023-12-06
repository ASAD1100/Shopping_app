import "./offers.css"
import exclusive_img from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className="offers">
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on best sellers products</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_img}  alt="" />
        </div>
    </div>
  )
}

export default Offers

