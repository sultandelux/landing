import React from "react";
import { Field, ErrorMessage } from "formik";

const CompanyDetails = () => {
  return (
    <div  className="mt-7 w-full flex justify-center svelte-1l8159u">
      <div className="grid grid-cols-1 grid-flow-row gap-10  ">
        <div className="relative">
          <Field
            type="text"
            id="cName"
            name="cName"
            className="w-80 bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
            placeholder="Company Name"
          />
          <ErrorMessage
            name="cName"
            component="div"
            className="absolute text-sm text-red-700"
          />
          
          <label
            htmlFor="cName"
            className="absolute -top-3.5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Company Name
          </label>
        </div>
        <div className="relative">
          <Field
            type="text"
            id="wName"
            name="wName"
            className="w-80 bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
            placeholder="Company Website"
          />
          <ErrorMessage
            name="wName"
            component="div"
            className="text-sm text-red-700"
          />
          <label
            htmlFor="wName"
            className="absolute -top-3.5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Company Website 
          </label>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
