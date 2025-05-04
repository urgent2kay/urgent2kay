// src/App.tsx
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
// import MerchantHome from "./components/merchant/MerchantHome";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
