import React, {useState, useEffect} from 'react';
import axios from 'axios'

const PhotoUpload = ({setPhotos, photos}) => {
  const [imageSelected, setImageSelected] = useState('');
  const [uploadImages, setUploadImages] = useState([]);

  // let arr = [];
  let returnUrl = [];


  const uploadImage = e => {
    const allUrls = uploadImages.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'FEC-NewReviewPhotosUploads')
      return axios.post('https://api.cloudinary.com/v1_1/may6688/image/upload', formData)
      .then(res => returnUrl.push(res.data.url))
      .then(() => {return returnUrl})
      .then((returnUrl) => setPhotos([...photos, ...returnUrl]))
    })
    setUploadImages([]);
  };

  const handleChange = e => {
    // console.log(e.target.files)
    // console.log('file 1', e.target.files[0].name)
    // console.log('file 2', e.target.files[1].name)
    const {length} = e.target.files;
    for (let i = 0; i < length; i++) {
      // arr.push(e.target.files[i])
      setUploadImages(prev => [...prev, e.target.files[i]]);
    }
  }


  return (
    <div className='newReviewPhotoContainer'>
      {/* {imageName.length > 0 && console.log(imageName)} */}
      {/* {console.log('returnUrl', {returnUrl})} */}
      {/* {console.log('imageSelected', imageSelected)} */}
      {/* {console.log('photos', photos)} */}
      <div className='newReviewPhotoUpload'>
        {/* <span className='newReviewImageAdd'>Add Images</span> */}
        <label htmlFor='newReviewImage' className='newReviewImageAdd'>Choose file</label>
        {uploadImages.length > 0 ?
          <div className='newReviewFilesAddCount'>{uploadImages.length} files added</div> :
          <div className='newReviewFilesAddCount'>No file chosen</div>}
        {photos.length < 5 && (
            <input
            type='file'
            onChange={handleChange}
            multiple
            id='newReviewImage'
          />
        )}
        <button className='newReviewPhotoUploadBtn' onClick={uploadImage}>Upload Photo</button>
      </div>
      <div className='newReviewSubTitle' style={{top: '-5px'}}>At most 5 photos</div>
      <div className='newReviewShowPhotos'>
          {photos.length > 0 && photos.map((url, i) => {
            return <img key={i} className='newReviewPhoto' src={url} alt='' />
          })}
      </div>

    </div>
  )

}

export default PhotoUpload;



