import React from "react";
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Messages from "./pages/Messages"
import Chatbox from "./pages/Chatbox"
import Connection  from "./pages/Connection";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost"
import {Route,Routes} from "react-router-dom" ;
import { useUser } from "@clerk/clerk-react";
import Layout from "./pages/Layout";
import {Toaster} from "react-hot-toast";

const App = () => {
  const {user} = useUser();
  return(
    <div>
      <Toaster/>
       <Routes>
          <Route path="/" element={ user ? <Layout/> : <Login/>}>
              <Route index element={<Feed/>}/> 
              <Route path="messages" element={<Messages/>}> </Route>
              <Route path="messages/:userId" element={<Chatbox/>}></Route>
              <Route path="connections" element={<Connection/>}></Route>
              <Route path="discover" element={<Discover/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="profile/:profileId" element={<Profile/>}></Route>
              <Route path="create-post" element={<CreatePost/>}></Route>
          </Route>
       </Routes>
    </div>
  );
};


export default App ;