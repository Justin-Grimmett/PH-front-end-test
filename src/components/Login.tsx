import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

// Page for Login details
// Eg a form with Username and Password

// Set the variables
interface Values {
    userName :  string;
    password: string;
}

const Login = () => {
    // To allow the navigation upon Submit
    const navigate = useNavigate()

    // Set length variables to be used dynamically for the below validation
    let minLen:number = 1;
    let maxLen:number = 50;
    // Form fields validation with Yup
    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .trim()
            .min(minLen, `User Name is Too Short! Minimum ${minLen} character (when trimmed)`)
            .max(maxLen, `User Name is Too Long! Maximum of ${maxLen} characters`)
            .required('User Name is Required, cannot be blank'),
        password: Yup.string()
            .trim()
            .min(minLen, `Password is Too Short! Minimum ${minLen} character (when trimmed)`)
            .max(maxLen, `Password is Too Long! Maximum ${maxLen} characters`)
            .required('Password is Required, cannot be blank')
      });

    return (
        <div>
            <h1>Login</h1>
            <Formik
                // Set the initial variable values
                initialValues={{
                    userName : "", 
                    password: ''
                }}
                // For validation
                validationSchema={SignupSchema}
                // When Submit is clicked
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        // Output just for TESTING
                        console.log(values);    // {userName: 'abc', password: '123'}
                                    //alert(JSON.stringify(values, null, 2));
                        // Finish the submitting cycle
                        setSubmitting(false);
                        // Redirect to the "Logged In" page
                        navigate("/loggedIn", {state : {values}});
                    }, 500);
                }}
            >
                {/* To handle validation */}
                {({ errors, touched }) => (
                // Form UI elements
                    <Form>
                        {/* User name*/}
                        <label htmlFor="userName">User Name</label>
                        <Field id="userName" name="userName" placeholder="User Name" data-length="10"/>
                        {touched.userName && errors.userName && <div>{errors.userName}</div>}
                        {/* Password */}
                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" placeholder="Password"/>
                        {touched.password && errors.password && <div>{errors.password}</div>}
                        {/* Buttons */}
                        <div className="mb-2">
                            <br/><br/><br/>
                            {/* Main Submit - runs onSubmit*/}
                            <Button variant="primary" size="lg" type="submit">Submit</Button>
                            {/* Clear the text fields */}
                            <Button type="reset">Clear</Button>
                            {/* Cancel and redirect back to the Home screen */}
                            <Button type="button" 
                            onClick={() => navigate("/")}>
                                    Cancel / Back to Home
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login