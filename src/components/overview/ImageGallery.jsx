import React, {useState, useEffect} from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function VerticalGallery (props) {

  let photos = props.currentStyle.photos

  if (!props.currentStyle){
    return null;
  } else {
    let key = -1;
    return (
      photos.map((photo) => {
        let thumb = photo.thumbnail_url;
        key++
        return(
          <div className="thumb_image_gallery">
          <img key={key} id={key} src={`${thumb}`} className="thumb_image" onClick={props.changePic}/>
          {key === props.currentVertGalIndex ? <div className="vert_gal_indicator"></div> : null}
          </div>
        )
      })
     )
  }
}

let didRun = false;

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    props.setCurrentPhoto(current)
  }, [current])

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
        {photos.map((photo, index) => {
          let bigPic = photo.url;
          return(
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
              <div className="imageGallery">
                <VerticalGallery changePic={changePic} currentStyle={props.currentStyle} currentVertGalIndex={props.currentVertGalIndex} />
              </div>
              <BsChevronLeft className="left-arrow"  onClick={prevSlide}/>
              <BsChevronRight className="right-arrow" onClick={nextSlide}/>
              {index === current && (<img key={index} src={`${bigPic}`} className="image"/>)}
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
        <ImageSlider
        currentStyle={props.currentStyle}
        setCurrentPhoto={props.setCurrentPhoto}
        currentPhoto={props.currentPhoto}
        currentVertGalIndex={props.currentVertGalIndex}
        />
      </div>
  </div>
}

export default ImageGallery;
