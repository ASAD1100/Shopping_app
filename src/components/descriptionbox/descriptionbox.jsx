import React from 'react'
import './descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox-fade">Reviews (122)</div>

      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sint fugiat quam 
            aliquid beatae ad velit repellendus incidunt sunt eaque nihil repudiandae quas modi rerum 
            deserunt consequatur, esse tenetur laudantium.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Temporibus, amet adipisci! Illo doloribus voluptas similique magnam aliquid
             repellendus earum, porro consectetur cumque, cum vero rerum sunt ab maiores. Voluptatem, repellat!
        </p>
      </div>
    </div>
  )
}

export default Descriptionbox
