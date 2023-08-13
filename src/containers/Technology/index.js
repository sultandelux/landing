import icons from './icons'
import './index.scss'
import { useTranslation } from 'react-i18next'

const Technology = () => {
  const { t } = useTranslation()

  return (
    <div className='container px-5 lg:px-0'>
      <div className='mb-0 mt-4 h-20 flex flex-col md:flex-row items-center overflow-hidden relative'>
        <span className='technology-used text-center md:text-left mr-0 text-xl md:mr-8 flex-shrink-0'>
          {t('main.technology.title')}
        </span>
        <div className='technology-slider flex flex-nowrap flex-auto items-center justify-between overflow-hidden w-full md:w-auto'>
          <div className='flex items-center flex-shrink-0 h-20 left-0 animate gap-20 animate'>
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-center items-start w-[20rem]'
                >
                  {icon}
                </div>
              )
            })}
          </div>
          <div className='flex items-center flex-shrink-0 h-20 left-0 ml-6 animate gap-20 animate'>
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-center items-start w-[20rem]'
                >
                  {icon}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
