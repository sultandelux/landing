import React, { useContext } from "react";
import { FormContext } from "./Form";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const context = useContext(FormContext);
  // console.log(context.state.step);

  return (
    <div className="w-full text-center">
      <div className="container">
        <ul className="mt-5 relative flex justify-between text-sm md:text-lg">
          {context.state.steps.map((step, index) => {
            return (
              <li key={index} className="flex flex-col items-center">
                <div className="relative bg-white
                w-5 sm:w-5 md:w-5 lg:w-8 xl:w-8 2xl:w-8
                h-5 sm:h-5 md:h-5 lg:h-8 xl:h-8 2xl:h-8
                 rounded-full ring-2 ring-black flex justify-center items-center text-slate-700 font-semibold">
                  {context.state.step > index+1 | context.state.step == 7 ? (
                    <TiTick className="bg-green-500 text-white rounded-full w-full h-full" />
                  )
                  : (
                    index+1
                  )}
                </div>

                <div>{step}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stepper;
