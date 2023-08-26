import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Home from "@/pages/frontend/home";
import Footer from "@/components/footer";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
