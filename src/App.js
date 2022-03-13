import "./App.css";
import GlobalStyle from "./assets/globalStyles/styled";
import AllRoutes from "./AllRoutes";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const productCart = useSelector((state) => state.cartProducts);

  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const totalPrice = productCart.reduce(
      (acc, current) => acc + current.price,
      0
    );
    setTotal(totalPrice.toFixed(3));
    const amountProducts = productCart.length;
    setAmount(amountProducts);
  }, [productCart]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header amount={amount} />
      <main>
        <GlobalStyle />
        <AllRoutes total={total} amount={amount} />
      </main>
    </div>
  );
}

export default App;
