import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { Link } from "react-router-dom";

import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API - " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className=" grid grid-flow-col p-3 shadow-lg">
      <div className="col-span-1 flex cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="menu-icon"
        />
        <img
          className="mx-2 h-8 cursor-pointer"
          src="imgs/yt_logo_rgb_light.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 rounded-l-full border border-gray-400 p-2 px-5"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(true);
              }, 0)
            }
          />
          <button
            className="rounded-r-full border border-gray-400 bg-gray-100 px-3 py-2"
            type="button"
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed w-[35rem] rounded-lg border border-gray-100 bg-white px-2 py-2 shadow-lg">
            {suggestions.map((suggestion) => (
              <Link
                to={`/search?q=${suggestion}`}
                onClick={(e) => {
                  console.log(e.target.value);
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                <div className="px-3 py-2 shadow-sm hover:bg-slate-100">
                  {suggestion}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
