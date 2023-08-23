import React from 'react'
import Logo from '@/assets/images/logos/logo.png'
import Hero from './Hero'
import { useTranslation } from 'next-i18next'
import i18n from 'i18next'
import Call from '@/assets/images/call.gif'
import ReactVisibilitySensor from 'react-visibility-sensor'

export default function Header({ handleActive }) {
  const { t } = useTranslation('translation')  const handleLangChange = (e) => i18n.changeLanguage(e.target.value)

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      handleActive(true)
    } else {
      handleActive(false)
    }
  }

  return (
    <div className='p-1 pt-4 flex flex-col justify-center lg:p-10 xl:p-10 sm:p-4'>
      <div className='relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-2xl absolute inset-0 -mr-3.5 bg-gradient-to-r from-gray-500 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:rotate-0 sm:rounded-3xl'></div>
        <div className='rounded-2xl relative bg-white shadow-2xl border-t-2 border-gray-300 sm:rounded-3xl'>
          <ReactVisibilitySensor onChange={handleVisibilityChange}>
            <div className='flex items-center justify-start pt-6 pl-6'>
              <span className='w-3 h-3 bg-red-400 rounded-full mr-2'></span>
              <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
              <span className='w-3 h-3 bg-green-400 rounded-full mr-2'></span>
            </div>
          </ReactVisibilitySensor>
          <div className='px-2 pt-3 sm:p-10 lg:p-10'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <a href='/' className='flex items-center justify-center '>
                  <img
                    className='h-10'
                    src={Logo}
                    alt='Xponend лого, разработка сайтов, приложений'
                  />
                  <span className='text-xl font-bold tracking-tight'>
                    {/* Xponend */}
                  </span>
                </a>
              </div>
              <div className='grid grid-cols-3 gap-2 lg:gap-4'>
                <button
                  onClick={(e) => handleLangChange(e)}
                  value='kk'
                  type='button'
                  className='transition duration-200 border 
                  border-gray-200 text-gray-500 w-full pl-0 px-2 rounded-lg 
                  text-base shadow-sm hover:shadow-md font-normal text-center inline-block'
                >
                  🇰🇿 <span className='hidden sm:inline'>kz</span>
                </button>
                <button
                  onClick={(e) => handleLangChange(e)}
                  value='en'
                  type='button'
                  className='transition duration-200 border border-gray-200 text-gray-500 w-full 
                  px-2 rounded-lg text-base shadow-sm hover:shadow-md font-normal text-center inline-block'
                >
                  🇺🇸 <span className='hidden sm:inline'>us</span>
                </button>
                <button
                  onClick={(e) => handleLangChange(e)}
                  value='ru'
                  type='button'
                  className='transition duration-200 border border-gray-200 text-gray-500 w-full 
                  px-2 rounded-lg text-base shadow-sm hover:shadow-md font-normal text-center inline-block'
                >
                  🇷🇺 <span className='hidden sm:inline'>ru</span>
                </button>
              </div>
              <a className='md:hidden' href='tel:+77471240727'>
                <img className='w-6 h-6' src={Call} />
              </a>
              <a
                href='/apps'
                className='visible md:flex items-center justify-center'
              >
                <button
                  className='px-2.5 py-1 lg:px-6 lg:py-3 rounded-3xl font-medium bg-gradient-to-b 
                from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out'
                >
                  {t('main.hero.menu1')}
                </button>
              </a>
            </div>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}
