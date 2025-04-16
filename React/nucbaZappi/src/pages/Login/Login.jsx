import { Formik } from "formik";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import useRedirect from '../../hook/useRedirect'

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios-user";
import { setCurrentUser } from '../../redux/user/userSlicer'

const Login = () => {

  const dispatch = useDispatch()
  useRedirect('/')

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const userData = await loginUser(values.email, values.password)
          dispatch(setCurrentUser({
            ...userData.usuario,
            token: userData.token
          }))
        }}  
      >
        <Form>
          <LoginInput name='email' type="text" placeholder="Email" />
          <LoginInput name='password' type="password" placeholder="Password" />
          <Link to="/forgot-password"></Link>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit type="button">
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
