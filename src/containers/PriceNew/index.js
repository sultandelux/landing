import React from 'react'
import { useTranslation } from 'next-i18next'
// import Highlighter from 'react-highlight-words'
// import MaxtrixEffect from 'Components/MatrixEffect'
// import { MatrixRainingLetters } from 'react-mdr'
// import red from '@/assets/images/packages/red.png'
// import pack from '@/assets/images/packages/pack.png'
import { FaPaperPlane } from 'react-icons/fa'

const Price = () => {
  const { t } = useTranslation('translation')  const [togglePricing, setTogglePricing] = React.useState(true)

  return (
    <>
      <div className='relative bg-gray-300 rounded-lg '>
        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-0'>
          <div className='mt-10 pb-2 pt-10 max-w-md mx-auto space-y-10 lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
            <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible box-border border-2 border-purple-500 opacity-70 hover:opacity-100'>
              <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                <botton
                  className='flex justify-start space-x-1 '
                  onClick={() => setTogglePricing(true)}
                >
                  <div className='grid grid-cols-3'>
                    <div className=''>
                      <FaPaperPlane className='inline w-14 h-14 text-purple-500' />
                    </div>
                    <div className='col-span-2'>
                      <p className='text-purple-500 font-bold'>SELF-HOSTED</p>
                      <p className=''>Hosted on your own servers.</p>
                    </div>
                  </div>
                </botton>
              </div>
            </div>

            <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible box-border border-blue-900 border-2 opacity-70 hover:opacity-100 '>
              <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                <botton
                  className='flex justify-start space-x-1'
                  onClick={() => setTogglePricing(false)}
                >
                  <div className='grid grid-cols-3'>
                    <div className=''>
                      <FaPaperPlane className='inline w-14 h-14 text-blue-900' />
                    </div>

                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold'>CLOUD</p>
                      <p className=''>We host Strapi for you.</p>
                    </div>
                  </div>
                </botton>
              </div>
            </div>
          </div>
        </div>

        {togglePricing && (
          <div className='mt-10 pb-2 pt-10 sm:mt-12 sm:pb-16 lg:mt-10 lg:pb-14'>
            <div className='relative'>
              {/* <div className='absolute inset-0 h-3/4 bg-gray-300 z-100'></div> */}
              <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0'>
                <div className='max-w-md mx-auto space-y-10 lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
                  <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible '>
                    <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                      <div>
                        <p className='text-base leading-6 text-center font-semibold uppercase mb-4 tracking-tight text-green-500 font-sans align-baseline'>
                          COMMUNITY
                        </p>
                      </div>
                      <div className='box-border px-5 py-5 h-30 m-0 my-2 flex flex-col justify-end bg-white border-1 border-indigo-50 rounded-lg z-1'>
                        <p className='text-center text-3xl font-bold text-blue-900 mt-10 h-20'>
                          Free, forever
                        </p>
                        <p className='text-center text-sm font-semibold '>
                          SELF-HOSTED
                        </p>
                        <button className='box-border flex rounded-xl border-emerald-500 border-2 py-3 px-10 mt-10 bg-green-400 items-center opacity-100 hover:opacity-70 shadow-xl'>
                          <p className='z-50 text-l font-semibold text-white text-center'>
                            Get Started
                          </p>
                        </button>
                      </div>

                      <div className=''>
                        <div>
                          <p className='text-base leading-6 font-semibold uppercase mb-4 tracking-tight text-green-500 font-sans align-baseline'>
                            COMMUNITY
                          </p>
                        </div>
                        <ul className='space-y-2'>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature1')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature2')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature3')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature4')}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible '>
                    <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                      <div>
                        <p className='text-base leading-6 text-center font-semibold uppercase mb-4 tracking-tight text-green-500 font-sans align-baseline'>
                          ENTERPRISE
                        </p>
                      </div>
                      <div className='box-border px-5 py-5 h-30 m-0 my-2 flex flex-col justify-end bg-white border-1 border-indigo-50 rounded-lg z-1'>
                        <p className='text-center text-3xl font-bold text-blue-900 mt-10 h-20'>
                          Flexible pricing
                        </p>
                        <p className='text-center text-sm font-semibold '>
                          SELF-HOSTED
                        </p>
                        <button className='box-border flex rounded-xl border-emerald-500 border-2 py-3 px-10 mt-10 bg-green-400 items-center opacity-100 hover:opacity-70 shadow-xl'>
                          <p className='text-l font-semibold text-white text-center'>
                            Contact sales
                          </p>
                        </button>
                      </div>

                      <div className=''>
                        <div>
                          <p className='text-base leading-6 font-semibold uppercase mb-4 tracking-tight text-green-500 font-sans align-baseline'>
                            ENTERPRISE
                          </p>
                        </div>
                        <ul className='space-y-2'>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature1')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature2')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature3')}
                            </p>
                          </li>

                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='h-6 w-6 text-green-500'
                                data-todo-x-description='Heroicon name: outline/check'
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </div>
                            <p className='ml-3 text-base text-blue-900'>
                              {t('main.price.standard.feature4')}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!togglePricing && (
          <div>
            <div className='mt-10 pb-2 pt-10 sm:mt-12 sm:pb-16 lg:mt-10 lg:pb-14'>
              <div className='relative'>
                {/* <div className='absolute inset-0 h-3/4 bg-gray-300 z-100'></div> */}
                <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0'>
                  <div className='max-w-md mx-auto space-y-10 lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
                    <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible '>
                      <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                        <div>
                          <p className='text-base leading-6 text-center font-semibold uppercase mb-4 tracking-tight text-purple-600 font-sans align-baseline'>
                            PRO
                          </p>
                        </div>
                        <div className='box-border px-5 py-5 h-30 m-0 my-2 flex flex-col justify-end bg-white border-1 border-indigo-50 rounded-lg z-1'>
                          <p className='text-center text-3xl font-bold text-blue-900 mt-10 h-20'>
                            $99
                          </p>
                          <p className='text-center text-sm font-semibold '>
                            per month per project
                          </p>
                          <p className='text-center text-bold text-purple-600 text-sm'>
                            CLOUD
                          </p>
                          <button className='box-border flex rounded-xl border-purple-600 border-2 py-3 px-10 mt-10 bg-purple-600 items-center opacity-100 hover:opacity-70 shadow-xl'>
                            <p className='text-l font-semibold text-white text-center'>
                              Create a Pro project
                            </p>
                          </button>
                          <p className='mt-3 text-center text-sm font-normal text-blue-800'>
                            Free Trial possible (14 days)
                          </p>
                        </div>

                        <div className=''>
                          <div>
                            <p className='text-base leading-6 font-semibold uppercase mb-4 tracking-tight text-purple-600 font-sans align-baseline'>
                              PRO
                            </p>
                          </div>
                          <ul className='space-y-2'>
                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-purple-600'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature1')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-purple-600'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature2')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-purple-600'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature3')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-purple-600'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature4')}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible '>
                      <div className='px-3 py-3 bg-blue-50 rounded-lg sm:p-10 sm:pb-10'>
                        <div>
                          <p className='text-base leading-6 text-center font-semibold uppercase mb-4 tracking-tight text-blue-800 font-sans align-baseline'>
                            TEAM
                          </p>
                        </div>
                        <div className='box-border px-5 py-5 h-30 m-0 my-2 flex flex-col justify-end bg-white border-1 border-indigo-50 rounded-lg z-1'>
                          <p className='text-center text-3xl font-bold text-blue-900 mt-10 h-20'>
                            $499
                          </p>
                          <p className='text-center text-sm font-semibold '>
                            per month per project
                          </p>
                          <p className='text-center text-bold text-blue-800 text-sm'>
                            CLOUD
                          </p>
                          <button className='box-border flex rounded-xl border-blue-800 border-2 py-3 px-10 mt-10 bg-blue-800 items-center opacity-100 hover:opacity-70 shadow-xl'>
                            <p className='text-l font-semibold text-white text-center'>
                              Create a Team project
                            </p>
                          </button>
                          <p className='mt-3 text-center text-sm font-normal text-blue-800'>
                            Free Trial possible (14 days)
                          </p>
                        </div>

                        <div className=''>
                          <div>
                            <p className='text-base leading-6 font-semibold uppercase mb-4 tracking-tight text-blue-800 font-sans align-baseline'>
                              TEAM
                            </p>
                          </div>
                          <ul className='space-y-2'>
                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-blue-800'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature1')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-blue-800'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature2')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-blue-800'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature3')}
                              </p>
                            </li>

                            <li className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <svg
                                  className='h-6 w-6 text-blue-800'
                                  data-todo-x-description='Heroicon name: outline/check'
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
                                    d='M5 13l4 4L19 7'
                                  ></path>
                                </svg>
                              </div>
                              <p className='ml-3 text-base text-blue-900'>
                                {t('main.price.standard.feature4')}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Price
