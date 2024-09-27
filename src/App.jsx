import "./App.css";

import Container from "./components/Container";
import Red from "./components/Red";

function App() {
  return (
    <main className="h-[100vh] w-screen flex flex-col justify-center items-center relative">
      <div className="absolute h-[100vh] w-[calc((90%/3)-40px)] bg-[#a72f1ae7]">
        <Red />
      </div>
      <div className="flex w-[90vw] h-[95vh] bg-[#fff] relative z-100 ps-[60px] pe-[60px] ">
        <Container />
      </div>
    </main>
  );
}

export default App;
