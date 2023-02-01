import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  return (
    <>
      <div className="flex bg-primary min-h-screen w-full justify-center">
        <div
          className="flex w-4/6 h-[1200px] absolute rounded-full -mt-[1000px] lg:-mt-[900px] bg-gradient-to-t from-primary  to-secondary"
          style={{}}
        ></div>

        <div className="w-full lg:w-4/6">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
