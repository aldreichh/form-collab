import {useState, React} from 'react';
import { useNavigate  } from 'react-router-dom';

function Address () {
    const navigate = useNavigate ();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        //Insert data into an array variable
        const addressData = {
            addressName: event.target.elements.addressName.value,
            cityName: event.target.elements.cityName.value,
            provinceName: event.target.elements.provinceName.value,
            countryName: event.target.elements.countryName.value,
            postalCode: event.target.elements.postalCode.value,
        }

        // Save the data to local storage
        localStorage.setItem('addressData', JSON.stringify(addressData));

        // Navigate to the main page
        navigate('/Workex');
    };

    const [selectedOption, setSelectedOption] = useState('');

    //To display the selected gender
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    //I route sa previous form inyong back diri
    //Wala ra nako gibutngan kay first form akoa
    const handleBackClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className="w-96 h-3/4 flex flex-col justify-center items-center mx-auto bg-white rounded-2xl drop-shadow-xl">
                <form className="flex flex-col items-left justify-center w-full no-scrollbar overflow-y-auto" onSubmit={handleFormSubmit}>
                    <div className="h-1/4 flex flex-col items-left justify-center">
                        <text className="block text-gray-700 text-2xl font-bold text-center">Address Information</text>
                    </div>    
                    <div className="h-screen flex flex-col justify-center">
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Address:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="addressName" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            City:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="cityName" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Province:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="provinceName" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Country:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="countryName" required/>
                        </label>
                        <label className="w-3/4 mx-auto block text-gray-700 text-sm font-bold mb-5">
                            Postal Code:
                            <input className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="postalCode" required/>
                        </label>
                    </div>              
                    
                    <div className="h-1/4 flex flex-col justify-center">
                        <div className="w-3/4 mx-auto flex justify-between">
                            <button className="bg-sky-500 hover:bg-sky-700  text-white font-bold py-2 px-6 rounded" type="button" onClick={handleBackClick}>Back</button>
                            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded" type="submit">Next</button>
                        </div>
                    </div>                   
                </form>
            </div>
        </>
    )
}

export default Address