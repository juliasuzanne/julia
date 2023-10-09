import axios from "axios";

export function ParagraphsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateParagraph(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="heading"> Upload paragraph </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Name: <input id="myform" name="writing" type="text" />
        </div>

        <div>
          Post ID: <input id="myform" name="post_id" type="integer" />
        </div>

        <button id="" type="submit">
          Upload paragraph
        </button>
      </form>
    </div>
  );
}
