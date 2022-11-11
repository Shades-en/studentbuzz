import ListItem from "../general/list_item.component";

const ClassMembers = () => {

    
    return (  
        <>
            <div className="flex flex-col">
                <button type="button" style={{border: "solid 2px #6366f1"}} className=" mt-5 self-center flex items-center w-40 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#addMemberModal" data-bs-whatever="@getbootstrap">Add Students</button>
                <div className="modal fade" id="addMemberModal" tabIndex="-1" aria-labelledby="addMemberModalLabel" aria-hidden="true">
                    <div className="modal-dialog max-w-[90vw] ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 font-semibold" id="addAchieMemberLabel">Add Students</h1>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="main mx-auto flex border w-fit rounded-full overflow-hidden m-4 select-none">
                                        <div className="title py-3 my-auto px-3 bg-indigo-500 text-white text-sm font-semibold mr-3">Year</div>
                                        <label className="flex items-center radio p-2 cursor-pointer mx-2">
                                            <input className="my-auto transform scale-100" type="radio" name="sfg"/>
                                            <div className="title px-2">First</div>
                                        </label>

                                        <label className="flex items-center radio p-2 cursor-pointer mx-2">
                                            <input className="my-auto transform scale-100" type="radio" name="sfg" />
                                            <div className="title px-2">Second</div>
                                        </label>

                                        <label className="flex items-center radio p-2 cursor-pointer mx-2">
                                            <input className="my-auto transform scale-100" type="radio" name="sfg" />
                                            <div className="title px-2">Third</div>
                                        </label>

                                        <label className="flex items-center radio p-2 cursor-pointer mx-2">
                                            <input className="my-auto transform scale-100" type="radio" name="sfg" />
                                            <div className="title px-2">Fourth</div>
                                        </label>

                                        <label className="flex items-center radio p-2 cursor-pointer mx-2">
                                            <input className="my-auto transform scale-100" type="radio" name="sfg" />
                                            <div className="title px-2">All</div>
                                        </label>
                                    </div>
                                    <div className="mx-10 mt-10 max-h-1/12 flex-wrap flex">
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="anime" name="hobby" />
                                            <label className="form-check-label" for="anime">1MS20IS081 - Umraz Khan</label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="manga" name="hobby" />
                                            <label className="form-check-label" for="manga">1MS20IS081 - Nivedita </label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="anime" name="hobby" />
                                            <label className="form-check-label" for="anime">1MS20IS081 - Umraz Khan</label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="manga" name="hobby" />
                                            <label className="form-check-label" for="manga">1MS20IS081 - Nivedita </label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="anime" name="hobby" />
                                            <label className="form-check-label" for="anime">1MS20IS081 - Umraz Khan</label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="manga" name="hobby" />
                                            <label className="form-check-label" for="manga">1MS20IS081 - Nivedita </label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="anime" name="hobby" />
                                            <label className="form-check-label" for="anime">1MS20IS081 - Umraz Khan</label>
                                        </div>
                                        <div className="form-check w-60">
                                            <input type="checkbox" className="form-check-input" id="manga" name="hobby" />
                                            <label className="form-check-label" for="manga">1MS20IS081 - Nivedita </label>
                                        </div>
                                    </div>
                                        
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <h4 className="text-2xl text-center font-semibold my-5"> STUDENTS</h4>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClassMembers;