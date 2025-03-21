import { useState } from "react";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!recipe.title.trim()) newErrors.title = "Title is required.";
    if (!recipe.ingredients.trim())
      newErrors.ingredients = "Ingredients cannot be empty.";
    if (!recipe.steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Recipe Submitted:", recipe);
      alert("Recipe added successfully!");
      setRecipe({ title: "", ingredients: "", steps: "" });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={recipe.title}
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block font-medium">Ingredients</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="3"
            value={recipe.ingredients}
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          ></textarea>
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div>
          <label className="block font-medium">Preparation Steps</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="4"
            value={recipe.steps}
            onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
          ></textarea>
          {errors.steps && <p className="text-red-500">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
