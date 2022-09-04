import "./register.css";
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.password) {
      errors.password = "Required";
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
      errors.password = 'Minimum eight characters, at least one letter, one number and one special character'
    }

    if(values.confirmPassword !== values.password){
      errors.confirmPassword = "Password doesn't matches!!!";
    }

    return errors; 
  };
  
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: values => {
      axios.post('https://reqres.in/api/users', {
        values
      })
      .then(res=>{
        console.log(res);
        navigate("/");
      })
      .catch(err=>console.log(err))
    }
  })

  return (  
      <div className="register">
          <form onSubmit={formik.handleSubmit} className="form">
              <div className="field">
                  <label htmlFor="firstName">First Name : </label>
                  <div className="contain">
                      <input type="text" name="firstName" id="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
                      {formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
                  </div>
              </div>
              <div className="field">
                  <label htmlFor="lastName">Last Name : </label>
                  <div className="contain">
                      <input required type="text" name="lastName" id="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/>
                      {formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
                  </div>
              </div>
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
              <div className="field">
                  <label htmlFor="confirmPassword">Confirm Password : </label>
                  <div className="contain">
                      <input type="password" name="confirmPassword" id="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}/>
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                  </div>
              </div>
              <button type="submit" className="btn">Submit</button>
          </form>
      </div>
  );
}

export default Register;