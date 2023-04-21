import { useState } from "react";
import PostsList from "./components/PostsList";
import "./App.css";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalState, setModal] = useState(false);

  function showModalHandler() {
    setModal(true);
  }

  function hideModalHandler() {
    setModal(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalState} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
