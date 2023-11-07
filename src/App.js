import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Errorpage from './components/Errorpage';
import Sidebar from './components/Sidebar';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import SingleCourse from './pages/SingleCourse';


function App() {
 
  return (
    <Router>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-2/12'>
        <Sidebar/>
        </div>

     <div>
     <Routes>
        <Route path ="/" element={<Homepage/>}/>
        <Route path ="/courses" element={<Courses/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/courses/:id" element={<SingleCourse/>}/>
        <Route path ="*" element={<Errorpage/>}/>
      </Routes>
     </div>
      
      </div>
   
    </Router>
  );
}

export default App;
