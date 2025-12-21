import "./App.css";
import SideBar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <div>
        <TopBar></TopBar>
      </div>
      <div>
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
