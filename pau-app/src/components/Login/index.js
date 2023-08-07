import { useState } from "react";

const rules = {
  101: ["201", "202", "206", "302"],
  102: ["201", "301"],
  103: ["202"],
  204: ["304"],
  205: ["304"],
};

function App() {
  const [top, setTop] = useState("");
  const [mid, setMid] = useState("");
  const [bottom, setBottom] = useState("");

  const [showingMid, setShowingMid] = useState(false);
  const [showingBottom, setShowingBottom] = useState(false);
  const [showingButton, setShowingButton] = useState(false);

  const onOptionChange = (e) => {
    setTop(e.target.id);
    setShowingMid(false);
    setMid("");
    setShowingBottom(false);
    setBottom("");
    setShowingButton(false);

    if (e.target.id !== null) {
      setShowingMid(true);
    }
  };
  const onMidOptionChange = (e) => {
    setMid(e.target.id);
    setShowingBottom(true);
    setBottom("");
    setShowingButton(false);

    if (rules[top] && rules[top].includes(e.target.id) === true) {
        setShowingBottom(false);
    }
  };

  const onBottomOptionChange = (e) => {
    setBottom(e.target.id);
    setShowingButton(true);
    
    if (rules[mid] && rules[mid].includes(e.target.id) === true) {
        setShowingButton(false);
    }
    if (rules[top] && rules[top].includes(e.target.id) === true) {
        setShowingButton(false);
    }
  };

  return (
    <div className="App">
      <h3>Paulo Feliciano</h3>
      <div className="container">
        <div className="first-group">
          <h4>First</h4>

          <div className="radio-group">
            <input
              type="radio"
              name="top"
              id="101"
              checked={top === "101"}
              onChange={onOptionChange}
            />
            <label htmlFor="Vegetarian">Vegetarian</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="top"
              id="102"
              checked={top === "102"}
              onChange={onOptionChange}
            />
            <label htmlFor="Nut allergy">Nut allergy</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="top"
              id="103"
              checked={top === "103"}
              onChange={onOptionChange}
            />
            <label htmlFor="Halal">Halal</label>
          </div>

          <p>
            Selected: <strong>{top}</strong>
          </p>
        </div>

        <div
          className="second-group"
          style={{ display: showingMid ? "block" : "none" }}
        >
          <h4>Second</h4>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="201"
              checked={mid === "201"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Vegetarian">Cashew Chicken</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="202"
              checked={mid === "202"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Nut allergy">Sweet and sour pork</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="203"
              checked={mid === "203"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Halal">Stir fried Tofu</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="204"
              checked={mid === "204"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Halal">Vegetable fried rice</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="205"
              checked={mid === "205"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Halal">Pad Thai</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="mid"
              id="206"
              checked={mid === "206"}
              onChange={onMidOptionChange}
            />
            <label htmlFor="Halal">Massaman beef</label>
          </div>

          <p>
            Selected: <strong>{mid}</strong>
          </p>
        </div>

        <div
          className="third-group"
          style={{ display: showingBottom ? "block" : "none" }}
        >
          <h4>Third</h4>

          <div className="radio-group">
            <input
              type="radio"
              name="bottom"
              id="301"
              checked={bottom === "301"}
              onChange={onBottomOptionChange}
            />
            <label htmlFor="Peanut sauce">Peanut sauce</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="bottom"
              id="302"
              checked={bottom === "302"}
              onChange={onBottomOptionChange}
            />
            <label htmlFor="Oyster sauce">Oyster sauce</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="bottom"
              id="303"
              checked={bottom === "303"}
              onChange={onBottomOptionChange}
            />
            <label htmlFor="Vegetable spring rolls">Vegetable spring rolls</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="bottom"
              id="304"
              checked={bottom === "304"}
              onChange={onBottomOptionChange}
            />
            <label htmlFor="Steamed rice">Steamed rice</label>
          </div>

       

          <p>
            Selected: <strong>{bottom}</strong>
          </p>
        </div>

        <div
          className="submit-button"
          style={{ display: showingButton ? "block" : "none" }}
        >
          <input type="submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
