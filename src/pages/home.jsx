import React from 'react';
import photo from '../assets/My_Photo.jpg';
import Sidebar from '../components/sidebar.jsx';
import video from '../assets/background-vid.mp4';
function Home() {
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={video}
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Overlay content */}
            <div className='flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start md:pl-20 h-full md:gap-20 gap-20 relative z-10'>
                <img src={photo} alt="" className="size-60 rounded-full flex md:hidden object-cover" />
                <img src={photo} alt="" className="size-96 h-[80%] rounded-4xl hidden md:flex object-cover" />
                <div className="text-white text-4xl font-bold">
                    <h4 className="md:text-3xl text-sm">Hello{"\u{1F44B}"}👋, I'm</h4>
                    <h2 className="md:text-7xl text-xlg text-[#FFC400]">Nelius Wandia</h2>
                    <h3 className="md:text-2xl text-sm mt-4 ">🎨Designer & Software Engineer👩‍💻</h3>
                </div>
            </div>
            <Sidebar />
        </div>)
}
export default Home;