
import CenterSection from './CenterSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const FeaturedSection = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-center p-4'>
            <LeftSection></LeftSection>
            <CenterSection></CenterSection>
            <RightSection></RightSection>
        </div>
    );
};

export default FeaturedSection;