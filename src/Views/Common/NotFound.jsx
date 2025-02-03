import React from 'react'
import notfound from '../.././assets/notfound.jpg'

const NotFound = () => {
  return (
<div className='col-12 notFoundContainer d-flex justify-content-center align-items-center'>
    <div className="col-10 notFound h-100">
        <img src={notfound} className='notFoundImage' />

    </div>
   

</div>
  )
}

export default NotFound