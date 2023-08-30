import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Home from "@/pages/frontend/home";
import Footer from "@/components/footer";
import Login from "@/pages/frontend/login";
import SignUp from "@/pages/frontend/sign-up";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
