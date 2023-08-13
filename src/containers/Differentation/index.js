import image1 from 'Assets/images/tabs/1.png'
import image2 from 'Assets/images/tabs/2.png'
import image3 from 'Assets/images/tabs/3.png'
import image4 from 'Assets/images/tabs/4.png'
import image5 from 'Assets/images/tabs/5.png'
import image6 from 'Assets/images/tabs/6.png'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import './index.scss'
import icons from './icons'

const images = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
  image5: image5,
  image6: image6,
}

const leftData = [
  {
    id: 2,
    title: 'main.differentation.title1',
    desc: 'main.differentation.desc1',
    icon: icons[0],
    color: '#F55767',
  },
  {
    id: 4,
    title: 'main.differentation.title2',
    desc: 'main.differentation.desc2',
    icon: icons[1],
    color: '#40975F',
  },
  {
    id: 5,
    title: 'main.differentation.title3',
    desc: 'main.differentation.desc3',
    icon: icons[2],
    color: '#5856D6',
  },
]

const rightData = [
  {
    id: 6,
    title: 'main.differentation.title4',
    desc: 'main.differentation.desc4',
    icon: icons[3],
    color: '#D6AB00',
  },
  {
    id: 1,
    title: 'main.differentation.title5',
    desc: 'main.differentation.desc5',
    icon: icons[4],
    color: '#E97325',
  },
  {
    id: 3,
    title: 'main.differentation.title6',
    desc: 'main.differentation.desc6',
    icon: icons[5],
    color: '#3DABDD',
  },
]

const Differentation = () => {
  const { t } = useTranslation()

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  const [active, setActive] = useState('active1')
  const [image, setImage] = useState(image1)
  // const [imageVisible, setImageVisible] = useState(false)

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute('data-id')
    const active = 'active' + id
    setActive(active)
    setImage(images[`image${id}`])
    // setImageVisible(true)
  }

  const renderFeatures = (data) => {
    return data.map((item) => (
      <div
        key={item.id}
        style={active === `active${item.id}` ? { borderColor: item.color } : {}}
        className='z-1 features border-solid w-72 md:w-80 border-2 p-5 rounded-full flex items-center'
        data-id={item.id}
        onClick={handleClick}
      >
        <div className='icon-diff'>{item.icon}</div>
        <div className='ml-2'>
          <h3 className='font-bold'>{t(item.title)}</h3>
          {/* <p>{t(item.desc)}</p> */}
        </div>
      </div>
    ))
  }

  return (
    <div className='differentatition-wrapper md:px-0 my-0'>
      <div className='pulse-wrapper hidden xl:block'>
        <span className='pulse block' />
        <span className='pulse block' />
        <span className='pulse block' />
      </div>
      <div className='flex justify-evenly hidden sm:flex'>
        <div className='left-side pr-5 lg:p-0 flex flex-col gap-12 justify-center'>
          {renderFeatures(leftData)}
        </div>
        <div className='center-side hidden xl:block'>
          <img className='center-image' src={image} />
        </div>
        <div className='right-side pl-5 lg:p-0 flex flex-col gap-12 justify-center'>
          {renderFeatures(rightData)}
        </div>
      </div>
      {isMobile && (
        <div className='flex flex-col gap-5 justify-center items-center'>
          {[...leftData, ...rightData].map((item) => (
            <div
              key={item.id}
              style={
                active === `active${item.id}` ? { borderColor: item.color } : {}
              }
              className='border-solid w-full border-2 p-5 rounded-full flex items-center'
              data-id={item.id}
              onClick={handleClick}
            >
              <div className='icon-diff'>{item.icon}</div>
              <div className='ml-2'>
                <h3 className='font-bold'>{t(item.title)}</h3>
                {/* <p>{t(item.desc)}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Differentation
