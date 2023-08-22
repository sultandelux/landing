import { useTranslation } from 'react-i18next'
import Highlighter from 'react-highlight-words'
// import MaxtrixEffect from 'Components/MatrixEffect'
// import { MatrixRainingLetters } from 'react-mdr'
import red from '@/assets/images/packages/red.png'
import blue from '@/assets/images/packages/blue.png'
import pack from '@/assets/images/packages/pack.png'
import Zipper from '@/components/Zipper'

const Price = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <div className='my-5 relative bg-gray-900 rounded-lg z-1'>
        <Zipper />
        <div className='pt-16 sm:pt-40 lg:pt-15'>
          <div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center max-w-3xl mx-auto space-y-2 lg:max-w-none '>
              {/* <h2 className='text-lg leading-6 font-semibold text-gray-900 uppercase tracking-wider'>
                Pricing
              </h2> */}
              <div className='flex items-center rounded p-2 bg-black'>
                {/* <p className='text-xl font-bold text-white sm:text-2xl lg:text2xl'>
                  {t('main.price.title')}
                </p> */}
              </div>
              {/* <img className='neon-pill' src={pack} /> */}
            </div>
          </div>
        </div>
        {/* <div className='flex w-full absolute z-99 inset-x-0 top-0  justify-center inset-0 h-3/4'>
          <MatrixRainingLetters custom_class='flex w-full round-lg z-99' />
        </div> */}
        <div className='mt-3 pb-2 sm:mt-12 sm:pb-16 lg:mt-10 lg:pb-14'>
          <div className='relative'>
            {/* <div className='absolute inset-0 h-3/4 bg-gray-300 z-100'></div> */}
            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0'>
              <div className='max-w-md mx-auto space-y-10 lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
                <div className='flex relative flex-col rounded rounded-lg shadow-lg overflow-visible '>


                  <img src={blue} className='absolute blue-pill overflow-visible z-10' />

                  <div className='px-3 py-3 bg-white rounded-t-lg sm:p-10 sm:pb-3'>
                    <div>
                      <h3
                        className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase text-gray-900'
                        id='tier-standard'
                      >
                        {t('main.price.standard.name')}
                      </h3>
                    </div>
                    <div className='mt-4 flex text-black items-baseline text-2xl font-bold'>
                      390k ₸
                      <span className='ml-1 text-2xl font-medium text-gray-500'>
                        / {t('main.price.standard.initial')}
                      </span>
                    </div>
                    <p className='mt-2 text-base text-gray-500'>
                      {t('main.price.standard.description')}
                    </p>
                  </div>
                  <div className='flex-1 flex flex-col justify-between bg-white px-2 pt-2 pb-8 text-lg space-y-2 sm:p-10 sm:pt-2'>
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
                        <p className='ml-3 text-base text-gray-700'>
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
                        <p className='ml-3 text-base text-gray-700'>
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
                        <p className='ml-3 text-base text-gray-700'>
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
                        <p className='ml-3 text-base text-gray-700'>
                          {t('main.price.standard.feature4')}
                        </p>
                      </li>
                    </ul>
                    <div className='rounded-md shadow'>
                      <a
                        href='https://forms.gle/MkVq3mxuX4D3w2vR6'
                        className='flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-md text-black bg-white border-gray-800'
                        aria-describedby='tier-standard'
                      >
                        {t('main.price.standard.call')}
                        <span>
                          <svg
                            className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
                            data-todo-x-description='Heroicon name: solid/external-link'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex relative flex-col bg-indigo-100 rounded-t-lg shadow-lg'>
                  <img
                    src={red}
                    className='absolute red-pill lg:-top-0 lg:right-0 sm:top-0 sm:-right-10  sm:mr-0 overflow-visible z-10'
                  />

                  <div className='px-6 py-8 bg-indigo-100 rounded-t-lg sm:p-10 sm:pb-3'>
                    <div className=''>
                      <h3
                        className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-900'
                        id='tier-standard'
                      >
                        {t('main.price.enterprise.name')}
                      </h3>
                    </div>
                    <div className='mt-4 flex items-baseline text-2xl font-bold'>
                      1.890k ₸
                      <span className='ml-1 text-2xl font-medium text-gray-500'>
                        / {t('main.price.enterprise.initial')}
                      </span>
                    </div>
                    <p className='mt-2 text-lg text-gray-500'>
                      {t('main.price.enterprise.description')}

                      {/* Platform, shopping etc. for enterprises.{' '}
                      <span className='font-bold text-lg'>
                        Admin + Web + Android & iOS{' '}
                      </span>{' '}
                      apps. */}
                    </p>
                  </div>
                  <div className='flex-1 flex bg-indigo-100  flex-col justify-between px-2 pt-2 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-2 opacity-100'>
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
                        <p className='ml-3 text-base text-gray-700'>
                          <Highlighter
                            highlightClassName='font-bold text-lg'
                            searchWords={['UI, UX ']}
                            autoEscape={true}
                            textToHighlight={t(
                              'main.price.enterprise.feature1'
                            )}
                          />

                          {/* Logo,{' '}
                          <span className='font-bold text-lg'>UI, UX</span>{' '}
                          design */}
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
                        <p className='ml-3 text-base text-gray-700'>
                          <Highlighter
                            highlightClassName='font-bold text-lg'
                            searchWords={['web-mobile']}
                            autoEscape={true}
                            textToHighlight={t(
                              'main.price.enterprise.feature2'
                            )}
                          />
                          {/* <span className='font-bold text-lg'>
                            {' '}
                            Web-mobile apps
                          </span>{' '}
                          with responsive design */}
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
                        <p className='ml-3 text-base text-gray-700'>
                          <Highlighter
                            highlightClassName='font-bold text-lg'
                            searchWords={['Google Play, AppStore']}
                            autoEscape={true}
                            textToHighlight={t(
                              'main.price.enterprise.feature3'
                            )}
                          />
                          {/* Testing, bug fixes.{' '}
                          <span className='font-bold text-lg'>
                            Google Play, AppStore{' '}
                          </span>{' '}
                          publishings */}
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
                        <p className='ml-3 text-base text-gray-700'>
                          {t('main.price.enterprise.feature4')}
                        </p>
                      </li>
                    </ul>
                    <div className='rounded-md shadow'>
                      <a
                        href='https://forms.gle/HnqwHsbuMXAk2HCc9'
                        className='flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-md text-white bg-gray-800'
                        aria-describedby='tier-standard'
                      >
                        {t('main.price.enterprise.call')}{' '}
                        <span>
                          <svg
                            className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
                            data-todo-x-description='Heroicon name: solid/external-link'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Price
