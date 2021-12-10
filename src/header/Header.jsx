import "./Header.css"

const Header = () => {
    return (
        <div className = "header" >
           <div className="headerTitles">
               <span className = "headerTitleSm" >React & Node</span>
               <span className = "headerTitleLg" >Blog</span>
           </div>
           <img src="https://www.desktopbackground.org/p/2011/07/29/241596_nature-cherry-blossoms-trees-twitter-cover-twitter-backgrounds_1200x600_h.jpg" alt="" className="headerImg" />
            
        </div>
    );
};

export default Header;