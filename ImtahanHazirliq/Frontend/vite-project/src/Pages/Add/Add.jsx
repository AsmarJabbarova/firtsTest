import React from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
const Shema = Yup.object().shape({
  name: Yup.string()
    .required("name is required"),
  price: Yup.number()
    .required("price is required")

})

function Add() {
  return (
    <div className='mainAdd'>
      <Formik initialValues={{
        name: "",
        price: 0
      }}
        validationSchema={Shema}
        onSubmit={(values) => {
          console.log("ghj");
          axios.post("http://localhost:3000/products", values).then((res) => console.log(res.data))
          alert("gonderildi")
        }}
      >
        {({ errors, touched,handleSubmit }) => (
          <Form onSubmit={handleSubmit}> 
            <Field
              type="text" name="name" placeholder="name" />
            {errors.name && touched.name && (
              <div>{errors.name}</div>
            )}
            <Field
              type="number" name="price" placeholder="price" />
            {errors.price && touched.price && (
              <div>{errors.price}</div>
            )}
              <div className="button">
        <button type='submit'>Add</button>
      </div>
          </Form>
        )}


      </Formik>
    
    </div>
  )
}

export default Add