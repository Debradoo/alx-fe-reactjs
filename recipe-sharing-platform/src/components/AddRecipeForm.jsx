import { useState } from "react";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.steps) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log("New Recipe Submitted:", recipe);
    alert("Recipe submitted successfully!");
    setRecipe({ title: "", ingredients: "", steps: "" }); // Reset form
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>
        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="List ingredients, separated by commas"
            rows="3"
          />
        </div>
        {/* Steps Input */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Describe the preparation steps"
            rows="4"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
