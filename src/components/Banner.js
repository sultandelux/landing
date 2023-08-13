import React, { useState } from 'react'
import { PopupButton } from 'react-calendly'
import { useTranslation } from 'react-i18next'

const Banner = (props) => {
  const [show, setShow] = useState(true)
  const handleShow = () => {
    console.log(show)
    setShow(false)
  }
  const { t } = useTranslation()

  return (
    <>
      <div className={show ? 'visible' : 'hidden'}>
        <div className='relative bg-gray-600'>
          <div className='max-w-7xl mx-auto py-3 px-3 sm:px-3 lg:px-4'>
            <div className='pr-1 sm:text-center sm:px-1'>
              <p className='font-medium text-white'>
                {/* <span className='md:hidden'>We announced a new product!</span> */}
                {/* <span className='flex justify-center md:inline'>
                  Тех консультация бесплатно.
                </span> */}
                <a
                  href="https://t.me/sultandelux?text=hello"
                // rootElement={document.getElementById("root")}
                // text=""
                className='underline'
                >{t('main.banner')}</a>
              </p>
            </div>
            <div className='absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start'>
              <button
                type='button'
                onClick={handleShow}
                className='flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'
              >
                <span className='sr-only'>Dismiss</span>
                <svg
                  className='h-6 w-6 text-white'
                  data-todo-x-description='Heroicon name: outline/x'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
