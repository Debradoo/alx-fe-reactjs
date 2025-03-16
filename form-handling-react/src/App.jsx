import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm"; 
import * as Yup from "yup";
import './App.css'

function App() {
 
  return (
    <>
      
      <h2>Controlled Form</h2>
      <RegistrationForm />
      
      <h2>Formik Form</h2>
      <FormikForm />
    </>
  )
}

export default App
