import axios from "axios";

export function RiylEdit(props) {
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
          Title: <input id="myform" name="title" type="string" defaultValue={props.post.title} />
        </div>

        <div>
          Category: <input id="myform" name="category" type="string" defaultValue={props.post.category} />
        </div>
        <div>
          Description: <input id="myform" name="favoritepart" type="text" defaultValue={props.post.favoritepart} />
        </div>
        <div>
          Author: <input id="myform" name="author" type="string" defaultValue={props.post.author} />
        </div>
        <div>
          Photo: <input id="myform" name="photo_url" type="string" defaultValue={props.post.photo_url} />
        </div>

        <button id="" type="submit">
          Update post
        </button>
      </form>
      <div className="delete">
        <button onClick={handleClick}>Delete Post</button>
        {/* <button onClick={() => props.onShowImagesIndex(drawing)}> add-ons </button> */}
      </div>
    </div>
  );
}
