import { Link } from '@inertiajs/react';
import { useRoute } from "../../../vendor/tightenco/ziggy"


export default function Home({ posts }) {
   const route = useRoute();
   console.log(posts);
    return <>
        {/* <h1 className="title">Hello {posts.data.length} </h1> */}
        <div >
            {posts.data.map(post => (
                <div className='card' key={post.id}>
                    <div className='card-body'>
                        <span>Posted On</span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p>{post.body}</p>

                    {/* <Link  href={`/posts/${post.id}`}>Read More</Link> */}
                    <Link  href={ route('posts.show', post) } >Read More</Link>


                </div>


            ))}
        </div>
        <div>
            {posts.links.map((link)=> (
            <Link
             key={link.label}
             href={link.url}
             dangerouslySetInnerHTML={{ __html: link.label }}
             className='p-1 mt-2'
              />

            ))}
        </div>

    </>
}
