import "../CSS/Portfolio.css";

export function CharacterDesign(props) {
  if (props.show) {
    return (
      <div>
        <p> Gifs of character evolutions. </p>
        <div className="imageButtonDiv">
          <img
            className="imageButton"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1699978007/From_selection_jv79y8.gif"
          ></img>
          <img
            className="imageButton"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1699470819/newhandanimation_ck9but.gif"
          ></img>
          <img
            className="imageButton"
            id="imageButtonSquarer"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1698017779/RunHair_ryarch.gif"
          ></img>
        </div>
      </div>
    );
  }
}
