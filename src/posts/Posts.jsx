import './posts.css'

const Posts = () => {
    return (
        <div className="posts">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        Tech
                    </span>
                    <span className="postCat">
                        Dev
                    </span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tenetur est sint non libero quas nulla adipisci autem unde, mollitia temporibus! Praesentium maiores sunt expedita fugiat consectetur facilis aliquam laudantium nam? Ducimus soluta voluptas dolorem veniam quisquam a impedit sed!</p>
            </div>
        </div>
    )
}

export default Posts