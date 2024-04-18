
import CenterSection from './CenterSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const FeaturedSection = () => {
    return (
        <div className='grid grid-cols-3 items-center justify-center p-4'>
            <LeftSection></LeftSection>
            <CenterSection></CenterSection>
            <RightSection></RightSection>
        </div>
    );
};

export default FeaturedSection;