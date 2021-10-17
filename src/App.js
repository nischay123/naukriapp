
import './App.css';
import Landing from './pages/landing/Landing';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import WhyUsSection from './components/landingpage/cards/WhyUsSection';
import Banner from './components/banner/Banner';
import Login from './pages/login/Login';
import ForgetPassword from './pages/forgetpassword/ForgetPassword';
import ResetPassword from './pages/resetpassword/ResetPassword';
import PostJob from './pages/postjob/PostJob';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Landing />
      <Switch>
          <Route path="/login">
                <Login />
          </Route>
         
          <Route path="/forget-password">
            <ForgetPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/dashboard">
             <Dashboard />
          </Route>
          <Route path="/post-job">
            <PostJob />
          </Route>
          <Route path="/">
               <Banner />
               <WhyUsSection />
          </Route>
        
        </Switch>
    </div>
  );
}

export default App;
