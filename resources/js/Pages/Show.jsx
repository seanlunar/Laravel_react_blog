import { useForm } from '@inertiajs/react';
import { route } from '../../../vendor/tightenco/ziggy/src/js';

export default function Show({post}){
    const { delete: destroy } =  useForm();

    function submit(e){
         e.preventDefault()
         destroy(route('posts.destroy', post.id))
    }
   return <>
     <h1> {post.body} </h1>

     <form  onSubmit={submit}>
        <button className="btn btn-danger">
            Delete
        </button>
     </form>
   </>
}
