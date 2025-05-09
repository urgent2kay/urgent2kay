// src/App.tsx
import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
import NoRelationship from "./components/relationship/NoRelationship";


function App() {
  return (
    <BrowserRouter>
      <NoRelationship />
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
}

export default App;
