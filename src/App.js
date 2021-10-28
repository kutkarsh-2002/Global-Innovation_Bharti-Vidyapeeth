import React from 'react';
import 'tachyons';
import Keyfeatures from './Components/Keyfeatures/Keyfeatures';
import NavBar from './Components/Navbar/Navbar';
import Incubation from './Components/Keyfeatures/Incubation';
import Fundraising from './Components/Keyfeatures/Fundraising';
import Mentorship from './Components/Keyfeatures/Mentorship';
import Header from './Components/Header/Header';
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
    </div>

  );
}

export default App;