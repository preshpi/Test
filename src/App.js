import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Salary from './pages/Salary';
import Calendar from './pages/Calendar';

function App() {

  const [sidebar, setSidebar] = useState(false);
  
  return (
   <><div className="app">
  
    <BrowserRouter>
       <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
      <div className={sidebar ? 'half-width' : 'full-width'} >
       <Routes >
            <Route path="/" element={<Dashboard />} /> 
            <Route path="salary" element={<Salary />} />
            <Route path="employee" element={<Employee />} />
            <Route path="calendar" element={<Calendar />} />
        </Routes>
       </div>
    </BrowserRouter>
       
   </div>
   </>
  );
}

export default App;
