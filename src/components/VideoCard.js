import { timeAgo } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="m-2 w-60 p-2 shadow-lg">
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt={title} />
      <span className="py-2 font-medium">{title}</span>
      <h3>{channelTitle}</h3>
      <div className="flex text-center">
        <span>
          {Intl.NumberFormat("en-us", {
            notation: "compact",
            maximumFractionDigits: 1,
          }).format(viewCount)}
          views
        </span>
        <span className="px-2">•</span>
        <span>{timeAgo(publishedAt)}</span>
      </div>
    </div>
  );
};

export default VideoCard;
