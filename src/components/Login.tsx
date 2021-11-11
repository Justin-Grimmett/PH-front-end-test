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
            <h1>Login Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in alias amet laborum blanditiis eaque accusantium eligendi iste nisi et minima quo sit assumenda harum, nobis tempore adipisci, quasi eveniet.</p>
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
                        // Finish the submitting cycle
                        setSubmitting(false);
                        // Redirect to the "Logged In" page
                        navigate("/loggedIn", { state : {values} });
                    }, 500);
                }}
            >
                {/* To handle validation */}
                {({ errors, touched }) => (
                // Form UI elements
                    <Form className="form-margin">
                        {/* User name*/}
                        <label htmlFor="userName">User Name</label>
                        <Field id="userName" name="userName" placeholder="User Name"/>
                        {touched.userName && errors.userName && <div className="error-text">{errors.userName}</div>}
                        {/* Password */}
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="Password" type="password"/>
                        {touched.password && errors.password && <div className="error-text">{errors.password}</div>}
                        {/* Buttons */}
                        <div className="mb-2">
                            <br/><br/><br/>
                            {/* Main Submit - runs onSubmit*/}
                            <Button variant="primary" size="lg" type="submit" id="submit">Submit</Button>
                            {/* Clear the text fields */}
                            <Button type="reset" id="reset">Clear</Button>
                            {/* Cancel and redirect back to the Home screen */}
                            <Button type="button" id="cancel"
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