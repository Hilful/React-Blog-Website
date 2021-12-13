import "./SinglePost.css";

const SinglePost = () => {
    return (
        <div className = "singlePost">
            <div className="singlePOstWrapper">
                <img src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/11/25/pic_01.jpg?itok=wD6Tv6np&timestamp=1606295757" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Must-visit site in Bandarban
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ashabul Elaph Hilful</b></span>
                    <span className="singlePostDate">1 Hour Ago</span>
                </div>
                <p className="singlePostDesc">
                        The Buddha Dhatu Jadi is a temple on the top of a hill. It was built following the architectural aesthetic of Myanmar and Thailand.

                        It received its name "Golden Temple" for its actual golden colour.

                        The temple design is strikingly beautiful. It was originally built for Buddhist prayer meetings. Buddha statues have also been structured around it.

                        As it is a religious institution, there are some rules to be followed so that the prayers of the Buddhist monks and devotees are not interrupted.

                        How to go there

                        Buddha Dhatu Jadi is situated on the Bandarban-Rangamati Road in Balaghata area. It is known to everyone as the Golden Temple. It is located about three kilometers from the city.

                        Tom-tom and CNG auto-rickshaw can take one there from any part of the city area.

                        These vehicles are usually available at traffic intersections in the city. The fare from the traffic junction is Tk20 per person.
                        </p>

            </div>
            
        </div>
    );
};

export default SinglePost;