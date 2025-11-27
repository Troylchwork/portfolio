import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ROUTES from "./constants/routes";
import Layout from "./components/Layout";

export default function App() {
  const NotFound = () => <div style={{textAlign: 'center', marginTop: '50px'}}><h2>404 - Page Not Found</h2></div>;
  
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
