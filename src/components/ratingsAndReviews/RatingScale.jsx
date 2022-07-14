import React, {useEffect} from 'react'
import {VscTriangleDown} from 'react-icons/vsc'

const RatingScale = ({characteristic}) => {
  const des = {Comfort: ['Uncomfortable', 'Perfect'], Fit: ['Too tight', 'Too long'], Length: ['Too short', 'Too long'], Quality: ['Poor', 'Perfect'], Size: ['Too small', 'Too wide'], Width: ['Too narrow', 'Too wide'] }

  let key = Object.keys(characteristic)[0]

  const calScore = () => {
    if(characteristic) {
      return Math.floor((characteristic[key].value / 5).toFixed(2) * 95);

    }
  }

  const inlineStyle = {
    position: 'relative',
    bottom: '-20px',
    marginLeft: `${calScore()}%`
  }

  return (
    <div>
      {/* {console.log('chara',characteristic)}
      {console.log(calScore())} */}
      <div className='ratingScaleTitle'>{key}</div>
      <div className='ratingScaleContainer'>
        <VscTriangleDown style={inlineStyle}/>
        <div className='ratingScalepoints'>
          {[...Array(5)].map((ele, i) => {
            return <div key={i} className='ratingScalepointslooking'></div>
          })}
        </div>
      </div>
      <div className='ratingScaleDes'>
        <div>{des[key][0]}</div>
        <div>{des[key][1]}</div>
      </div>
    </div>
  )
}

export default RatingScale;