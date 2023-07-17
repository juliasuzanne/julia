export function FamilyHistory() {
  return (
    <div>
      <h1 className="sig-text">Yee Family History Project </h1>
      <p className="fonted"> My mom's side of the family, working on recording history.</p>
      <a
        className="heading"
        href="https://github.com/juliasuzanne/family-tree-frontend"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        GitHub Repo here
      </a>

      <br></br>
      <br></br>

      <a className="heading" href="https://yeefamilyhistory.org/org_chart.html" target="_blank" rel="noreferrer">
        Website with Interactive Family Tree
      </a>
      <p className="fonted">
        Website is still being developed, but so far I have used GoJS to create an interactive family tree with photos,
        birthday, and custom colors and styling. Recipes, photos, and historical documents coming soon!
      </p>
      <br></br>
      <br></br>

      <div className="games_images">
        <img width="50%" stroke="2px" src="/src/assets/TREEEXAMPLE.png" />
      </div>
    </div>
  );
}
