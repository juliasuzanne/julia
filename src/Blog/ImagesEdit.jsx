import axios from "axios";

export function ImagesEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateImage(props.image.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyImage(props.image);
  };

  return (
    <div>
      <h1 className="heading"> Update image </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Above Writing: <input id="myform" name="abovewriting" type="string" defaultValue={props.image.abovewriting} />
        </div>

        <div>
          URL: <input id="myform" name="url" type="string" defaultValue={props.image.url} />
        </div>

        <div>
          Below Writing: <input id="myform" name="belowwriting" type="string" defaultValue={props.image.belowwriting} />
        </div>

        <div>
          Post ID: <input id="myform" name="post_id" type="integer" defaultValue={props.image.post_id} />
        </div>

        <button id="" type="submit">
          Update drawing
        </button>
      </form>
      <div className="delete">
        <button onClick={handleClick}>Delete Drawing</button>
        {/* <button onClick={() => props.onShowImagesIndex(drawing)}> add-ons </button> */}
      </div>
    </div>
  );
}
