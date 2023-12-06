import Hero from "../hero/Hero"
import Popular from "../popular/Popular"
import Offers from "../offers/Offers"
import NewCollections from "../newCollections/NewCollections"
import NewsLetter from "../newsLetter/NewsLetter"
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
