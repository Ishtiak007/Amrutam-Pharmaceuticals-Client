import handPlus from '../../../../assets/handPlus.png'
import peyala from '../../../../assets/peyala.png'
import strong from '../../../../assets/strong.png'

const RightSection = () => {
    return (
        <div>
            <div className='space-y-9'>
                <div className='flex gap-2 justify-start items-center'>
                    <img src={handPlus} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full' alt="" />
                    <div className='text-left'>
                        <h1>Perspmalized Wellness</h1>
                        <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-start items-center '>
                    <img src={peyala} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full ml-6' alt="" />
                    <div className='text-left'>
                        <h1>Perspmalized Wellness</h1>
                        <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                    </div>
                </div>


                <div className='flex gap-2 justify-start items-center'>
                    <img src={strong} className='w-[80px] bg-[#EDF5FA] p-4 rounded-full' alt="" />
                    <div className='text-left'>
                        <h1>Perspmalized Wellness</h1>
                        <p>Get treatments made just for you based on your individual doshas ( body type)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSection;