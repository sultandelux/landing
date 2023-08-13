import React, { useReducer, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import PersonalDetails from "./steps/PersonalDetails";
import CompanyDetails from "./steps/CompanyDetails";
import EmployeeCount from "./steps/EmplyeeCount";
import DevsCount from "./steps/DevsCount";
import Rates from "./steps/Rates";
import Plan from "./steps/Plan";


export const FormContext = React.createContext();

const initialState = {
  steps: ["Personal", "Company", "Employee", "Devs", "Rates", "Work"],
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { ...state, step: state.step + 1 };
    case "prev":
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
};

const MultiForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [employeeData, setEmployeeData] = useState('');
  const [devsData, setDevsData] = useState('');
  const [ratesData, setRatesData] = useState('');
  const [planData, setPlanData] = useState('');

  const details = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    cName: "",
    wName: "",
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required("Enter first name"),
    lName: Yup.string().required("Enter last name"),
    email: Yup.string()
      .email("must be a valid mail")
      .required("Enter E-Mail address"),
    phone: Yup.string().length(11, "11 Digit number").required('Required'),
  });

  function getEmployeeData(data) {
    setEmployeeData(data);
  }
  function getDevsData(data) {
    setDevsData(data);
  }
  function getRatesData(data) {
    setRatesData(data);
  }
  function getPlanData(data) {
    setPlanData(data);
  }


  return (
    <div className="md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5
     px-2 sm:px-4 md:px-5 lg:px-20 xl:px-20 2xl:px-20
    mb-10 mt-10 container mx-auto bg-white rounded-2xl shadow-2xl shadow-stone-400">


      <FormContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Stepper />
        <Formik
          initialValues={details}
          onSubmit={values => console.log("Values",values)}
          validationSchema={validationSchema}
        >
          {(formik) => {
            // console.log(formik);
            return (
              <Form onSubmit={formik.onSubmit}>
                {state.step === 1 ? <PersonalDetails /> : null}
                {state.step === 2 ? <CompanyDetails /> : null}
                {state.step === 3 ? <EmployeeCount getEmployeeData={getEmployeeData}/> : null}
                {state.step === 4 ? <DevsCount getDevsData={getDevsData}/> : null}
                {state.step === 5 ? <Rates getRatesData={getRatesData}/> : null}
                {state.step === 6 ? <Plan getPlanData={getPlanData}/> : null}


                <StepperControl formik={formik} 
                employeeData={employeeData} 
                devsData={devsData}
                ratesData={ratesData}
                planData={planData}
                />
              </Form>
            );
          }}
        </Formik>
      </FormContext.Provider>
    </div>
  );
};

export default MultiForm;
