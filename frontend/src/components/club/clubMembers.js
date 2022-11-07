import ListItem from "../general/list_item.component";

const ClubMembers = () => {
    return (  
        <>
            <div >
                <div className="flex flex-col items-center">
                    <div>
                        <h4 className="text-2xl text-center font-semibold my-5"> TEAM </h4>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <div>
                        <h4 className="text-2xl text-center font-semibold my-5"> ALUMINI </h4>
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
 
export default ClubMembers;