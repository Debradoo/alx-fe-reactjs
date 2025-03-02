import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/" element={<RecipeList />} />
        

      </Routes>
    </Router>
    </>
  )
}

export default App
