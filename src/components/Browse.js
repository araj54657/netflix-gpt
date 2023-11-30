import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondaryContainer from "./SecondaryComponent";
import Container from "./Container";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Container />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
