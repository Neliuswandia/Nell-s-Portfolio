import Sidebar from '../components/sidebar.jsx';

function About(){
    
    return(
        <div className="bg-[#232121] w-screen h-screen overflow-hidden">
            <div className='flex justify-center items-center relative'>
                <p className='text-9xl text-[#363636] font-extrabold '>ABOUT</p>
                <p className='text-6xl text-white font-bold absolute'>About Me</p>
            </div>
            {/* <div className='flex items-center justify-around justify-self-center gap-28 w-[50%] p-20'>
                <button className='text-white bg-[#363636] p-3 w-30 rounded-4xl hover:outline-solid outline-[#FFC400]'>Developer</button>
                <button className='text-white bg-[#363636] p-3 w-30 rounded-4xl hover:outline-solid outline-[#FFC400]'>Designer</button>
            </div> */}
            <h1 className=' text-[#FFC400] text-2xl font-bold flex justify-self-start m-10'>Personal info :</h1>
            <p className='text-xl flex flex-col justify-start pl-25'>
                <span className='text-[#363636] font-semibold'>Name:</span>
                <span className='ml-2'>Nellius Wandia</span>
                <span className='text-[#363636] font-semibold'>Email:</span>
                <span className='ml-2'>watukunellius@gmail.com</span>
                <span className='text-[#363636] font-semibold'>Phone No:</span>
                <span className='ml-2'>+254791216702</span>
                <span className='text-[#363636] font-semibold'>Languages:</span>
                <span className='ml-2'>Swahili, English</span>
                <span className='text-[#363636] font-semibold'>LinkedIn</span>
                <a className='ml-2 text-[#FFC400] underline' href="https://www.linkedin.com/in/nellius-wandia" target="_blank" rel="noopener noreferrer">nellius-wandia</a>
            </p>
            <Sidebar />
        </div>)
}
export default About;