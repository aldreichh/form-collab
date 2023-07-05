import {useEffect, useState, React} from 'react';
import { useNavigate  } from 'react-router-dom';

function Confirm () {
    const navigate = useNavigate ();
    const personalData = JSON.parse(localStorage.getItem('personalData'));
    const addressData = JSON.parse(localStorage.getItem('addressData'));
    const workExData = JSON.parse(localStorage.getItem(`workExData`));

    const backButton = () => {
        navigate('/Workex');
    }

    const confirmButton = () => {
        localStorage.removeItem('personalData');
        localStorage.removeItem('addressData');
        localStorage.removeItem('workExData');
        navigate('/');
    }

    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col items-left justify-center w-full no-scrollbar overflow-y-auto">
                <div className="mx-auto mt-4 w-3/4 h-1/4 flex flex-col justify-end">
                    <text className="font-Raleway block text-blue-800 text-3xl font-bold">Information Summary</text>
                    <text className="font-Raleway block text-gray-700 text-l">Please check your information</text>
                </div>   

                <div className="w-3/4 h-screen flex flex-col justify-center mx-auto">
                    <div className="font-semibold text-sm hover:bg-blue-200 shadow-xl rounded-xl pl-3 flex flex-col overflow-hidden">   
                        <text className="mt-3">Full Name: {personalData.fullName}</text>
                        <text className="">Contact Number: {personalData.contactNumber}</text>
                        <text className="">Email Address: {personalData.emailAddress}</text>
                        <text className="">Gender: {personalData.gender}</text>
                        <text className="mb-3">Age: {personalData.age}</text>
                    </div>
                        
                    <div className="font-semibold text-sm hover:bg-blue-200 shadow-xl rounded-xl pl-3 flex flex-col overflow-hidden">
                        <text className="mt-3">Address: {addressData.addressName}</text>
                        <text className="">City: {addressData.cityName}</text>
                        <text className="">Province: {addressData.provinceName}</text>
                        <text className="">Country: {addressData.countryName}</text>
                        <text className="mb-3">Postal Code: {addressData.postalCode}</text>
                    </div>
                        
                    <div className="font-semibold text-sm hover:bg-blue-200 shadow-xl rounded-xl pl-3 flex flex-col overflow-hidden">
                        <text className="mt-3">Skills: {workExData.Skills}</text>
                        <text className="">Achievements: {workExData.Achieve}</text>
                        <text className="">Certificates: {workExData.Certs}</text>
                        <text className="mb-3">References: {workExData.Refs}</text>
                    </div>
                </div>            
                    
                <div className="h-1/4 flex flex-col">
                    <div className="w-3/4 mx-auto flex justify-between">
                        <button className="w-2/5  bg-slate-500 hover:bg-slate-800  text-white font-bold py-2 px-6 rounded" type="button" onClick={backButton}>Back</button>
                        <button className="w-2/5 h-12 bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded" type="submit" onClick={confirmButton}>Confirm</button>
                    </div>
                </div>      
            </div>             
        </div>
        </>
    )
}

export default Confirm