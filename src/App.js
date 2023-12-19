import "./App.css";

function App() {
  function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = <del>{name + "✅"}</del>;
    }
    return <li>{itemContent}</li>;

    // <li className="item">
    //   {name} {isPacked && '✔'}
    // </li>

    //   <li className="item">
    //   {isPacked ? (
    //     <del>
    //       {name + ' ✔'}
    //     </del>
    //   ) : (
    //     name
    //   )}
    // </li>

    //   if (isPacked) {
    //     return <li className="item">{name} ✔</li>;
    //   }
    //   return <li className="item">{name}</li>;
    // }
  }

  return (
    <div className="App">
      <h2>This is conditional rendering</h2>

      <section
        style={{
          textAlign: "left",
          paddingLeft: "100px",
        }}
      >
        <ul>
          <Item
            isPacked={false}
            name="Break down the project into smaller tasks."
          />
          <Item isPacked={true} name="Set deadlines for each task." />
          <Item
            isPacked={true}
            name="Allocate time each day to make progress"
          />
          <Item isPacked={true} name="Identify a skill you want to improve." />
          <Item
            isPacked={false}
            name="Research resources or courses for that skill."
          />
          <Item
            isPacked={true}
            name="Allocate time in your schedule for learning."
          />
          <Item isPacked={false} name="Plan a workout routine for the week." />
          <Item isPacked={true} name="Schedule specific workout times." />
          <Item isPacked={false} name="Allocate quality time for loved ones" />
        </ul>
      </section>
    </div>
  );
}

export default App;
