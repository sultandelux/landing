import { useTranslation } from 'react-i18next'
import bubbleCode from '@/assets/images/bubble/bubbleCode.png'
import { IoMdCheckmark } from 'react-icons/io'
import bubble1 from '@/assets/images/bubble/2.png'
import bubble2 from '@/assets/images/bubble/3.png'
import bubble3 from '@/assets/images/bubble/4.png'
import bubble4 from '@/assets/images/bubble/5.png'
import bubble5 from '@/assets/images/bubble/6.png'
import { Parallax } from 'react-scroll-parallax'

const bulletPoints = [
  'main.bubbles.point1',
  'main.bubbles.point2',
  'main.bubbles.point3',
  'main.bubbles.point4',
  'main.bubbles.point5',
]

const Bubbles = () => {
  const { t } = useTranslation('translation')
  return (
    <div className='flex lg:px-12 justify-center items-center'>
      <div className='parallax-logos hidden lg:block relative'>
        <img src={bubbleCode} />
        <Parallax
          className='particle-image one hidden lg:block'
          translateX={[-20, 70]}
          translateY={[-20, 70]}
        >
          <div className='parallax-outer'>
            <div className='parallax-inner'>
              <img src={bubble1} height={2} />
            </div>
          </div>
        </Parallax>
        <Parallax
          className='particle-image two hidden lg:block'
          translateX={[-10, 10]}
          translateY={[-10, 70]}
        >
          <div className='parallax-outer'>
            <div className='parallax-inner'>
              <img src={bubble2} />
            </div>
          </div>
        </Parallax>
        <Parallax
          className='particle-image three hidden lg:block'
          translateY={[-10, 50]}
          translateX={[-50, 0]}
        >
          <div className='parallax-outer'>
            <div className='parallax-inner'>
              <img src={bubble3} />
            </div>
          </div>
        </Parallax>
        <Parallax
          className='particle-image four hidden lg:block'
          translateX={[-90, 0]}
          translateY={[-100, 0]}
        >
          <div className='parallax-outer'>
            <div className='parallax-inner'>
              <img src={bubble4} />
            </div>
          </div>
        </Parallax>
        <Parallax
          className='particle-image five hidden lg:block'
          translateY={[-10, 10]}
        >
          <div className='parallax-outer'>
            <div className='parallax-inner'>
              <img src={bubble5} />
            </div>
          </div>
        </Parallax>
      </div>
      <div className='packages-content'>
        <div className='bubble-content'>
          <p className='text-2xl mb-5 font-bold'>{t('main.bubbles.title')}</p>
          <p className='text-gray-600 text-lg'>{t('main.bubbles.desc')}</p>
        </div>
        <div className='bubble-content-points'>
          <ul className='text-gray-600 mt-9'>
            {bulletPoints.map((point, index) => (
              <li key={index} className='mb-5'>
                <IoMdCheckmark className='inline' /> {t(point)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Bubbles
