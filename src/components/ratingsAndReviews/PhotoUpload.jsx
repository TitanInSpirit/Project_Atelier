import React, {useState, useEffect} from 'react';
import axios from 'axios'

const PhotoUpload = ({setPhotos, photos}) => {
  const [imageSelected, setImageSelected] = useState('');
  let arr = [];
  let returnUrl = []

  const uploadImage = e => {
    // const {files} = e.target;
    // console.log('files',files)
    // return arr.map(file => {
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('upload_preset', 'FEC-NewReviewPhotosUploads')
    //   return axios.post('https://api.cloudinary.com/v1_1/may6688/image/upload', formData)
    //   .then(res => returnUrl.push(res.data.url))
    // })
      const formData = new FormData();
      formData.append('file', imageSelected);
      formData.append('upload_preset', 'FEC-NewReviewPhotosUploads')
      return axios.post('https://api.cloudinary.com/v1_1/may6688/image/upload', formData)
      .then(res => setPhotos([...photos, res.data.url]))
  };

  // useEffect(() => {
  //   setPhotos([...photos, ...returnUrl])
  // }, [returnUrl])


  // const handleChange = e => {
  //   console.log(e.target.files)
  //   console.log('file 1', e.target.files[0])
  //   console.log('file 2', e.target.files[1])
  //   const {length} = e.target.files;
  //   for (let i = 0; i < length; i++) {
  //     // setImageSelected([...imageSelected, e.target.files[i]])
  //     arr.push(e.target.files[i])
  //   }
  // }


  return (
    <div>
      {console.log('arrrrr is', arr)}
      {/* {console.log('imageSelected', imageSelected)} */}
      {console.log('photos', photos)}
      {photos.length < 5 && (
        <input
        type='file'
        onChange={e => setImageSelected(e.target.files[0])}
        // onChange={handleChange}
        multiple
      />
      )}

      <button onClick={uploadImage}>Upload Photo</button>
        <div>
        {photos.length > 0 && photos.map((url, i) => {
          return <img key={i} className='newReviewPhoto' src={url} alt='' />
        })}
        </div>

    </div>
  )

}

export default PhotoUpload;



