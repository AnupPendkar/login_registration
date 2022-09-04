import "./login.css";
import axios from "axios";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/UserSplice";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
        if(!values.password) {
          errors.password = "Required";
        }

        return errors;
      };
    
      const formik = useFormik({
        initialValues:{
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          console.log(values);
          axios.post('https://reqres.in/api/login', {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          })
          .then(res=>{
            console.log(res);
            dispatch(login());
            navigate('/welcome');
          })
          .catch(err=>console.log(err))
        }
      })

      
    return (  
        <div className="login">
            <form onSubmit={formik.handleSubmit} className="form">
                <div className="field">
                    <label htmlFor="email">Email : </label>
                    <div className="contain">
                        <input type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="password">Password : </label>
                    <div className="contain">
                        <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                    </div>
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
}

export default Login;