import React, {useEffect} from 'react'

const RatingScale = ({characteristic}) => {
  const des = {Comfort: ['Poor', 'Perfect'], Fit: ['Too big', 'Too small'], Length: ['Too long', 'Too short'], Quality: ['Poor', 'Perfect']}

  let key = Object.keys(characteristic)[0]



  return (
    <div>
      <div>{key}</div>
      <div className='ratingScalepoints'>
        {[1,2,3,4,5].map((ele, i) => {
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