import { Route, Routes } from "react-router-dom";
import Memocompoonent from "./components/Memocomponent";
import RefComponent from "./components/RefComponent";
import TransitionComponent from "./components/TransitionComponent";

function App() {
  return (
    <>
      hello world
      <Routes>
        <Route path="/" element={<RefComponent />} />
        <Route path="/memo" element={<Memocompoonent />} />
      </Routes>
      {/* <RefComponent /> */}
      {/* <Memocompoonent /> */}
      {/* <TransitionComponent /> */}
    </>
  );
}

export default App;
