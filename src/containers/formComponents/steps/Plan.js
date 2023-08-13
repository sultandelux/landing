import React from "react";

const Plan = (props) => {

  const [selected, setSelected] = React.useState(null)

  const buttons = [
   { 
    id: 1,
    label: 'less than 6 months',
  selected: false
},
   { 
    id: 2,
    label: '6-12 months',
  selected: false
},
   { 
    id: 3,
    label: '1-2 years',
  selected: false
},
{ 
    id: 4,
    label: '2+ years',
  selected: false
},
  ]
  return (
    <div className="my-14 grid content-center justify-center font-semibold">
      <h1 className="text-xl font-semibold text-gray-600 mb-6">
      How long do you plan to work with an engineer(s)?
      </h1>

    {
      buttons.map( button => { 
        return ( 
          <label htmlFor="agree" key={button.id } className={button.id == selected ? "flex justify-center text-white bg-green-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2" 
          : "flex justify-center text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"} onClick={
            () => {
              setSelected(button.id)
              props.getPlanData(button.label);
            }
          }
          >
          {button.label}
        </label>
        )
      })
    }
    </div>
  );
};

export default Plan;
