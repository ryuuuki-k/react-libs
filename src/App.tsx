import { VFC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Hoge = () => {
  return <h1>Hoge</h1>;
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to={'/about'}>to About Component</NavLink>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <NavLink to={'/'}>to Home</NavLink>
    </div>
  );
};

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
