import {useState, React} from 'react';
import { useNavigate  } from 'react-router-dom';

function Personal () {
    const navigate = useNavigate ();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        //Insert data into an array variable
        const personalData = {
            fullName: event.target.elements.fullName.value,
            contactNumber: event.target.elements.contactNumber.value,
            emailAddress: event.target.elements.emailAddress.value,
            gender: selectedOption,
            age: event.target.elements.age.value,
        }

        // Save the data to local storage
        localStorage.setItem('personalData', JSON.stringify(personalData));

        // Navigate to the main page
        navigate('/Address');
    };

    const [selectedOption, setSelectedOption] = useState('');

    //To display the selected gender
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    //I route sa previous form inyong back diri
    //Wala ra nako gibutngan kay first form akoa
    const handleBackClick = () => {
    }

    return (
        <>
            <div className="w-96 h-3/4 flex flex-col justify-center items-center mx-auto bg-white rounded-2xl drop-shadow-xl">
                <form className="flex flex-col items-left justify-center w-full no-scrollbar overflow-y-auto" onSubmit={handleFormSubmit}>
                    <div className="h-1/4 flex flex-col items-left justify-center">
                        <text className="block text-gray-700 text-2xl font-bold text-center">Personal Information</text>
                    </div>    
                    <div className="h-screen flex flex-col justify-center">
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Full Name:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="fullName" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Contact Number:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="contactNumber" maxLength={12} required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Email Address:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="emailAddress" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold" htmlFor="dropdown">Gender:</label>
                        <select className="w-3/4 mx-auto mb-5 flex shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dropdown" value={selectedOption} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Age:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="age" required/>
                        </label>
                    </div>              
                    
                    <div className="h-1/4 flex flex-col justify-center">
                        <div className="w-3/4 mx-auto flex justify-between">
                            <button className="bg-sky-300  text-white font-bold py-2 px-6 rounded" type="button" onClick={handleBackClick}>Back</button>
                            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded" type="submit">Next</button>
                        </div>
                    </div>                   
                </form>
            </div>
        </>
    )
}

export default Personal