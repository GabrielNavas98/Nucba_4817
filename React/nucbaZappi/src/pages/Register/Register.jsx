import { Formik } from "formik";
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlicer' 

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import { createUser } from "../../axios/axios-user";
import useRedirect from "../../hook/useRedirect";

const Register = () => {

  const dispatch = useDispatch()
  useRedirect('/')

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values) => {
           const user = await createUser(
            values.name,
            values.email,
            values.password
          )
          console.log(user.usuario);
          dispatch(setCurrentUser({...user.usuario}))
        }}
      >
        <Form>
          <LoginInput name='name' type="text" placeholder="Nombre" />
          <LoginInput name='email' type="text" placeholder="Email" />
          <LoginInput name='password' type="password" placeholder="Password" />

          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type="button">
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
