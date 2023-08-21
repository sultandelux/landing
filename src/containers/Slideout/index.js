import image1 from '@/assets/images/mockup1.png'
import image2 from '@/assets/images/mockup2.png'
import image3 from '@/assets/images/mockup3.png'
import { useState } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

const Slideout = () => {
  const [isVisibleActive, setIsVisibleActive] = useState(true)
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)

  const handleChange = (isVisible) => {
    if (isVisible) {
      setIsActive1(true)
      setIsActive2(true)
      setIsVisibleActive(false)
    }
  }

  return (
    <ReactVisibilitySensor active={isVisibleActive} onChange={handleChange}>
      <div className='slideout-container container my-4'>
        <div className='slideout-images-container flex justify-center '>
          <img
            className={`slideout-image image-side ${
              isActive1 ? 'animate-image right' : ''
            }`}
            src={image1}
          />
          <img className='slideout-image image-center' src={image2} />
          <img
            className={`slideout-image image-side ${
              isActive2 ? 'animate-image left' : ''
            }`}
            src={image3}
          />
        </div>
      </div>
    </ReactVisibilitySensor>
  )
}

export default Slideout
