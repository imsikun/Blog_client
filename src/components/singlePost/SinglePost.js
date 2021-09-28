import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/947384/pexels-photo-947384.jpeg?auto=compress&cs=tinysrgb&dpr=2" alt="" className="singlePostImg" />
        <h2 className="singlePostTitle">
          Lorem ipsum dolor sit, amet 
          <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h2>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Subhakant</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod nulla corporis rerum suscipit soluta, veritatis ipsam eaque error facilis deserunt doloremque quis reiciendis sit repellat odit harum sunt recusandae?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod nulla corporis rerum suscipit soluta, veritatis ipsam eaque error facilis deserunt doloremque quis reiciendis sit repellat odit harum sunt recusandae?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod nulla corporis rerum suscipit soluta, veritatis ipsam eaque error facilis deserunt doloremque quis reiciendis sit repellat odit harum sunt recusandae?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod nulla corporis rerum suscipit soluta, veritatis ipsam eaque error facilis deserunt doloremque quis reiciendis sit repellat odit harum sunt recusandae?
        </p>
      </div>
    </div>
  )
}
