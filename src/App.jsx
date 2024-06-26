import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHeader } from "./components/Page-header";
import { HomePage } from "./components/Home-page";

function App() {
  return (
    <BrowserRouter basename="tic-tac-toe">
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
