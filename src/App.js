import './App.css';
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
  return (
   <>
    <BrowserRouter>

       <Navbar/>
     
         <Routes>
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="salary" element={<Salary />} />
            <Route path="employee" element={<Employee />} />
            <Route path="calendar" element={<Calendar />} />

          </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
