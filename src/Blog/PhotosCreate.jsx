import axios from "axios";

export function PhotosCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePhoto(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="heading"> Upload photo </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Name: <input id="myform" name="name" type="string" />
        </div>
        <div>
          Above Writing: <input id="myform" name="abovewriting" type="text" />
        </div>

        <div>
          url: <input id="myform" name="url" type="string" />
        </div>
        <div>
          Below Drawing: <input id="myform" name="belowwriting" type="text" />
        </div>
        <div>
          Post ID: <input id="myform" name="post_id" type="integer" />
        </div>

        <button id="" type="submit">
          Upload photo
        </button>
      </form>
    </div>
  );
}
