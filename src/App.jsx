import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./features/dashboard/Dashboard";
import Client from "./features/client/Client";
import Driver from "./features/driver/Driver";
import Trip from "./features/trip/Trip";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import store from "./store";
import { Provider } from "react-redux";
import TripDetails from "./features/trip/TripDetails";
import ClientDetails from "./features/client/ClientDetails";
import DriverDetails from "./features/driver/DriverDetails";
import Vehicle from "./features/vehicle/Vehicle";
import Login from "./pages/Login";
import AuthChecker from "./ui/ProtectedRoute";
import ProtectedRoute from "./ui/ProtectedRoute";
import Credit from "./pages/Maintenance";
import SeeDetails from "./pages/SeeDetails";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/clients/:clientId" element={<ClientDetails />} />
            <Route path="/drivers" element={<Driver />} />
            <Route path="/drivers/:driverId" element={<DriverDetails />} />
            <Route path="/trips" element={<Trip />} />
            <Route path="/trips/:tripId" element={<TripDetails />} />
            <Route path="/vehicles" element={<Vehicle />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/see-details" element={<SeeDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
