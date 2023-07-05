import {useEffect, useState, React} from 'react';
import { useNavigate  } from 'react-router-dom';

function Workex () {
    const navigate = useNavigate ();
    const [modal, setModal] = useState(false);
    const personalData = JSON.parse(localStorage.getItem('personalData'));
    const addressData = JSON.parse(localStorage.getItem('addressData'));
    const workExData = JSON.parse(localStorage.getItem(`workExData`));

    useEffect(() => {
        if (modal) 
           {
          document.body.classList.add('active-modal');
    } else {
          document.body.classList.remove('active-modal');
           }
    }, [modal]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        //Insert data into an array variable
        const workExData = {
            Skills: event.target.elements.Skills.value,
            Achieve: event.target.elements.Achieve.value,
            Certs: event.target.elements.Certs.value,
            Refs: event.target.elements.Refs.value,

        }

        // Save the data to local storage
        localStorage.setItem('workExData', JSON.stringify(workExData));

        // Navigate to the main page
        navigate('/Confirm'); 
    };

    //I route sa previous form inyong back diri
    //Wala ra nako gibutngan kay first form akoa
    const handleBackClick = () => {
        navigate('/Address');
    }

    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
            <form className="flex flex-col items-left justify-center w-full no-scrollbar overflow-y-auto" onSubmit={handleFormSubmit}>
                <div className="mx-auto mt-4 w-3/4 h-1/4 flex flex-col justify-end">
                    <text className="font-Raleway block text-blue-800 text-3xl font-bold">Sign up</text>
                    <text className="font-Raleway block text-gray-700 text-l">Tell us about yourself!</text>
                </div>   

                <div className="h-screen flex flex-col justify-center">
                    <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                        Skills:
                        <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="Skills" required/>
                    </label>
                    <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                        Achievements:
                        <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="Achieve" required/>
                    </label>
                    <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                        Certificates:
                        <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="Certs" required/>
                    </label>
                    <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                        References:
                        <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="Refs" required/>
                    </label>
                </div>            
                    
                <div className=" h-1/4 flex flex-col">
                    <div className="w-3/4 mx-auto flex justify-between">
                        <button className="w-2/5  bg-slate-500 hover:bg-slate-800  text-white font-bold py-2 px-6 rounded" type="button" onClick={handleBackClick}>Back</button>
                        <button className="w-2/5 h-12 bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded" type="submit">Next</button>
                    </div>
                </div>                   
            </form>
        </div>
        </>
    )
}

export default Workex