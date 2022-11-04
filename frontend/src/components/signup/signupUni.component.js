import React, {useState} from 'react';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const Signup = () => {

    const [selectedFile, setSelectedFile] = useState(null);
	const [isIsSelected, setIsSelected] = useState(false);
    const [error, setError] = useState(null);

    const changeHandler = (event) => {
        console.log(event.target.value);
        if(event.target.files[0].size < 9000000){
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
            setError(null);
        }
        else{
            setError('File size is too big');
            setIsSelected(false);
            setSelectedFile(null);
        }
	};

    return (  
        
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container mt-12 max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Create a University Space</h2>
                        <p className="text-gray-500 mb-6">Connecting for You</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">University Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="name">University Name</label>
                                        <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="email@domain.com" />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="description">Description</label>
                                        <textarea type="text" name="description" id="description" className="h-24 border mt-1 rounded py-2 px-4 w-full bg-gray-50" defaultValue="" />
                                    </div>

                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Address / Street</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="country">Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                                        
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="state">State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                                        
                                        </div>
                                    </div>

                                    <div className="md:col-span-1">
                                        <label htmlFor="zipcode">Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue="" />
                                    </div>

                                     <div className="w-full bg-white md:col-span-5 my-6">
                                        <div className="container mx-auto h-full flex flex-col justify-center items-center">
                                            <div id="images-container"></div>
                                            <div className="flex w-full ">
                                                <div id="multi-upload-button" onClick={()=>{
                                                        document.getElementById('multi-upload-input').click();
                                                    }}
                                                    className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-indigo-500 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
                                                    Upload Transcript
                                                </div>
                                                <div className="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
                                                    <span id="multi-upload-text" className="p-2"> {isIsSelected && selectedFile.name} </span>
                                                    <button id="multi-upload-delete" className="hidden" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-700 w-3 h-3"
                                                            viewBox="0 0 320 512">
                                                            <path
                                                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="file" id="multi-upload-input" className="hidden" onChange={changeHandler}/>
                                            
                                            {error && <div className="text-red-500 text-xs text-left self-baseline font-semibold mt-5"><ErrorOutlineRoundedIcon fontSize='5em'/> {error}</div>}
                                        </div>
                                    </div>

                                    <div className="md:col-span-5">
                                        <div className="inline-flex items-center">
                                        <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                        <label htmlFor="billing_same" className="ml-2">I confirm that the above details are true to the best of my knowlegde.</label>
                                        </div>
                                    </div>

                                
                            
                                    <div className="md:col-span-5 mt-5 text-center">
                                        <div className="inline-flex items-end">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;