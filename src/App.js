import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authenRoutes } from "./routes/authenRoutes";
import { clientRoutes } from "./routes/clientRoutes";
import HomePage from "./pages/HomePage/HomePage";
import { adminRoutes } from "./routes/adminRoutes";

function App() {
  return (
    <div className="bg-primary text-second">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        {clientRoutes.map(({url, component}) => {
          return <Route key={url} path={url} element={component}/>
        })}
        {authenRoutes.map(({url, component}) => {
          return <Route key={url} path={url} element={component}/>
        })}
        {adminRoutes.map(({url, component}) => {
          return <Route key={url} path={url} element={component}/>
        })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
