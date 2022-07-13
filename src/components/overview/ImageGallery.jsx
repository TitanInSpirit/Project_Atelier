import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function VerticalGallery (props) {

  let photos = props.currentStyle.photos

  if (!props.currentStyle.photos){
    return null;
  } else {
    let key = 0;
    return (
      photos.map((photo) => {
        let thumb = photo.thumbnail_url;
        key++
        return(
          <img key={key} id={key-1} src={`${thumb}`} className="thumb_image" onClick={props.changePic}/>
        )
      })
     )
  }
}

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0)

  let photos = props.currentStyle.photos

  if (!props.currentStyle.photos) {
    return null;
  } else {
    const changePic = (e) => {
      let newPic = parseInt(e.target.id)
      setCurrent(current !== newPic ? newPic : current)
    }
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current +1)
    }
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current -1)
    }
    const length = props.currentStyle.photos.length
    return (
      <section className="slider">
        <div className="imageGallery">
        <VerticalGallery changePic={changePic} currentStyle={props.currentStyle}/>
        </div>
        {photos.map((photo, index) => {
          let bigPic = photo.url;
          return(
            <div key={index} className={index === current? 'slide active' : 'slide'}>
              <FaArrowAltCircleLeft className="left-arrow"  onClick={prevSlide}/>
              <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
              {index === current && (
                <img key={index} src={`${bigPic}`} className="image"/>
              )}
            </div>
          )
        })}
      </section>
    )
  }
}

function ImageGallery (props) {

  return <div className="gallery">

      <div className="currentImg">
        <ImageSlider currentStyle={props.currentStyle}/>
      </div>
  </div>
}

export default ImageGallery;
