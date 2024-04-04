import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/400.css";

function App() {
  // Set up categories as "pages" for the site
  const [categories] = useState([
    { name: "About me" },
    { name: "Portfolio" },
    { name: "Resume" },
    { name: "Contact" },
  ]);

  // Set up the state for the currently selected category
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // return content using separate components
  return (
    <div className="App">
      {/* Pass down categories and states to header so navigation can use them */}
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {/* conditionally show the current category based on which one is selected */}
        {(() => {
          switch (currentCategory.name) {
            case "Portfolio":
              return <Portfolio></Portfolio>;
            case "Resume":
              return <Resume></Resume>;
            case "Contact":
              return <Contact></Contact>;
            default:
              return <About></About>;
          }
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
