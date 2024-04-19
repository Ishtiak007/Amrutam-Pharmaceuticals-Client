
import AfterBannerSection from "../AfterBanner/AfterBannerSection";
import Banner from "../Banner/Banner";
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
            <HomeAppSec></HomeAppSec>
        </div>
    );
};

export default Home;