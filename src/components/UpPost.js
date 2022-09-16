import iconImage from '../assests/user-icon.jpg'
import { upLoadImage , upPost} from '../api/PostApi'
import {useState} from 'react'
export default function UpPost() {
const [imageUrl, setImageUrl] = useState('')
const [body, setBody] = useState('')
  const upImage = async (e) => {
       try {
           const res =  await upLoadImage(e.target.files[0])
            console.log(res)
            setImageUrl(res.data.fileUrl)
       } catch (error) {
           console.log(error)
           window.alert('Up image failed')
       }
  }
  const removeImage = () => {
    setImageUrl('')
  }

  const upPostToPage = async (e) => {
      e.preventDefault()
      const tempPost = {
          body : body,
          imageUrlList : [imageUrl]
      }

      try {
        await upPost(tempPost)
          window.location.reload()
      } catch (error) {
          window.alert('Up post failed !')
      }
  }
  const onChangeInput = (e) => {
      const {value} = e.target
      setBody(value)
  }
  return (
    <div className="up-post">
        <form className="up-post-input-container" onSubmit={upPostToPage}>
            <div className="up-post-input-container_icon">
                <img layout='fill' className='.img' src={iconImage} alt = "icon" />
            </div>
            <input placeholder="What's in your mind" value = {body} name= 'body' onChange={onChangeInput} />
        </form>
        {imageUrl !== '' && 
            <div className='up-post-review-image'>
                <img src={imageUrl} alt = 'code' />
                <div className='up-post_remove-image' onClick={removeImage}>x</div>
            </div>
        }
        <div className="break"></div>
        <div className="up-post-input-container_feature">
            <div className="up-post-input-container_feature-item">
                <i className="fa fa-video-camera" aria-hidden="true"></i>
                <p>Live Video</p>
            </div>
            <div className="up-post-input-container_feature-item">
                <label for="file-input">
                    <i for="file-input" className="fa fa-picture-o" aria-hidden="true"></i>
                    <p>Photo/Video</p>
                </label>
                <input id="file-input" type="file" style={{display : 'none'}} onChange= {upImage}/>
            </div>
            <div className="up-post-input-container_feature-item">
                <i className="fa fa-smile-o" aria-hidden="true"></i>
                <p>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}
