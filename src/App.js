import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Weather from './components/Weather';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   <>
   
   <div className="page1"><Page1/></div>
   
    
   </>
  );
}

export default App;
