import React from 'react';
import { Formik, Field, Form } from 'formik';

export default function Contact() {
  return (
    <div className="flex flex-col w-full text-justify gap-10 mt-5">
      <p className="text-[25px] tracking-[5px] pb-5">
        For more information, projects, or anything else, feel free to fill the next form...
      </p>
      <div className='flex w-[350px] ml-3 place-self-center'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form className="flex flex-col w-full gap-2">
              <div className="flex flex-col items-start justify-start">
                <label htmlFor="user">Name</label>
                <Field
                  id="name"
                  name="name"
                  className="flex w-full border-b border-black px-2 py-1 bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex flex-col items-start justify-start">
                <label htmlFor="password">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="flex w-full border-b border-black px-2 py-1 bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex flex-col items-start justify-start mt-7">
                <label htmlFor="password">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="flex w-full border rounded-sm border-black px-2 py-1 bg-transparent focus:outline-none"
                  style={{ resize: 'none' }}
                />
              </div>

              <p className="font-light text-black/50 my-4">
                Forgot your password? Retrieve here
              </p>

              <button
                type="submit"
                className="bg-black text-white py-1 rounded-md transition duration-300 ease-in-out"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
