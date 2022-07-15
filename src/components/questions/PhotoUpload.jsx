/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';

/*==================== INTERNAL MODULES ====================*/


function PhotoUpload({handleChange}) {

  /*----- STATE HOOKS -----*/
  const [photos, setPhotos] = useState([]);

  const photoURLs = [];
  const uploadedPhotos = [];


  /*----- EVENT HANDLERS -----*/

  const handlePhotoSelect = (event) => {
    const {target: {name, files}} = event;
    console.log(event);
    console.log(FileList);
    console.log(FileList[0]);
    console.log(Array.from(files));
    // setPhotos(prev => ({
    //   ...prev,
    //    [name]: [...photos, files]
    // }))
    setPhotos([...Array.from(files)]);

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      uploadedPhotos.push(reader.result);
      console.log(uploadedPhotos);
    }

  }



  const handlePhotoSubmit = (event) => {
    event.preventDefault();
    const photoURLs = [];
    const formData = new FormData();

    formData.append('upload_preset', 'project_atelier');
    photos.map(photo => formData.append('files[]', photo));

    axios.post('https://api.cloudinary.com/v1_1/dsfj56bcp/image/upload', formData)
    .then((response) => console.log(response.body) /* photoURLs = [...some value] */)
    .catch((err) => console.error(`Unable to upload photos due to Error: ${err}`));

        // map over photos array and upload each file to Cloudinary
    // photos.map(() => {axios.post('https://api.cloudinary.com/v1_1/dsfj56bcp/image/upload', formData)
        // when cloudinary returns the uploaded photo URL, add it to the photoURL array
    //   .then((response) => console.log(response.body) /* photoURLs = [...some value] */)
    //   .catch((err) => console.error(`Unable to upload photos due to Error: ${err}`));
    // });

    // add finished photoURL array to state in parent component
  }


/*----- RENDER FUNCTIONS -----*/

  const renderPhotoPreview = () => {

    return (
      <>
        <label>Preview</label>
        <p>img</p>
        <img src={uploadedPhotos[0]} />
        {/* {uploadedPhotos.map((photo) => {
          return (
            <>
              <p>img</p>
              <img src={photo}/>
            </>
          )
        })} */}
      </>
    )
  }

  const renderPhotoUpload = () => {

    return (
      <div style={{width: '25em'}}>
        <label>Upload Photos</label>
        <br/>
        <input type="file" multiple onChange={handlePhotoSelect} name="photos"></input>
        <br/>
        <button onClick={handlePhotoSubmit}>Upload</button>
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