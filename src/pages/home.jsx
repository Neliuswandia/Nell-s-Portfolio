import React from 'react';
import photo from '../assets/My_Photo.jpg';
import Sidebar from '../components/sidebar.jsx';
function Home(){
    
    return (   
        <div className="bg-[#232121] w-screen h-screen overflow-hidden">
            <div className="bg-[#FFC400] w-180 h-[500%] transform -rotate-20 -translate-y-32"></div>
            <img src={photo} alt="" className="h-120 w-auto absolute top-14 left-30 rounded-4xl"/>
            <div className="absolute top-40 left-96 text-white text-4xl font-bold">
                <h1 className="text-6xl">Hello, I'm</h1>
                <h2 className="text-8xl">Saurabh</h2>
                <p className="text-2xl mt-4">A passionate web developer</p></div>
            <Sidebar />
        </div>)
}
export default Home;