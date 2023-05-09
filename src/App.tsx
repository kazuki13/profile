import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";
import Home from './js/HOME'; //作成したpage1.jsを読み込んでいる
import Productions from './js/Productions';
import φωτίζω from './js/φωτίζω';
import Egate from './js/E-gate';
import Face from './js/face';
import Satoukibi from './js/satoukibi';
import Others from './js/others';
import React from 'react'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/Productions`} element={<Productions />} />
          <Route path={`/φωτίζω`} element={<φωτίζω />} />
          <Route path={`/E-gate`} element={<Egate />} />
          <Route path={`/Face`} element={<Face />} />
          <Route path={`/satoukibi`} element={<Satoukibi />} />
          <Route path={`/other`} element={<Others />} />
        </Routes>
      </BrowserRouter>
    );
  };
}


export default App;