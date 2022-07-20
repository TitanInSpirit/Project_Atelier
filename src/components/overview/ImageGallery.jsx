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
  const [hovered, setHovered] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  let className = 'image'

  props.isExpanded ? className ='big_image' : null
  useEffect(() => {
    props.setCurrentPhoto(current)
  }, [current])

  const cursor = {
    x: 0,
    y: 0
}

const sizes = {
  width: 702,
  height: 600
}

  window.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / sizes.width - 0.5) * 2
    cursor.y = (-(event.clientY / sizes.height) - 0.5) * 4
    // setCursorX(cursor.x)
    // setCursorY(cursor.y)
})

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
          <VerticalGallery changePic={changePic} currentStyle={props.currentStyle} currentVertGalIndex={props.currentVertGalIndex} />
        </div>
        {photos.map((photo, index) => {
          let bigPic = photo.url;
          return(
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {(() => {
                if (current === length-1) {
                  return (
                  <>
                  <BsChevronLeft className="left-arrow"  onClick={prevSlide}/>
                  {index === current && (<img key={index} src={`${bigPic}`} className={`${className}`} onClick={props.handleExpandedView} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{transform: `${hovered}` ? `translate(${cursorX}px ,${cursorY*2}px)` : null}}/>)}
                  </>
                  )
                } else if (current === 0) {
                  return (
                  <>
                  <BsChevronRight className="right-arrow" onClick={nextSlide}/>
                  {index === current && (<img key={index} src={`${bigPic}`} className={`${className}`} onClick={props.handleExpandedView} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{transform: `${hovered}` ? `translate(${cursorX}px ,${cursorY*2}px)` : null}}/>)}
                  </>
                  )
                } else {
                  return (
                  <>
                  <BsChevronLeft className="left-arrow"  onClick={prevSlide}/>
                  <BsChevronRight className="right-arrow" onClick={nextSlide}/>
                  {index === current && (<img key={index} src={`${bigPic}`} className={`${className}`}onClick={props.handleExpandedView} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{transform: `${hovered}` ? `translate(${cursorX}px, ${cursorY*2}px)` : null}}/>)}
                  </>
                  )
                }
              })(current)}
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
        handleExpandedView={props.handleExpandedView}
        isExpanded={props.isExpanded}
        />
      </div>
  </div>
}

export default ImageGallery;
