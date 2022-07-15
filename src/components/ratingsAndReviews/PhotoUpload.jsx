import React, {useState, useEffect} from 'react';
import axios from 'axios'

const PhotoUpload = ({setPhotos, photos}) => {
  const [imageSelected, setImageSelected] = useState('');
  let arr = [];
  let returnUrl = []

  const uploadImage = e => {
    const allUrls = arr.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'FEC-NewReviewPhotosUploads')
      return axios.post('https://api.cloudinary.com/v1_1/may6688/image/upload', formData)
      .then(res => returnUrl.push(res.data.url))
      .then(() => {return returnUrl})
      .then((returnUrl) => setPhotos([...photos, ...returnUrl]))
    })
  };

  const handleChange = e => {
    console.log(e.target.files)
    console.log('file 1', e.target.files[0])
    console.log('file 2', e.target.files[1])
    const {length} = e.target.files;
    for (let i = 0; i < length; i++) {
      arr.push(e.target.files[i])
    }
  }


  return (
    <div className='newReviewPhotoContainer'>
      {/* {arr.length > 0 && console.log('arrrrr is', arr)}
      {console.log('returnUrl', {returnUrl})} */}
      {/* {console.log('imageSelected', imageSelected)} */}
      {/* {console.log('photos', photos)} */}
      <div className='newReviewPhotoUpload'>
        {photos.length < 5 && (
            <input
            type='file'
            onChange={handleChange}
            multiple
            className='newReviewPhotoInput'
            id='fileInput'
          />
        )}
        <button className='newReviewPhotoUploadBtn' onClick={uploadImage}>Upload Photo</button>
      </div>
      <div className='newReviewShowPhotos'>
      {photos.length > 0 && photos.map((url, i) => {
        return <img key={i} className='newReviewPhoto' src={url} alt='' />
      })}
      </div>

    </div>
  )

}

export default PhotoUpload;



