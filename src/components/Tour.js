import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <div className='tour-container'>
        <div>
            <img src={image} alt='logo' />
        </div>
        <div className='tour-info'>
            <div>
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
            <p>
              {readMore ? info : `${info.substr(0,180)}...`}
              <button onClick={()=> setReadMore(!readMore)}>
                {readMore ? 'showLess' : 'readMore'}
              </button>
            </p>
            <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    </div>
  )
}

export default Tour