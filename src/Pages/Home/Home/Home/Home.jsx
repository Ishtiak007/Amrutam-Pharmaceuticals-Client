
import AfterBannerSection from "../AfterBanner/AfterBannerSection";
import Banner from "../Banner/Banner";
import BookConsulation from "../BookConsulation/BookConsulation";
import ConsultationsSec from "../ConsultationsSec/ConsultationsSec";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import HomeAppSec from "../HomeAppSec/HomeAppSec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBannerSection></AfterBannerSection>
            <FeaturedSection></FeaturedSection>
            <ConsultationsSec></ConsultationsSec>
            <BookConsulation></BookConsulation>
            <HomeAppSec></HomeAppSec>
        </div>
    );
};

export default Home;