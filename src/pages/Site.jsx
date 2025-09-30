import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Rodape from "../components/Rodape";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </div>
);
}

export default App;