import "./App.css";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";
import MainMap from "./features/map";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <LeftMenu />
        <MainMap />
      </main>
    </>
  );
}

export default App;
