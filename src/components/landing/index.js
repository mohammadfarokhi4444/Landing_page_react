import BannerCards from "./BannerCards";
import CarouselAuctionDay from "./CarouselAuctionDay";
import CarouselCategories from "./CarouselCategories";
import Services from "./Services";
import "../../assets/css/landing.css";




const Context = () => {
    return (
      <>
        <BannerCards />
        <Services />
        <CarouselCategories />
        <CarouselAuctionDay />
      </>
    );
  };
  
  export default Context;