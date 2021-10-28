
import React from 'react';
import 'tachyons';
import Keyfeatures from './Components/Keyfeatures/Keyfeatures';
import NavBar from './Components/Navbar/Navbar';
import Incubation from './Components/Keyfeatures/Incubation';
import Fundraising from './Components/Keyfeatures/Fundraising';
import Mentorship from './Components/Keyfeatures/Mentorship';
import Header from './Components/Header/Header';
import Success from "./Components/Success-stories/Success";
import Customer from "./Components/Customer-Feedback/cutomer-rating";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Keyfeatures />

      <div id={'inc'}>
        <Incubation />
      </div>
      <div id={'ment'}>
        <Mentorship />
      </div>
      <div id={'fnd'}>
        <Fundraising />
      </div>
      <Success />
      <Customer />
      <Footer />
      </div>

  );
};

export default App;
