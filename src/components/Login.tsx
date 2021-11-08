import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

interface Values {
    userName :  string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    userName : "", 
                    password: ''
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        navigate("/loggedIn");
                    }, 500);
                }}
            >
                <Form>
                    <label htmlFor="userName">User Name</label>
                    <Field id="userName" name="userName" placeholder="User Name" />

                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" placeholder="Password"/>

                    <button type="submit">Submit</button>
                    <button type="reset">Clear</button>
                    <button type="button" onClick={() => navigate("/")}>Back to Home</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login