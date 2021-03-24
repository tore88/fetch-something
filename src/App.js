import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className={classes.App}>
      <Blog />
    </div>
  );
}

export default App;
