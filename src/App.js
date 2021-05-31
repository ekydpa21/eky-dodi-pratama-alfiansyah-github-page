import "./css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Repositories from "./pages/Repositories"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositories/:username" component={Repositories} />
      </Switch>
    </div>
  )
}

export default App
