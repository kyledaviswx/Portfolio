import React, { useState } from 'react';
import Header from './components/Header';
// import About from './components/About';
// import Project from './components/Project';
// import ContactForm from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/400.css';

function App() {
  const [categories] = useState([
    { name: 'About me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        MAIN
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
