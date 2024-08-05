export default function Weather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return <p>{position} found</p>;
      },
      (error) => {
        return <p>Error</p>;
        // display an error if we cant get the users position
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // display an error if not supported
    console.error("Geolocation is not supported by this browser.");
    return <p>Did not find location!</p>;
  }
}
