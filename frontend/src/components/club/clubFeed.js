import Post from "../posts/post";

const ClubFeed = () => {
    return (  
        <>
            <div className="flex flex-col items-center mt-5">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    );
}
 
export default ClubFeed;