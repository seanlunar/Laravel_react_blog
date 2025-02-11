import { useForm } from '@inertiajs/react';

export default function Create() {

    const { data, setData, post,errors,processing } = useForm({
        body: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }
  return (
    <>
      <h1 className="text-center">Create a new Post</h1>
      {data.body}
      <div className="">
        <form onSubmit={submit}>
            <textarea className="form-control" value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
            { errors.body && <span className="text-danger">{errors.body}</span>}
            <br />
            <button className="btn btn-primary">Create Post</button>

        </form>
      </div>
    </>
  )
}
