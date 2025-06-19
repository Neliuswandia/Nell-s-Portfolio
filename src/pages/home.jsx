import React from 'react';
import photo from '../assets/My_Photo.jpg';
import Sidebar from '../components/sidebar.jsx';
function Home(){
    
    return (   
        <div className="bg-[#232121] w-screen h-screen overflow-hidden">
            <div className="bg-[#FFC400] w-180 h-[500%] transform -rotate-20 -translate-y-32"></div>
            <img src={photo} alt="" className="h-120 w-auto absolute top-14 left-20 rounded-4xl"/>
            <div className="absolute top-45 left-140 text-white text-4xl font-bold">
                <h4 className="text-3xl">Hello{"\u{1F44B}"}👋, I'm</h4>
                <h2 className="text-7xl text-[#FFC400]">Nelius Wandia</h2>
                <h3 className="text-2xl mt-4 ">🎨Designer & Software Engineer👩‍💻</h3></div>
            <Sidebar />
        </div>)
}
export default Home;