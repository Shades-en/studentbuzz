import Post from "../posts/post";

const Showcase = ({posts}) => {
    const allPosts = posts.posts
    
    // allPosts.map((post) => {console.log(post)})
    return (  
        <>
            <div className='w-1/2 mt-16'> 
                {
                    allPosts?.map((item, key) => {
                        return (
                            <p key={key}>{item.authorName}</p>
                        )
                    })
                }
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    );
}
 
export default Showcase;