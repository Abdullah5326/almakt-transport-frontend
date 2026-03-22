import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./features/dashboard/Dashboard";
import Client from "./features/client/Client";
import Driver from "./features/driver/Driver";
import Trip from "./features/trip/Trip";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/drivers" element={<Driver />} />
          <Route path="/trips" element={<Trip />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
