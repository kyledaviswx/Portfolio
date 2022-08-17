import React, { useEffect } from 'react';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props.props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
              }`}
            key={category.name}
          >
            <span
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