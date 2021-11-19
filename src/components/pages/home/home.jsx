import "./home.css";
import { NavBar } from "../../nav/nav";
import { FeaturedCard } from "../../featured-card/featured"
import { MovieCarousel } from "../../carousel/carousel";
import featuredImage from "../../../constants/images/community.jpg"
import aot from "../../../constants/images/aotThumbnail.png"
import goodplace from "../../../constants/images/theGoodPlaceThumbnail.jpg"
import homecoming from "../../../constants/images/homecomingThumbnail.jpg"
import community from "../../../constants/images/communityThumbnail.jpg"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <FeaturedCard featuredImage={`${featuredImage}`}/>
      <div id = "carousel-container">
        <MovieCarousel label="Continue Watching for Austin" thumbnail={community}></MovieCarousel>
        <MovieCarousel label="Anime" genre="Japanese Cartoon" thumbnail={aot}></MovieCarousel>
        <MovieCarousel label="Action" genre="Action" thumbnail={homecoming}></MovieCarousel>
        <MovieCarousel label="Comedy" genre="Comedy" thumbnail={goodplace}></MovieCarousel>
      </div>
    </div>
  );
};
