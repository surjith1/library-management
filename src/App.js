import React, { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import AdminLogin, { Students } from './Pages/AdminLogin';
import MiddleContent from './Pages/MiddleContent';
import Dashboard from './Pages/Dashboard';
import { ParallaxProvider } from 'react-scroll-parallax';
import Books from './Pages/Books';
import Staffs from './Pages/Staffs';
import BookCollection from './Pages/BookCollection';
import BookRequest from './Pages/BookRequest';
import EditBook from './Pages/EditBook';

function App() {
  let [login,setLogin] = useState(false);
  const styles = {
    display: !login ? "none" : "inline-block",
    width: !login ? "" : "100%"
  }
  return (
    <>
    <ParallaxProvider>
    <BrowserRouter>
  <Home />
    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/admin-login' element={<AdminLogin />}>
    </Route>
    <Route path='middle-content'  element={<MiddleContent />}>
    </Route>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/books' element={<Books />}/>
    <Route path='/staffs' element={<Staffs />}/>
    <Route path='/collection' element={<BookCollection />}/>
    <Route path='/book-collection/add' element={<BookRequest />}/>
    <Route path='/book-collection/edit:id' element={<EditBook />}/>

    {/*<Route path="/404" element={<NotFound />}></Route>
  <Route path="*" element={<Navigate replace to="/404"/>}></Route>*/}
    </Routes>
   
    </BrowserRouter>
    </ParallaxProvider>
    </>
  );
}
export default App



