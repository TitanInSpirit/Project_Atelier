import React, {useEffect} from 'react'

const RatingScale = ({characteristic}) => {
  const des = {Comfort: ['Uncomfortable', 'Perfect'], Fit: ['Too tight', 'Too loose'], Length: ['Too short', 'Too long'], Quality: ['Poor', 'Perfect'], Size: ['Too small', 'Too big'], Width: ['Too narrow', 'Too wide'] }

  let key = Object.keys(characteristic)[0]



  return (
    <div>
      <div>{key}</div>
      <div className='ratingScalepoints'>
        {[...Array(5)].map((ele, i) => {
          return <div key={i} className='ratingScalepointslooking'></div>
        })}
      </div>
      <div className='ratingScaleDes'>
        <div>{des[key][0]}</div>
        <div>{des[key][1]}</div>
      </div>
    </div>
  )
}

export default RatingScale;