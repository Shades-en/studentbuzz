import { Outlet } from "react-router-dom";
import ProfileDetails from "./profile_details_list.component";
import "./profile.css"

const ProfileStudent = () => {



    return ( 
        <>  
            <section className="pt-16 bg-blueGray-50">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-[38em] mb-6 shadow-xl rounded-lg mt-16" style={{"position":"relative","right":"12em"}}>
                    <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    22
                                </span>
                                <span className="text-sm text-blueGray-400">Friends</span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    10
                                </span>
                                <span className="text-sm text-blueGray-400">Photos</span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    89
                                </span>
                                <span className="text-sm text-blueGray-400">Comments</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Jenna Stones
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Bangalore
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                Reva University
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i class="fas fa-solid fa-graduation-cap mr-2 text-lg text-blueGray-400"></i>
                                Information Science Engineering
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i class="fas fa-solid fa-hashtag mr-2 text-lg text-blueGray-400"></i>
                                USN - 1MS20IS100
                            </div>
                        </div>

                        <div className="mt-10 py-4 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>About Me</p>
                                    <p className="text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range, Jenna the name taken
                                    by Melbourne-raised, Brooklyn-based Nick Murphy
                                    writes, performs and records all of his own music,
                                    giving it a warm, intimate feel with a solid groove
                                    structure. An artist of considerable range.
                                    </p>
                                </div>
                            </div>
                            <div className="edit_profile">
                                <input type={"button"} value={"Edit About"} style={{"padding":"0.6em","border":"0.5px solid #6366f1","borderRadius":"8px","marginTop":"1em"}}></input>
                            </div>
                        </div>

                        <div className="mt-4 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 header_profile">
                                    <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Projects</p>
                                    <div className="add_slot">
                                        <i class="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 header_profile">
                                    <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Achievements</p>
                                    <div className="add_slot">
                                        <i class="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 header_profile">
                                    <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Clubs</p>
                                    <div className="add_slot">
                                        <i class="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Outlet />
        </>
     );
}
 
export default ProfileStudent;