import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './AdminLayout/AdminLayout'; // Import AdminLayout
import ManageUsers from './pages/ManageUsers/ManageUsers';
import ApproveDonation from './pages/ApproveDonations/ApproveDonations';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/manage-user" element={<ManageUsers />} />
        <Route path="/approve-donation" element={<ApproveDonation />} />
          {/* <Route index element={<Dashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="donations" element={<ApproveDonations />} />
          <Route path="impact" element={<ImpactReporting />} /> */}
      </Routes>

    </Router>
  );
}

export default App;