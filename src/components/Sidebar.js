import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ul className="border-b-2 pb-5 font-bold ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <ul className="border-b-2 py-5 font-bold">
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch Later</li>
        <li>Favourites</li>
        <li>Liked videos</li>
      </ul>
      <h3 className="pt-5 font-bold">Explore</h3>
      <ul className="pt-2 ">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
