import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Progress from './components/Progress/Progress';
import Theme from './components/Theme/Theme';
import Skills from './components/Skills/Skills';




function App() {
  return (
    <>
    <Theme/>
    <Progress/>
    <Layout/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Route>

    </Routes>
    </>
  );
}

export default App;
