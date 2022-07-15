/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';

/*==================== INTERNAL MODULES ====================*/


function PhotoUpload({handleChange}) {

  /*----- STATE HOOKS -----*/
  const [photos, setPhotos] = useState([]);

  const photoURLs = [];
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
        setPhotos(prev => [...prev, response.data.url]);
        photoURLs.push(response.data.url);
      })
      .catch(err => console.error(`Unable to upload photos due to Error: ${err}`));
    })
  }

  const handleRemove = ({target: {name}}) => {
    event.preventDefault();
    const currentPhotos = [...photos]
    currentPhotos.splice(name, 1);
    setPhotos(currentPhotos);

  }

/*----- RENDER FUNCTIONS -----*/

  const renderPhotoPreview = () => {
    return (
      <>
        <label>Preview</label>
        <br/>
        <div>
          {photos !== undefined && photos.map((photo, index) => {
            return (
              <span key={'photo' + index}>
                <img style={{margin: '10px'}} key={index} src={photo} height="75em" width="auto" />
                <button onClick={handleRemove} name={index}>Remove</button>
              </span>
            )
          })}
        </div>
      </>
    )
  }

  const renderPhotoUpload = () => {
    if (photos && photos.length > 5) {
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