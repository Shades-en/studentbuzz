import { Outlet } from "react-router-dom";
import "./search.css"

const FormStudent = () => {

    return ( 
        <>
            <div class="flex p-6 student_form_container">
                <div class="mx-auto"> 
                    <h4>Search based on skills</h4>
                    <form action="" method="POST" className="rounded-md border border-[#6366f1] py-[1.5em] px-[4em] student_form">
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#6366f1]" >University </label>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-4 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#6366f1]" >Branch</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#6366f1]" >Domain</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#6366f1]" >Tech Stack</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div style={{"display":"flex", "justifyContent":"center"}}>
                            <button className="hover:shadow-form rounded-md bg-[#6366f1] py-2 px-3 text-base font-normal text-white outline-none" > Search </button>
                        </div>
                    </form>
                </div>
            </div>
            <Outlet />
        </>
     );
}
 
export default FormStudent;