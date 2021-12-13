import "./Post.css"
import React from 'react';

const Post = () => {
    return (
        <div className="post">
            <img className="postImg"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0d/43/bf/0b/cox-s-bazaar-sea-beach.jpg" 
            alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Lifestyle</span>
                </div> 
                    <span className="postTitle">
                        Wonderful Longest Sea Beach!
                    </span>
                    <hr />
                    <span className="postDate">1 Hour Ago</span>
                
                <p className="postDesc">
                Cox's Bazar is one of the longest sea beaches in the world. It’s a sandy beach with an unbroken 155 Km length. The sea beach is the main attraction of the Cox's Bazar town. There are large number of hotels, resorts, guest houses, motels and restaurants have been established in the city. Several international standard 3 to 5 star hotels and resorts are available, which provide exclusive beachside area with accessories for the tourist. It’s crowded mainly during pick season, which starts from October through March. It’s a stunning and beautiful place to enjoy swimming, walking, and to observe sunrise and sunset. It’s a wonderful beach to visit for the family, friends and tourists and to enjoy the amazing nature.
                </p>
            </div>
        </div>
    );

};

export default Post;