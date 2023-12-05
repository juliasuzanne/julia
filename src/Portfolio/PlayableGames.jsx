export function PlayableGames(props) {
  if (props.show) {
    return (
      <div>
        <p> Playable Game Projects - Click the link to play each game </p>
        <a href="/draft" target="_blank">
          Thesis Project
        </a>
      </div>
    );
  }
}
