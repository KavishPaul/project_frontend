// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Header from './components/Header.js';
// import Nav from './components/Nav.js';
// import Main from './components/Main.js';
// import Login from './components/Login';
// import SignUp from './components/SignUp.js';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Nav />
//         <Main />
//         <Routes>
//             <Route path="/Login" element={<Login />}/>
//             <Route path="/SignUp" element={<SignUp />}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Login from './components/Login';
import SignUp from './components/SignUp.js';
import Hotels from './components/Hotels.js';
import Flights from './components/Flight.js';
import Tours from './components/Tour.js';
import AboutUs from './components/AboutUs.js';
import CustomerSupport from './components/Welcome.js';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Nav /> */}
        <Routes>
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/" element={<div><Header /><Nav /><Main /><Footer /></div>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Hotels" element={<Hotels />} />
            <Route path="/Flights" element={<Flights />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/CustomerSupport" element={<CustomerSupport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;