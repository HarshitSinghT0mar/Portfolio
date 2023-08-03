import React from 'react'

const Card = () => {
  return (
    <div className='project-card'>
    <div className='project-card-img-box'>
        <img loading="lazy" src='./assets/todoImage.jpg'/>
    </div>
    <div className='project-card-details'>
<h3 className='project-title'>MyStore</h3>
<p className='project-description'>A responsive eCommerce platform with user-centric features, including 'Add to Cart,' smart filtering, and 'Clear Cart,' to deliver a seamless and engaging shopping experience.</p>
<div className='project-card-links'>
<a className='project-link' href='https://harshitstore.netlify.app/' target='_blank'>Visit Site</a>
<a className='project-link' href='#'>Visit Code</a>
</div>
    </div>
      
    </div>
  )
}

export default Card
