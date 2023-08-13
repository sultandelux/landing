import Stats from 'Components/Stats'
import jeted from 'Assets/images/apps/jeted.png'
import factcheck from 'Assets/images/apps/factcheck.png'
import turan from 'Assets/images/apps/turan.png'
import { useTranslation } from 'react-i18next'
import Alert from 'Components/Alert'
import Technology from 'Containers/Technology'
import { MovingBlock } from 'Containers/MovingBlock'
import { MovingBlockGsap } from 'Containers/MovingBlock'
import InfiniteScroll from 'Containers/InfiniteScroll'
import CountStats from 'Containers/CountUp'


const Recents = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <div className=''>
        <div className='pt-5 relative bg-gray-50 overflow-hidden sm:pt-2 lg:pt-4'>
          <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
            <div>
              <CountStats />
              <h2 className='mt-0 text-base font-semibold tracking-wider text-gray-600 uppercase'>
                [ {t('main.recents.mini')} ]
              </h2>
              {/* <p className='mt-2 text-3xl font-bold text-gray-800 tracking-tight sm:text-4xl'> */}
              <InfiniteScroll />
              <a
                href='https://jeted.zhasapp.com'
                className='text-xl lg:text-2xl inline-flex font-bold  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
              >
                <h2>{t('main.recents.jeted.title')} </h2>
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
              <p className=' mt-3 max-w-prose mx-auto text-xl text-gray-800'>
                {t('main.recents.jeted.description')}
              </p>
            </div>
            <Stats />
            <div className='flex items-stretch  justify-self-center justify-center -mx-100 mt-8 -mb-0 lg:-mb-0 lg:-mx-0 '>
              <img
                height={30}

                className='rounded-lg 	self-center justify-self-center'
                src={jeted}
                alt='разработка онлайн платформа jeted udemy алматы'
              />
            </div>
          </div>
        </div>
        <Alert />
        <Technology />

        {/* <MovingBlock /> */}
        {/* <MovingBlockGsap /> */}

        <div className='relative bg-white pt-10 pb-12  overflow-hidden'>
          <div className='relative'>
            <div className='  lg:px-8 lg:py-10 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
                <div>
                  <a
                    href='https://factcheck.kz/'
                    className='text-xl lg:text-2xl inline-flex font-bold  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
                  >
                    {t('main.recents.factchek.title')}
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
                  <p className='mt-2 text-xl max-w-prose mx-aut text-gray-800'>
                    {t('main.recents.factchek.description')}
                  </p>
                </div>
              </div>
              <div className='mt-1 sm:mt-16 lg:mt-0'>
                <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5   '
                    src={factcheck}
                    alt='factchek.kz новостной портал алматы'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
                <div>
                  <a
                    // href='https://factcheck.kz/'
                    className='mt-5 text-xl lg:text-2xl inline-flex font-bold  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
                  >
                    {t('main.recents.turan.title')}

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
                  <p className='mt-2 text-xl max-w-prose mx-aut text-gray-800'>
                    {t('main.recents.turan.description')}
                  </p>
                </div>
              </div>
              <div className='mt-7 sm:mt-16 lg:mt-0 lg:col-start-1'>
                <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                    src={turan}
                    alt='xponend мобильді қосымша алматы цена, низкая стоимость разработки'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-0 space-y-0'>
          <div className='w-full'>
            <div className='flex-1 h-full w-full lg:w-96 mx-auto'>
              <div className='flex w-full bg-white shadow rounded-lg py-4 px-10'>
                <a
                  href='/apps'
                  className='m-auto inset-0 text-xl font-semibold leading-7 text-center text-gray-800'
                >
                  {t('main.recents.more')}
                </a>
                <div className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 mt-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recents
