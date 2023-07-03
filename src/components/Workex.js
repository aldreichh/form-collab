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
        setModal(!modal);
        
    };

    const navigateButton = () => {
        navigate('/');
    }
 

    //I route sa previous form inyong back diri
    //Wala ra nako gibutngan kay first form akoa
    const handleBackClick = () => {
        navigate('/Address');
    }

    return (
        <>
        
            <div className="w-96 h-3/4 flex flex-col justify-center items-center mx-auto bg-white rounded-2xl drop-shadow-xl">
                <form className="flex flex-col items-left justify-center w-full no-scrollbar overflow-y-auto" onSubmit={handleFormSubmit}>
                    <div className="h-1/4 flex flex-col items-left justify-center">
                        <text className="block text-gray-700 text-2xl font-bold text-center">Work Experience</text>
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
                    
                    <div className="h-1/4 flex flex-col justify-center">
                        <div className="w-3/4 mx-auto flex justify-between">
                            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded" type="button" onClick={handleBackClick}>Back</button>
                            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded" type="submit" >Submit</button>
                        </div>
                    </div>                   
                </form>
            </div>
            {modal && (
      <div className="overlay backdrop-blur-3 fixed w-screen h-screen flex items-center justify-center text-center">
        <div className="p-5 bg-white shadow-2xl md:w-3/4 lg:w-2/6   rounded-xl modal-content pt-8 pb-9">
          <div className="top p-1 flex-col justify-center items-center ">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <p className="mb-2">Full Name: {personalData.fullName}</p>
            <p className="mb-2">Contact Number: {personalData.contactNumber}</p>
            <p className="mb-2">Email Address: {personalData.emailAddress}</p>
            <p className="mb-2">Gender: {personalData.gender}</p>
            <p className="mb-2">Age: {personalData.age}</p>
            <h2 className="text-xl font-bold mt-3">Address Information</h2>
            <p className="mb-2">Address: {addressData.addressName}</p>
            <p className="mb-2">City: {addressData.cityName}</p>
            <p className="mb-2">Province: {addressData.provinceName}</p>
            <p className="mb-2">Country: {addressData.countryName}</p>
            <p className="mb-2">Postal Code: {addressData.postalCode}</p>
            <h2 className="text-xl font-bold mt-3">Work Experience</h2>
            <p className="mb-2">Skills: {workExData.Skills}</p>
            <p className="mb-2">Achievements: {workExData.Achieve}</p>
            <p className="mb-2">Certificates: {workExData.Certs}</p>
            <p className="mb-2">References: {workExData.Refs}</p>
           
          </div>
          <div className="mid mt-5 w-32 mx-auto rounded bg-teal-500 hover:bg-teal-700">
            <button className="btn-continue shadow-inner p-2 w-full h-full text-white" onClick={navigateButton}>Confirm</button>
          </div>
        </div>
      </div>
     )}
        </>

    )
}

export default Workex