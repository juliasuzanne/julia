import axios from "axios";

export function PostsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="heading"> Upload post </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Date: <input id="myform" name="posted_date" type="string" />
        </div>

        <div>
          Header: <input id="myform" name="post_header" type="string" />
        </div>

        <button id="" type="submit">
          Upload post
        </button>
      </form>
    </div>
  );
}
