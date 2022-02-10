import './app.css'
import Index1 from "./components/pages/Index1";
import Index from "./components/pages/Index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
     
    <div className='container'>
      
    <Link  className="search" to="/"><h1 style={{margin:"0",}}>ค้นหากิจกรรม</h1></Link>
    <Link  className='okinfo' to="/example2"><h1 style={{margin:"0"}}>บันทึกข้อมูล</h1></Link>
    <h1  className='title'> ปฏิทินเตือนความจำ Reminder Calendar </h1>
      
     
    </div>

      <Switch>
        <Route path="/" exact component={Index1} />
        <Route path="/example2" exact component={Index} />
      </Switch>
      <div className='copy'>Copyright © 2022 By AimGod.</div>

    </Router>
    
    
  );
}

export default App;

// style={{margin:"8px", marginLeft:"165px"}}