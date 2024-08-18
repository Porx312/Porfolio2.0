import React from 'react';
import Pages from '../layout/Pages';
import {  Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Project from '../page/Project';
import AboutMe from '../page/AboutMe';
import Experience from '../page/Experience';

const MyRoute = () => {
  return (
     <Pages>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
     </Pages>
  );
};

export default MyRoute;
