import React from 'react';
import photo from '../assets/My_Photo.jpg';
import Sidebar from '../components/sidebar.jsx';
function Home() {

    return (
        <div className="bg-[rgb(35,33,33)] w-screen h-screen relative overflow-hidden">
            <div className="bg-[#FFC400] w-180 h-[500%] transform -rotate-20 -translate-y-32 hidden md:flex absolute top-0 left-0">
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-start md:pl-20 h-full gap-20 relative'>
                <img src={photo} alt="" className="size-96 h-[80%] rounded-4xl hidden md:flex object-cover" />
                <img src={photo} alt="" className="size-60 rounded-full flex md:hidden object-cover" />
                <div className="text-white text-4xl font-bold">
                    <h4 className="text-3xl">Hello{"\u{1F44B}"}👋, I'm</h4>
                    <h2 className="text-7xl text-[#FFC400]">Nelius Wandia</h2>
                    <h3 className="text-2xl mt-4 ">🎨Designer & Software Engineer👩‍💻</h3>
                </div>
            </div>
            <Sidebar />
        </div>)
}
export default Home;