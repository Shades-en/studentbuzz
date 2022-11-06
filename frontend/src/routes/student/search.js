import SearchBar from "../../components/search/search_bar.component";
import RadioGroup from "../../components/search/radio_group.component.js";
import StudentList from '../../components/student/connect.component';
import "./studHome.css"

const Search = () => {

    return (  
        <>
            <SearchBar></SearchBar>
            <StudentList className="fixed right-0"/>
            <RadioGroup></RadioGroup>          
        </>
    );
}
 
export default Search;