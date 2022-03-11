import "./App.css";
import GlobalStyle from "./assets/globalStyles/styled";
import AllRoutes from "./AllRoutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GlobalStyle />
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
