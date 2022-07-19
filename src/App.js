
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Department from './pages/department/Department';
import Employee from './pages/employee/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDepartment from './components/AddDepartment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/department/create' element={<AddDepartment></AddDepartment>}>
         </Route>
         <Route exact path='/department' element={<Department></Department>}>
         </Route>
         <Route exact path='/employee' element={<Employee></Employee>}>
         </Route>
         <Route exact path='/' element={<HomePage></HomePage>}>
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
