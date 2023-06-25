import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import { useEffect, useState } from "react";
import SearchVideoCard from "./SearchVideoCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);

  const query = searchParams.get("q");

  useEffect(() => {
    getSearchResult(query);
  }, [query]);

  const getSearchResult = async (query) => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_API + query + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setSearchData(json);
  };

  return (
    <div>
      {searchData && (
        <div className="">
          {searchData?.items?.map((item) => (
            <SearchVideoCard videoData={item} key={item?.id?.videoId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
