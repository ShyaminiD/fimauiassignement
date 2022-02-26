import "./App.css";
import { Block1 } from "./Block1";
import { InfoBlock } from "./InfoBlock";
import { Login } from "./Login";

function App() {
  return (
    <div className="App">
      <Login />
      <section>
        <Block1 />
        <div className="imageBox">
          <img
            src="unsplash_stpmvHj6C-o.png"
            alt="male siiting on rock near beach"
          ></img>
        </div>

        <InfoBlock />
      </section>
    </div>
  );
}
export default App;
