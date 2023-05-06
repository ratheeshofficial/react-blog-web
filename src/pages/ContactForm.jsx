import { useState } from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  city: "",
  country: "",
};

const steps = [
  {
    title: "Step 1",
    fields: ["firstName", "lastName", "email"],
  },
  {
    title: "Step 2",
    fields: ["age", "city", "country"],
  },
];

function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((step) => step + 1);
  };

  const handlePrev = () => {
    setCurrentStep((step) => step - 1);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

    currentStep < steps.length - 1 && handleNext();
  };

  const renderFields = () => {
    const { fields } = steps[currentStep];

    return fields.map((field) => (
      <div key={field}>
        <label htmlFor={field}>{field}</label>
        <Field id={field} name={field} />
      </div>
    ));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <h1>{steps[currentStep].title}</h1>
            {renderFields()}
            {currentStep > 0 && (
              <button type="button" onClick={handlePrev}>
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
            <button type="submit" disabled={isSubmitting}>
              {currentStep < steps.length - 1 ? "Save and Continue" : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
