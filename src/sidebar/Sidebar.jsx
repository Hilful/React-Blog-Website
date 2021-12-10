import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/DevOps_Engineer_Job_Description.jpg" alt="" />
                <p>
                Spent 2 years developing the skills to increase velocity, reliability, and quality with a high focus on security. Deep experience with  Docker, Kubernetes, and helping organizations instill DevOps for the modern age.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Lifestyle</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Fashion</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow US ON :</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>

                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;