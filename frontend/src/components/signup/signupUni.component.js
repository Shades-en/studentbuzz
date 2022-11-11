import { useState } from "react";
import UploadButton from "../upload/uploadButton";

const Signup = () => {

    const [university, setUniversity] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')

    return (  
        
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className=" mt-12 max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Create a University Space</h2>
                        <p className="text-gray-500 mb-6">Connecting for You</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">University Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                            <form>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="name">University Name</label>
                                        <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" onChange={(e) => setUniversity(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="email@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="description">Description</label>
                                        <textarea type="text" name="description" id="description" className="h-24 border mt-1 rounded py-2 px-4 w-full bg-gray-50" defaultValue="" onChange={(e) => setDescription(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Address / Street</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" onChange={(e) => setAddress(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" onChange={(e) => setCity(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="country">Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" onChange={(e) => setCountry(e.target.value)} />
                                        
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="state">State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" onChange={(e) => setState(e.target.value)} />
                                        
                                        </div>
                                    </div>

                                    <div className="md:col-span-1">
                                        <label htmlFor="zipcode">Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue="" onChange={(e) => setZip(e.target.value)} />
                                    </div>

                                    <UploadButton label = {{"label": "Upload Transcript"}}/>

                                    <div className="md:col-span-5">
                                        <div className="inline-flex items-center">
                                        <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                        <label htmlFor="billing_same" className="ml-2">I confirm that the above details are true to the best of my knowlegde.</label>
                                        </div>
                                    </div>

                                
                            
                                    <div className="md:col-span-5 text-center">
                                        <div className="inline-flex items-end">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                                
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;