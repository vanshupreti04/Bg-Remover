import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./components/Menubar"
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./components/UserSyncHandler";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Result from "./pages/Result";

const App = () => {
  return(
    <div>
      <UserSyncHandler/>
      <Toaster/>
      <Menubar/>
      <Routes>
        <Route path="/" element= {
          <Home/>
        }/>
        <Route path="/result" element= {
          <>
            <SignedIn>
              <Result/>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App;