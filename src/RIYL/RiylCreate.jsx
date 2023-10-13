import axios from "axios";

export function RiylCreate(props) {
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
          Title: <input id="myform" name="title" type="string" />
        </div>

        <div>
          Category: <input id="myform" name="category" type="string" />
        </div>
        <div>
          Description: <input id="myform" name="favoritepart" type="text" style={{ width: "80vw" }} />
        </div>
        <div>
          Author: <input id="myform" name="author" type="string" />
        </div>
        <div>
          Photo: <input id="myform" name="photo_url" type="string" />
        </div>

        <button id="" type="submit">
          Update post
        </button>
      </form>
    </div>
  );
}
