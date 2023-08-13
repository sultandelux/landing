import React from "react";
import { Field, ErrorMessage} from "formik";

const PersonalDetails = () => {
  return (
      <div className="mt-7 w-full flex justify-center svelte-1l8159u">
        <div className="grid grid-cols-1 grid-flow-row gap-10  ">
          <div className="relative">
            <Field
              type="text"
              id="fName"
              name="fName"
              className="w-80 bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
              placeholder="First Name"
            />
            <ErrorMessage
              name="fName"
              component="div"
              className="absolute text-sm text-red-700"
            />
            
            <label
              htmlFor="fName"
              className="absolute -top-3.5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <Field
              type="text"
              id="lName"
              name="lName"
              className="w-80 bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
              placeholder="Last Name"
            />
            <ErrorMessage
              name="lName"
              component="div"
              className="absolute text-sm text-red-700"
            />
            <label
              htmlFor="lName"
              className="absolute -top-3.5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
            >
              Last Name
            </label>
          </div>
          <div className="relative">
            <Field
              type="text"
              id="email"
              name="email"
              className="w-80 bg-white p-1 flex border border-gray-200 rounded svelte-1l8159u"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="absolute text-sm text-red-700"
            />
            <label
              htmlFor="email"
              className="absolute -top-5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-80 bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
              placeholder="Phone Number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className=" text-sm text-red-700"
            />
            <label
              htmlFor="phone"
              className="absolute -top-3.5 left-0 font-bold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
            >
              Phone Number
            </label>
          </div>
        </div>
      </div>
  );
};

export default PersonalDetails;
