import Creation from '@/assets/images/creation.png'
import whatsappchat from '@/assets/images/whatsappchat.png'
import whatsappicon from '@/assets/images/whatsapp-logo.png'
import clickicon from '@/assets/images/click.png'
import whatsappclick from '@/assets/images/whatsappclick.png'
import { useTranslation } from 'react-i18next'
import Highlighter from 'react-highlight-words'

export default function Call() {
  const { t } = useTranslation()
  return (
    <>
      <div className='  pt-3 flex relative  items-center justify-center overflow-hidden sm:pt-4 lg:pt-2'>
        <div className='mx-auto max-w-md px-4 border-dashed border-2 border-gray-400 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
          <div>
            {/* <h2 className='text-base tracking-wider text-indigo-500 '>
              launch faster
            </h2> */}
            <p className='my-7 text-2xl font-bold text-gray-600 tracking-tight lg:font-bold lg:text-3xl'>
              <Highlighter
                highlightClassName='text-red-600 font-bold'
                searchWords={[
                  'Қосымша одан да керемет',
                  'App is better',
                  'Приложение лучше',
                ]}
                autoEscape={true}
                textToHighlight={t('main.slogan')}
              />
              {/* Website is good.{' '}
              <span className=''>App is better.</span> We
              give you both. */}
            </p>
          </div>
          <div className='mt-4'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='https://forms.gle/NAjxkUHmrob2gCne6'
                className='text-xl inline-flex bg-blue-100  items-center justify-center px-5 py-3 border border-transparent  font-bold rounded-md text-gray-900  hover:bg-gray-50'
              >
                {t('main.call')}
                <svg
                  className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                  data-todo-x-description='Heroicon name: solid/external-link'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                </svg>
              </a>
            </div>
          </div>
          <div className='inline-flex  col-auto items-center'>
            <div className='flex mt-6 max-w-lg items-center justify-center self-center justify-self-center lg:pr-5 '>
              <img
                className=''
                src={Creation}
                alt='Заказать мобильное приложение алматы казахстан'
              />
            </div>
          </div>
          {/* <div className=' flex relative  items-center justify-center overflow-hidde mt-4 col-auto items-center'>
            <div className=' flex mt-4 max-w-lg items-center justify-center self-center justify-self-center lg:pr-5 '>
              <img
                className=''
                src={whatsappchat}
                alt='Заказать мобильное приложение алматы казахстан'
              />
            </div>

            <div className='flex flex-row relative ml-5 mb-5 max-w-lg items-end justify-end self-end justify-self-end lg:pr-5'>
              <a href='https://wa.link/e9qbdp' target='_blank' rel='noreferrer'>
                <img
                  className='wppimg'
                  sizes='small'
                  // width={100}
                  src = {whatsappicon} 
                  alt='Заказать мобильное приложение алматы казахстан'
                />
              </a>
              <img 
                // className='object-cover animate animate-slide-left animation-duration-500'
                className='object-cover animate-left mobimg'
                sizes='small'
                // style={{ transform: `translateX(${translateX}px)` }}
                // width={50}
                src = {clickicon}
                alt = 'Заказать мобильное приложение алматы казахстан'
              />

            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
