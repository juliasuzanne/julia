import axios from "axios";

export function PostsEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h1 className="heading"> Update post </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Date: <input id="myform" name="posted_date" type="string" />
        </div>

        <div>
          Header: <input id="myform" name="post_header" type="string" />
        </div>

        <button id="" type="submit">
          Update post
        </button>
      </form>
      <div className="delete">
        <button onClick={handleClick}>Delete Drawing</button>
        {/* <button onClick={() => props.onShowImagesIndex(drawing)}> add-ons </button> */}
      </div>
    </div>
  );
}
