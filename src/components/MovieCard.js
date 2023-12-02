import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4 ">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  );
};

export default MovieCard;
