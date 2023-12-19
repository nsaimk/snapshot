import { useState } from "react";
import List from "./components/list/List"
import MainHeader from "./components/mainheader/MainHeader";


function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const hideModalHandler = () => {
    setIsModalVisible(false)
  }

  const showModalHandler = () => {
    setIsModalVisible(true)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <List isPosting={isModalVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
