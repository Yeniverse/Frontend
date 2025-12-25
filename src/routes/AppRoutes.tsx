import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "../pages/auth/SignupPage";

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

const AppRoutes = () => {
  return (
   <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Default route → Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
