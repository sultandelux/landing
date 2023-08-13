import React from "react";


const EmployeeCount = (props) => {
  const [selectedId, setSelectedId] = React.useState(null)

  
  const buttons = [
   { 
    id: 1,
    label: 'It’s just me',
  selected: false
},
   { 
    id: 2,
    label: 'Less than 20',
  selected: false
},
   { 
    id: 3,
    label: '21 - 100',
  selected: false
},
   { 
    id: 4,
    label: '101-1000',
  selected: false
},
   { 
    id: 5,
    label: '1001+',
  selected: false
},
  ]

  return (
    <div className="my-14 grid content-center justify-center font-semibold">
      <h1 className="text-xl font-semibold text-gray-600 mb-6">
      How many employees does your company have?
      </h1>

    {
      buttons.map( button => { 
        return (
          <label htmlFor="agree" key={button.id } className={button.id == selectedId ? "flex justify-center text-white bg-green-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2" 
          : "flex justify-center text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" } 
          onClick={
            () => {
              setSelectedId(button.id)
              props.getEmployeeData(button.label);
              
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

export default EmployeeCount;
