import './singlePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className='singlePostImg'
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor' >Author: <b>JoseJC</b></span>
                    <span className='singlePostDate' >1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam? Consectetur illo non ducimus dolor vero odio ad, quas numquam fugiat rerum eveniet mollitia quod adipisci, quibusdam fuga aliquam id cumque? Minima aliquam modi nisi? Iusto natus dolorum maxime ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam? Consectetur illo non ducimus dolor vero odio ad, quas numquam fugiat rerum eveniet mollitia quod adipisci, quibusdam fuga aliquam id cumque? Minima aliquam modi nisi? Iusto natus dolorum maxime ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam? Consectetur illo non ducimus dolor vero odio ad, quas numquam fugiat rerum eveniet mollitia quod adipisci, quibusdam fuga aliquam id cumque? Minima aliquam modi nisi? Iusto natus dolorum maxime ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam? Consectetur illo non ducimus dolor vero odio ad, quas numquam fugiat rerum eveniet mollitia quod adipisci, quibusdam fuga aliquam id cumque? Minima aliquam modi nisi? Iusto natus dolorum maxime ex.
                </p>
            </div>
        </div>
    )
}

export default SinglePost