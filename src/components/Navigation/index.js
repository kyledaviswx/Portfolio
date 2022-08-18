import React, { useEffect } from 'react';

// Nav gets props passed down from Header component, which is from App.js.
function Navigation(props) {
  // destructure props to set constants for each item
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props.props;

  // changes the browser tab and doc title to current category
  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        {/* Map categories to create each list item. Set the current category to be active via css.  */}
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
              }`}
            key={category.name}
          >
            <span
              // When a category is clicked, set to the active category
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;