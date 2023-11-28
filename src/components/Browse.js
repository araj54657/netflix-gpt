import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondaryContainer from "./SecondaryComponent";
import Container from "./Container";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <SecondaryContainer />
      <Container />
    </div>
  );
};
export default Browse;
