import Post from "../posts/post";

const Showcase = ({posts}) => {
    const allPosts = posts.posts
    
    // allPosts.map((post) => {console.log(post)})
    var posts = [
        {
            authorName: "Entrepreneurship Development Cell",
            content: "Nice Day",
            image:{
                url: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
                imageName: "Good one",
            },
            university:{
                name: "Presidency University"
            },
        }
    ]
    return (  
        <>
            <div className='w-1/2 mt-16'> 
                {
                    allPosts?.map((item, key) => {
                        return (
                            <Post key={key} title={item.title} description={item.content} author={item.authorName} time={item.createdAt}/>
                        )
                    })
                }
                
            </div>
        </>
    );
}
 
export default Showcase;