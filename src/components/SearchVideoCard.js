import { Link } from "react-router-dom";
import {
  GOOGLE_API_KEY,
  YOUTUBE_VIDEO_DETAILS_API,
  timeAgo,
} from "../utils/constants";
import { useEffect, useState } from "react";

const SearchVideoCard = ({ videoData }) => {
  const { id, snippet } = videoData;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;
  const [VideoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    getVideoInfo(id?.videoId);
  }, []);

  const getVideoInfo = async (videoId) => {
    const data = await fetch(
      YOUTUBE_VIDEO_DETAILS_API + videoId + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json.items[0]);
    setVideoDetails(json.items[0]);
  };

  return (
    <Link>
      <div className="flex px-5 py-4">
        <div className="object-cover">
          <img
            src={thumbnails?.medium?.url}
            alt="thumbnails"
            className="h-[201px] w-[360px] rounded-xl object-cover"
          ></img>
        </div>
        <div className="px-5">
          <div className="">
            <p className="text-[15px] font-semibold">{title}</p>
            <div>
              <span>
                {Intl.NumberFormat("en-us", {
                  notation: "compact",
                  maximumFractionDigits: 1,
                }).format(VideoDetails?.statistics?.viewCount)}
                views
              </span>
              <span className="px-3">•</span>
              <span className="text-sm font-normal">
                {timeAgo(publishedAt)}
              </span>
            </div>
          </div>
          <div className="py-2">
            <span>{channelTitle}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchVideoCard;
