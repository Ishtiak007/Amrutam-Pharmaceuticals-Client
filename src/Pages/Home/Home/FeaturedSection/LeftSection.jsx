import love from '../../../../assets/love.png'
import hand from '../../../../assets/hand.png'
import prayer from '../../../../assets/prayer.png'

const LeftSection = () => {
    return (
        <div className='space-y-9'>
            <div className='flex gap-2 justify-start items-center'>
                <div className='text-right'>
                    <h1>Perspmalized Wellness</h1>
                    <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>
                <img src={love} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full' alt="" />
            </div>

            <div className='flex gap-2 justify-start items-center '>
                <div className='text-right'>
                    <h1>Perspmalized Wellness</h1>
                    <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>
                <img src={hand} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full mr-6' alt="" />
            </div>


            <div className='flex gap-2 justify-start items-center'>
                <div className='text-right'>
                    <h1>Perspmalized Wellness</h1>
                    <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>
                <img src={prayer} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full' alt="" />
            </div>
        </div>
    );
};

export default LeftSection;