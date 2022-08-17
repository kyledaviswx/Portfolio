import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
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

  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {(() => {
          switch (currentCategory.name) {
            case 'Portfolio':
              return <Project></Project>
            case 'Resume':
              return <Resume></Resume>
            case 'Contact':
              return <Contact></Contact>
            default:
              return <About></About>
          }
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
