import Sidebar from '../components/sidebar.jsx';

function About(){
    
    return(
        <div className="bg-[#232121] w-screen h-screen overflow-hidden">
            <div className='flex justify-center items-center relative'>
                <p className='text-9xl text-[#363636] font-extrabold '>ABOUT</p>
                <p className='text-6xl text-white font-bold absolute'>About Me</p>
            </div>
            
            {/* <button>Developer</button>
            <button>Designer</button> */}
            <Sidebar />
        </div>)
}
export default About;