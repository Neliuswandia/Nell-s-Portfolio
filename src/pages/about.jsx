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
            <Sidebar />
        </div>)
}
export default About;