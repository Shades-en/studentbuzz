import SearchBar from "../../components/search/search_bar.component";
import RadioGroup from "../../components/search/radio_group.component.js";
import StudentList from '../../components/student/connect.component';
import "./studHome.css"
import Cards from "../../components/search/card.compoent";

const Search = () => {

    return (  
        <>
            <SearchBar></SearchBar>
            <StudentList className="fixed right-0"/>
            <RadioGroup></RadioGroup>
            {/* <Cards></Cards> */}
            
        </>
    );
}
 
export default Search;