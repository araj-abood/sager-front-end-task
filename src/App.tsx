import "./App.css";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <LeftMenu />
      </main>
    </>
  );
}

export default App;
