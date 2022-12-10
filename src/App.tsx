import Categories from "./Components/Categories";
import Cats from "./Components/Cats";
import "./App.scss";
import Title from "./Components/Title";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="content">
        <Title />
        <div className="categories">
          <Categories />
        </div>
        <Cats />
      </div>
    </div>
  );
};

export default App;
