
const Post = (props) => {

    return (  
        <div className="flex h-fit w-3/4" >
            <div className="my-3 pt-2 container bg-white rounded-sm shadow-lg transform transition duration-500 hover:shadow-2xl h-fit">
                <div>
                    <h1 className="text-xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{props.title}</h1>
                    <p className="ml-4 mt-1 mb-2 text-sm text-gray-700 ">{props.description}</p>
                </div>
                <img className="w-full h-72 cursor-pointer object-contain my-4" src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                <div className="w-11/12 m-auto h-px bg-gray-200 mb-2"></div>
                <div className="flex p-4 pt-1  justify-between">
                    <div className="flex items-center space-x-2">
                        <img className="w-10 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
                        <div>
                            <h2 className="text-gray-800 font-bold cursor-pointer">{props.author}</h2>
                            <h6 className="text-gray-400 text-xs "> {props.time.toString().substring(0,10)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Post;