/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {MdClear} from 'react-icons/md';


/*==================== INTERNAL MODULES ====================*/
import {Submit, Thumbnail, PhotoPreview, PhotoFrame, CloseModal} from '../../../public/stylesheets/styles.js';

function PhotoUpload({entry, setEntry}) {

  /*----- STATE HOOKS -----*/
  const [images, setImages] = useState([]);

  const queuedPhotos = [];


  /*----- EVENT HANDLERS -----*/

  const handlePhotoSelect = ({target: {name, files, files: {length}}}) => {
    event.preventDefault();
    for (let i = 0; i < length; i++) {
      queuedPhotos.push(files[i])
    }

    queuedPhotos.map(photo => {
      const formData = new FormData();

      formData.append('file', photo);
      formData.append('upload_preset', 'project_atelier');

      return axios.post('https://api.cloudinary.com/v1_1/dsfj56bcp/image/upload', formData)
      .then(response => {
        setImages(prev => [...prev, response.data.url]);
        setEntry({...entry, photos: [...entry.photos, response.data.url]})
      })
      .catch(err => console.error(`Unable to upload photos due to Error: ${err}`));
    })
  }

  const handleRemove = ({target: {name}}) => {
    event.preventDefault();
    const currentImages = [...images]
    currentImages.splice(name, 1);
    setEntry(currentImages);
    setImages(currentImages);
  }

/*----- RENDER FUNCTIONS -----*/

  const renderPhotoPreview = () => {
    return (
      <>
        <label>Preview</label>
        <br/>
        <PhotoPreview>
          {images !== undefined && images.map((photo, index) => {
            return (
              <PhotoFrame key={'photo' + index}>
                <Thumbnail key={index} src={photo} />
                <CloseModal onClick={handleRemove} name={index}>X</CloseModal>
              </PhotoFrame>
            )
          })}
        </PhotoPreview>
      </>
    )
  }

  const renderPhotoUpload = () => {
    if (images && images.length > 5) {
      return <></>
    }
    return (
      <div style={{width: '25em'}}>
        <label>Upload Photos</label>
        <br/>
        <input type="file" onChange={handlePhotoSelect} name="photos"></input>
        <br/>
    </div>
    )
  }


  /*----- RENDERER -----*/
  return (
    <div>
      {renderPhotoPreview()}
      {renderPhotoUpload()}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default PhotoUpload;