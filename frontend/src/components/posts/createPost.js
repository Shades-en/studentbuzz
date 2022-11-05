const CreatePost = () => {
    return (  
        <div className=" bg-gray-100  flex justify-center sm:py-12">
            <div className="relative py-3 ">
                <div className="relative px-4 py-3 bg-white mx-8 md:mx-0 shadow rounded-sm sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                    <div className="block pl-2 font-semibold text-xl w-72 text-gray-700">
                        <h2 className="leading-relaxed">Create a Post</h2>
                        {/* <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                    <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col">
                        <label className="leading-loose">Post Title</label>
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Post title"/>
                        </div>
                        
                        <div className="flex flex-col">
                        <label className="leading-loose">Post Description</label>
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
                        </div>
                    </div>
                    <div className="pt-4 flex items-center space-x-4">
                        <button className="flex justify-center items-center w-full text-gray-900 px-2 py-1 rounded-md focus:outline-none">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                        </button>
                        <button className="bg-indigo-500 flex justify-center items-center w-full text-white px-2 py-1 rounded-md focus:outline-none">Create</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreatePost;