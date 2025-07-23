import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { useReducer } from "react";
import MyCartReducer from "./reducers/MyCartReducer";
import { MyCartContext } from "./configs/Contexts";

const App = () => {

  let [cartCounter, cartDispatch] = useReducer(MyCartReducer, 0);

  return (
    <MyCartContext.Provider value={[cartCounter, cartDispatch]}>
      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </MyCartContext.Provider>
  );
}

export default App;