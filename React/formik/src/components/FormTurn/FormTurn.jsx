import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo Requerido'),
  surname: Yup.string().trim().required('Campo Requerido'),
  email: Yup.string().email('Correo electronico invalido').required('Campo requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, 'Numero de celular invalido')
    .required('Campo requerido'),
  date: Yup.date().required('Campo requerido'),
  age: Yup.number()
    .integer('Debe ser un número entero')
    .lessThan(95, 'Che deja la pala')
    .moreThan(18, 'Sos menor de edad')
    .required('Campo requerido')
  ,
  comments: Yup.string().max(255, 'Máximo (255) excedido').notRequired()
})

const FormTurn = () => {

  //solo utilizar si no esta Formik component
  // const { getFieldProps, handleSubmit, errors, touched } = useFormik({
  //   initialValues:{
  //     name: '',
  //     surname:'',
  //     date:'',
  //     age:'',
  //     email: '',
  //     cellphone: '',
  //     comments: ''
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validationSchema: validationSchema
  // })

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>

      <Formik
        initialValues={{
          name: '',
          surname: '',
          date: '',
          age: '',
          email: '',
          cellphone: '',
          comments: ''
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm()
        }}
        validationSchema={validationSchema}
      >

        {
          ({ touched, errors }) => (
            <Form>
              <Input
                label="Nombre"
                type="text"
                name='name'
                isError={touched.name && errors.name}
              />
              <Input
                label="Apellido"
                type="text"
                name='surname'
                isError={touched.surname && errors.surname}
              />
              <Input
                label="Fecha"
                type="date"
                name='date'
                isError={touched.date && errors.date}

              />
              <Input
                label="Edad"
                type="number"
                name='age'
                isError={touched.age && errors.age}
              />
              <Input
                label="Correo Electronico"
                type="email"
                name='email'
                isError={touched.email && errors.email}
              />
              <Input
                label="Telefono"
                type="tel"
                name='cellphone'
                isError={touched.cellphone && errors.cellphone}
              />
              <TextAreaInput
                label="¿Cómo escuchaste de nosotros?"
                name='comments'
                isError={touched.comments && errors.comments}
              />
              <Submit/>
            </Form>
          )
        }

      </Formik>

    </FormBox>
  );
};

export default FormTurn;




