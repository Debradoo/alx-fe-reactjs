import { useRecipeStore } from './recipeStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }));
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterRecipes(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;