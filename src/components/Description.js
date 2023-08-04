import React from 'react';
import styles from './Description.module.css';

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

const RecipeAuthor = () => {
  const authorLink = 'https://www.recipetineats.com/vietnamese-pho-recipe/';
  const authorPhoto =
    'https://www.recipetineats.com/wp-content/uploads/2014/04/Dozer-and-Me.jpg';
  const authorName = 'Nagi';

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
};

export default RecipeDescription;
