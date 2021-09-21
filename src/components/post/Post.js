import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2" alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet.
          </span>
          <hr />
          <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a error quaerat distinctio est. Alias, dicta hic? Nulla, quae dolorum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a error quaerat distinctio est. Alias, dicta hic? Nulla, quae dolorum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a error quaerat distinctio est. Alias, dicta hic? Nulla, quae dolorum.
        </p>
    </div>
  )
}
