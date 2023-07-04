import {useState, React} from 'react';
import { useNavigate  } from 'react-router-dom';

function Home () {
    const navigate = useNavigate ();

    const startButton = () => {
        navigate('/Personal');
    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center bg-white">
                <div className="w-4/5 h-3/4 flex flex-col justify-center items-center">
                    <div className="mb-5 ">
                        <text className="text-2xl font-bold text-blue-800">The Best App</text>
                    </div>
                    
                    <div className="text-justify">
                        <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat, sem in pharetra tempus, quam justo pulvinar lacus, sed sollicitudin sapien quam eu lacus. Nullam euismod, turpis a aliquam lacinia, erat eros iaculis elit, et volutpat odio ipsum quis nisi. Duis auctor orci quis pretium porttitor. Quisque non feugiat sem, at malesuada libero.</text>
                    </div>

                    <button className="mt-6 w-full h-12 bg-blue-800 hover:bg-sky-950 text-white rounded" onClick={startButton}>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Home