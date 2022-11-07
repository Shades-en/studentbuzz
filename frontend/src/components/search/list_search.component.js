import { Outlet } from "react-router-dom";
import ListItem from "./search_list_item.component";
import "./search.css"

const List = () => {
    return ( 
        <>
            <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="career-search mb-60">
                        <div class="filter-result">
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Outlet />
        </>
     );
}
 
export default List;