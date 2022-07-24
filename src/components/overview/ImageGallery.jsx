import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function VerticalGallery(props) {
  let photos = props.currentStyle.photos;

  if (!props.currentStyle) {
    return null;
  } else {
    let key = -1;
    return photos.map((photo) => {
      let thumb = photo.thumbnail_url;
      key++;
      return (
        <div className='thumb_image_gallery'>
          <img
            key={key}
            id={key}
            src={`${thumb}`}
            className='thumb_image'
            onClick={props.changePic}
          />
          {key === props.currentVertGalIndex ? (
            <div className='vert_gal_indicator'></div>
          ) : null}
        </div>
      );
    });
  }
}

let didRun = false;

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [imgClassName, setImgClassName] = useState('image');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    !props.isExpanded && imgClassName === 'shrink'
      ? setImgClassName('image')
      : null;
    props.setCurrentPhoto(current);
  }, [current]);

  useEffect(() => {
    props.isExpanded ? setImgClassName('big_image') : null;
    !props.isExpanded && imgClassName === 'big_image'
      ? setImgClassName('shrink')
      : null;
  }, [isClicked]);

  // const cursor = {
  //   x: 0,
  //   y: 0,
  // };

  // const sizes = {
  //   width: 702,
  //   height: 600,
  // };

  // window.addEventListener('mousemove', (event) => {
  //   cursor.x = (event.clientX / sizes.width - 0.5) * 2;
  //   cursor.y = (-(event.clientY / sizes.height) - 0.5) * 4;
  // setCursorX(cursor.x)
  // setCursorY(cursor.y)
  // });

  let photos = props.currentStyle.photos;
  if (!props.currentStyle.photos) {
    return null;
  } else {
    // console.log(props.isExpanded)
    const changePic = (e) => {
      let newPic = parseInt(e.target.id);
      setCurrent(current !== newPic ? newPic : current);
      event.stopPropagation();
    };
    const nextSlide = (e) => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      event.stopPropagation();
    };
    const prevSlide = (e) => {
      setCurrent(current === 0 ? length - 1 : current - 1);
      event.stopPropagation();
    };

    const length = props.currentStyle.photos.length;
    return (
      <section className='slider'>
        <div className='imageGallery'>
          <VerticalGallery
            changePic={changePic}
            currentStyle={props.currentStyle}
            currentVertGalIndex={props.currentVertGalIndex}
          />
        </div>
        {/* {if (current === length-1) {
              return (

         )} else if (current === 0) {

          } */}
        {photos.map((photo, index) => {
          let bigPic = photo.url;
          return (
            <div
              key={index}
              className={index === current ? 'slide active' : 'slide'}>
              {(() => {
                if (current === length - 1) {
                  return (
                    <div className='slidey_boi'>
                      {index === current && (
                        <div>
                          <BsChevronLeft
                            className='left-arrow'
                            onClick={prevSlide}
                          />
                          <img
                            key={index}
                            src={`${bigPic}`}
                            className={`${imgClassName}`}
                            onClick={() => {
                              isClicked === false
                                ? setIsClicked(true)
                                : setIsClicked(false);
                              props.handleExpandedView();
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                              transform: `${hovered}`
                                ? `translate(${cursorX}px ,${cursorY * 2}px)`
                                : null,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                } else if (current === 0) {
                  return (
                    <div className='slidey_boi'>
                      {index === current && (
                        <div>
                          <BsChevronRight
                            className={
                              props.isExpanded ? 'grow_r' : 'right-arrow'
                            }
                            onClick={nextSlide}
                          />
                          <img
                            key={index}
                            src={`${bigPic}`}
                            className={`${imgClassName}`}
                            onClick={() => {
                              isClicked === false
                                ? setIsClicked(true)
                                : setIsClicked(false);
                              props.handleExpandedView();
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                              transform: `${hovered}`
                                ? `translate(${cursorX}px ,${cursorY * 2}px)`
                                : null,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div className='slidey_boi'>
                      {index === current && (
                        <div>
                          <BsChevronLeft
                            className='left-arrow'
                            onClick={prevSlide}
                          />
                          <BsChevronRight
                            className={
                              props.isExpanded ? 'grow_r' : 'right-arrow'
                            }
                            onClick={nextSlide}
                          />
                          <img
                            key={index}
                            src={`${bigPic}`}
                            className={`${imgClassName}`}
                            onClick={() => {
                              isClicked === false
                                ? setIsClicked(true)
                                : setIsClicked(false);
                              props.handleExpandedView();
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                              transform: `${hovered}`
                                ? `translate(${cursorX}px, ${cursorY * 2}px)`
                                : null,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                }
              })(current)}
            </div>
          );
        })}
      </section>
    );
  }
};

function ImageGallery(props) {
  return (
    <div className='gallery'>
      <div className='currentImg'>
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
  );
}

export default ImageGallery;
