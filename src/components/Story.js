export default function Story({imgUrl}) {
  return (
    <div className="story">
        <div className="story-avatar"></div>
        <div className="story-image">
        <img src={imgUrl} alt="story"/>
        </div>
    </div>
  )
}
