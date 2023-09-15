import axios from "axios";

export function NewCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("https://cleantarot.fly.dev/cards", params).then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
    });
  };

  return (
    <div id="newcard">
      <h1>New Card</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Category: <input name="category" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
