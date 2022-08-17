import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
// import Project from './components/Project';
// import ContactForm from './components/ContactForm';
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

  let renderComp;
  // switch (currentCategory.name) {
  //   case 'Portfolio':
  //     renderComp = <Project></Project>
  //   case 'Resume':
  //     renderComp = <Resume></Resume>
  //   case 'Contact':
  //     renderComp = <ContactForm></ContactForm>
  //   default:
  //     renderComp = <About></About>
  // }
  renderComp = <About></About>;

  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {renderComp}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
