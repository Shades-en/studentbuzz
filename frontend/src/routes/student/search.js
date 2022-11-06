import SearchBar from "../../components/search/search_bar.component";
import RadioGroup from "../../components/search/radio_group.component.js";
import StudentList from '../../components/student/connect.component';
import "./studHome.css"

const Search = () => {

    return (  
        <>
            <div className=' bg-gray-100 min-h-screen'>
                <SearchBar></SearchBar>
                
                <RadioGroup></RadioGroup>   
                <StudentList />
            </div>       
        </>
    );
}
 
export default Search;