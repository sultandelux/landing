import React, { useContext} from "react";
import { FormContext } from "./Form";
import axios from "axios";

const StepperControl = (props) => {
  const context = useContext(FormContext);

  const submitHandler = (props) => {
    const telegramMessage = `New form with data:\n\n
    First Name: ${props.formik.values.fName}\n
    Last Name: ${props.formik.values.lName}\n
    Email: ${props.formik.values.email}\n
    Phone Number: ${props.formik.values.phone}\n
    Company Name: ${props.formik.values.cName}\n
    Company Website: ${props.formik.values.wName}\n
    How many employees does your company have?: ${props.employeeData}\n
    How many devs are you looking to hire?: ${props.devsData}\n
    What rates would fit your requirements?: ${props.ratesData}\n
    How long do you plan to work with an engineer(s)?: ${props.planData}`;
  
    axios
      .post("https://api.telegram.org/bot5869110332:AAG0hRi6pz78YCZiYdjLJ3IzvPuHgjDoo6k/sendMessage", {
        chat_id: "-1001906894530",
        text: telegramMessage
      })
      .then(response => {
        openCalendlyPopup();
        console.log("Сообщение успешно отправлено на телеграм");
        // Здесь вы можете выполнить какие-либо дополнительные действия после успешной отправки сообщения
      })
      .catch(error => {
        console.error("Ошибка при отправке сообщения на телеграм:", error);
        // Здесь вы можете обработать ошибку отправки сообщения
      });
  };

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/xponend/15min", // Replace with your Calendly profile URL
      });
    } else {
      console.error("Calendly script not loaded.");
    }
  };

  const isPersonalInfoEmpty =
    !props.formik.values.fName ||
    !props.formik.values.lName ||
    !props.formik.values.email ||
    !props.formik.values.phone;

  return (
    <div className="container flex justify-around fle mt-4 mb-8">
      <div>
      {context.state.step === 7?(
          ""
      ):
      <button
        type="button"
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-black hover:text-white transition duration-200 ease-in-out"
        onClick={() => context.dispatch({ type: "prev" })}
        disabled={context.state.step === 1}
      >
        back
      </button>
      }
      </div>

      <div>
        {context.state.step === 6? (
          <button
          type="button"
          className="bg-black text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-white hover:text-black transition duration-200 ease-in-out"
          onClick={() => {
            submitHandler(props);
            context.dispatch({ type: "next" })
          }}
        >
          Submit
        </button>

        ) :
        (context.state.step === 7)? 
          <div className="text-center mr-5">
             <p className="text-center mr-15 text-green-600 decoration-4 text-4xl">Thank you for submitting the form!</p>
              <br></br>
             <p className="text-center mr-15 text-green-600 decoration-4 text-xl">Our managers will contact you soon</p>
          </div>
        :(
          <button
            type="button"
            className="bg-black text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-white hover:text-black transition duration-200 ease-in-out"
            onClick={() => context.dispatch({ type: "next" })}
            disabled={isPersonalInfoEmpty}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperControl;
