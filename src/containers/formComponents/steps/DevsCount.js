import React from "react";

const DevsCount = (props) => {

  const [selected, setSelected] = React.useState(null)

  const buttons = [
   { 
    id: 1,
    label: 'Start with 1',
  selected: false
},
   { 
    id: 2,
    label: 'Up to 5',
  selected: false
},
   { 
    id: 3,
    label: '5+ engineers',
  selected: false
},
  ]
  return (
    <div className="my-14 grid content-center justify-center font-semibold">
      <h1 className="text-xl font-semibold text-gray-600 mb-6">
      How many devs are you looking to hire?
      </h1>

    {
      buttons.map( button => { 
        return ( 
          <label htmlFor="agree" key={button.id } className={button.id == selected ? "flex justify-center text-white bg-green-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2" 
          : "flex justify-center text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"} onClick={
            () => {
              setSelected(button.id)
              props.getDevsData(button.label);
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

export default DevsCount;
