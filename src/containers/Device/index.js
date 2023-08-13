import React, {useState } from "react";
import logo from 'Assets/icons/logo.png'

const Device = () => {

  const [platform, setPlatform] = useState('ios');
  const [selectedIphone, setSelectedIphone] = useState();
  const [selectedAndroid, setSelectedAndroid] = useState();

  const handlePlatformChange = (selectedPlatform) => {
    setPlatform(selectedPlatform);
  };

  const handleIphoneChange = (event) => {
    setSelectedIphone(event.target.value);
  };

  const handleAndroidChange = (event) => {
    setSelectedAndroid(event.target.value);
  };

  

  return (
    <div>
    <div className="ml-20 flex justify-center rounded-2xl shadow-2xl bg-gray-200 w-4/5 h-3/5 mt-10 mb-20 border-2 border-gray-300"
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/VH1C7xACJt4/maxresdefault.jpg)`}}>
    <div className="absolute bottom-60 left-24 z-10 overflow-hidden">
      <img src={logo} width="189" height="255"></img>
    </div>

      <div className='flex justify-start absolute mt-5 left-0 ml-28'>
        <span className='w-3 h-3 bg-red-400 rounded-full mr-2'></span>
        <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
        <span className='w-3 h-3 bg-green-400 rounded-full mr-2'></span>
      </div>
      <div className="p-5 mt-48 rounded-xl h-40 bg-gray-100 mb-96 mr-96">
        <label className="block ml-1 mb-2 text-sm font-medium text-black">Platform:</label>
        <div class="inline-flex mb-2">
          <button class="bg-white hover:bg-gray-100 text-black font-bold py-1 px-2 rounded-xl focus:bg-black focus:text-white"
          onClick={() => handlePlatformChange('android')}>
            Android
          </button>

          <button class="bg-white hover:bg-gray-100 text-black font-bold py-1 px-5 rounded-xl focus:bg-black focus:text-white"
          onClick={() => handlePlatformChange('ios')}>
            IOS
          </button>
        </div>
        <label className="block ml-1 mb-1 text-sm font-medium text-black">Choose a Device:</label>
        {platform === 'ios'?
        (
            <select id="iphones" className="bg-black border border-gray-300 text-white 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedIphone} onChange={handleIphoneChange}>
              <option selected>iPhone 13</option>
              <option value="ip14pro">iPhone 14 Pro</option>
              <option value="ip14proMax">iPhone 14 Pro Max</option>
            </select>
        

        )
        :(
            <select id="androids" className="bg-black border border-gray-300 text-white 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedAndroid} onChange={handleAndroidChange}>
              <option selected>Android Pixel 6</option>
              <option value="aPixel6Pro">Android Pixel 6 Pro</option>
            </select>
        )
      }

<div className="absolute bottom-40 ml-36">
    {platform === 'ios'?
        (
      <div className="ml-28">
        {selectedIphone === 'ip14pro'? 
        (
          <iframe
            src="https://appetize.io/embed/vuklcckknd3rwmvuebd6j5ko5m?device=iphone14pro"
            width="378px" height="800px" frameborder="0" scrolling="no">
          </iframe>
          )
          : selectedIphone === 'ip14proMax'?(
            <iframe
              src="https://appetize.io/embed/vuklcckknd3rwmvuebd6j5ko5m?device=iphone14promax"
              width="378px" height="800px" frameborder="0" scrolling="no">
            </iframe>
          )
          : 
          (
            <iframe
              src="https://appetize.io/embed/vuklcckknd3rwmvuebd6j5ko5m?device=iphone13"
              width="378px" height="800px" frameborder="0" scrolling="no">
            </iframe>
          )
        }
      </div>
      )
        :(
          <div className="ml-28">
             {selectedAndroid === 'aPixel6Pro'?
             (
              <iframe
                src="https://appetize.io/embed/t2ybfxia3jubac35ir4w6qr5oi?device=pixel6pro"
                width="400px" height="850px" frameborder="0" scrolling="no">
              </iframe>
              )
              :(
                <iframe
                  src="https://appetize.io/embed/t2ybfxia3jubac35ir4w6qr5oi?device=pixel6"
                  width="360px" height="740px" frameborder="0" scrolling="no">
                </iframe>
                )
              }
          </div>
        )
      }
    </div>

    </div>
    
  </div>
  </div>
  )
}

export default Device