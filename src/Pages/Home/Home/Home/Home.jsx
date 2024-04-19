
import AfterBannerSection from "../AfterBanner/AfterBannerSection";
import AyurvedicApproach from "../AyurvedicApproach/AyurvedicApproach";
import Banner from "../Banner/Banner";
import BookConsulation from "../BookConsulation/BookConsulation";
import ConsultationsSec from "../ConsultationsSec/ConsultationsSec";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import HomeAppSec from "../HomeAppSec/HomeAppSec";
import ValuedCustomers from "../ValuedCustomers/ValuedCustomers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBannerSection></AfterBannerSection>
            <FeaturedSection></FeaturedSection>
            <ConsultationsSec></ConsultationsSec>
            <BookConsulation></BookConsulation>
            <AyurvedicApproach></AyurvedicApproach>
            <ValuedCustomers></ValuedCustomers>
            <HomeAppSec></HomeAppSec>
        </div>
    );
};

export default Home;