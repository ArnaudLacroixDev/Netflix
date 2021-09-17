import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <div>
        {data.map((elem, index) => {
          return (
            <Section
              key={index}
              category={elem.category}
              images={elem.images}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
