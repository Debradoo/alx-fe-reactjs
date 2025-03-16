import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().required('Password required').min(6, 'Minimum 6 characters')
});

export const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitting:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" className="error" />
        </div>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};