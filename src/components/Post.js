export default function Post({post}) {
  return (
    <div className="post">
        <div className="post-user-info">
            <div className="post-user-info-icon">
                <img layout='fill' alt="icon" src={post.user.logoUrl} />
            </div>
            <div className="post-user-info-name">
                <p>{post.user.firstName + ' ' + post.user.lastName}</p>
                <p className="post-user-info-name-time">{post.time}</p>
            </div>
        </div>
        <div className="post-body">
            <p className="post-title">{post.body}</p>
            <div className="post-image">
            <img layout='fill'  alt="icon" src={post.imageUrlList[0]} />
            </div>
        </div>
        <div className="post-util">
            <div className="post-util-item">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                <p>Like</p>
            </div>
            <div className="post-util-item">
                <i className="fa fa-comment" aria-hidden="true"></i>
                <p>Comment</p>
            </div>
            <div className="post-util-item">
                <i className="fa fa-share-alt" aria-hidden="true"></i>
                <p>Share</p>
            </div>
        </div>
    </div>
  )
}
