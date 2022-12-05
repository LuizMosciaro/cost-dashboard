import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass='min_height'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/company' element={<Company />}></Route>
        </Routes>
        <Routes>
            <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
        <Routes>
            <Route exact path='/newproject' element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
