import {IoSearchSharp} from "react-icons/io5";

const Header = ({handleSearchText}) => {
    return (
        <div className="headerContainer">
            <h2>Notes</h2>
            <div className="searchBarContainer">
                <IoSearchSharp className="searchIcon"/>
                <input type="text" onChange={(e) => handleSearchText(e.target.value)} placeholder="Search notes..."/>
            </div>
        </div>
    );
}
 
export default Header;