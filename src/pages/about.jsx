import Sidebar from '../components/sidebar.jsx';

function About(){
    
    return(
        <div className="bg-[#232121] w-screen h-full overflow-x-hidden">
            <div className='flex justify-center items-center relative'>
                <p className='text-9xl text-[#363636] font-extrabold '>ABOUT</p>
                <p className='text-6xl text-white font-bold absolute'>About Me</p>
            </div>

            <h1 className=' text-[#FFC400] text-2xl font-bold flex justify-self-start m-10'>Personal info :</h1>
            <div className='text-xl flex flex-row items-start pl-25 gap-16'>
                <div className='flex flex-col '>
                    <div className='flex flex-row items-center mb-8'>
                        <span className='text-[#363636] font-semibold'>Name:</span>
                        <span className='ml-2 text-white'>Nellius Wandia</span>
                    </div>
                    <div className='flex flex-row items-center mb-8'>
                        <span className='text-[#363636] font-semibold'>Email:</span>
                        <span className='ml-2 text-white'>watukunellius@gmail.com</span>
                    </div>

                </div>  
                <div className='flex flex-col ml-20'>
                    <div className='flex flex-row items-center mb-8'>
                        <span className='text-[#363636] font-semibold'>Phone No:</span>
                        <span className='ml-2 text-white'>+254791216702</span>
                    </div>
                    <div className='flex flex-row items-center mb-8'>
                        <span className='text-[#363636] font-semibold'>Languages:</span>
                        <span className='ml-2 text-white'>Swahili, English</span>
                    </div>
                    <div className='flex flex-row items-center mb-1'>
                        <span className='text-[#363636] font-semibold'>LinkedIn:</span>
                        <a className='ml-2 text-[#FFC400] underline' href="https://www.linkedin.com/in/nellius-wandia" target="_blank" rel="noopener noreferrer">nellius-wandia</a>
                    </div>
                </div>
                <div className='flex flex-col pl-20 '>
                <p className='mb-5 text-[#FFC400] font-semibold'>Download CV</p>   
                <a href="/cv.pdf" download className="mb-5">
                    <button className='text-white bg-[#363636] p-2 w-30 rounded-4xl hover:outline-solid outline-[#FFC400]'>Developer</button>
                </a>
                <a href="/cv.pdf" download>
                    <button className='text-white bg-[#363636] p-2 w-30 rounded-4xl hover:outline-solid outline-[#FFC400]'>Designer</button>
                </a>
            </div>
            </div>

            <p className='text-[#FFC400] text-2xl font-bold flex justify-self-center relative top-25'>My Skills</p>
            <div className='w-[59%] flex flex-wrap justify-around justify-self-center gap-10 mt-50'>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <img src="" alt="" />
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Figma</p>
                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>HTML</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>CSS</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>JavaScript</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Illustrator</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>React JS</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Next JS</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Mongo DB</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>PhotoShop</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Express JS</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>Python</p>

                </div>
                <div className='w-30 h-40 bg-[#363636] rounded-2xl'>
                    <p className='text-[#Ffffff] text-sm font-semibold flex justify-center items-baseline-last h-full'>HTML</p>

                </div>
            </div>

            <p className='text-[#FFC400] text-2xl font-bold flex justify-self-center relative top-25'>Education</p>

            <Sidebar />        
        </div>)
}
export default About;