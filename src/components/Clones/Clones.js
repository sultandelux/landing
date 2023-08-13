import udemy from 'Assets/images/logos/udemy.png'
import glovo from 'Assets/images/logos/glovo.png'
import koleso from 'Assets/images/logos/kolesa.png'
import indriver from 'Assets/images/logos/indriver.png'
import olx from 'Assets/images/logos/olx.png'
import skillbox from 'Assets/images/logos/skillbox.png'
import { useTranslation } from 'react-i18next'
import Highlighter from 'react-highlight-words'
import './index.scss'
import { UnderlineEmphasis } from 'underline-emphasis'
import HighLight from 'Components/highlight'
// import { useMediaQuery } from 'react-responsive'

const Clones = () => {
  const { t } = useTranslation()

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1335px)' })
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)',
  // })

  return (
    <>
      <div className='px-0 bg-white-700 lg:px-10 '>
        <div className='py-10 px-4  mx-autosm:py-20 sm:px-6 lg:px-8 lg:py-5'>
          <h2 className='text-2xl font-bold lg:text-3xl xl:text-4xl text-gray-500'>
            {/* <Highlighter
              highlightTag='span'
              searchWords={['қосымша клонын', 'clone any app', 'клонировать']}
              autoEscape={true}
              textToHighlight={t('main.clone')}
            /> */}
            <HighLight text={t('main.clone')} />
            {/* {isTabletOrMobile && (
              <Highlighter
                searchWords={['қосымша клонын', 'clone any app', 'клонировать']}
                autoEscape={true}
                textToHighlight={t('main.clone')}
              />
            )} */}
            {/* We are ready to{' '}
            <span className='text-gray-800'> clone any app </span> you want: */}
          </h2>
          <div className='flow-root mt-8 lg:mt-10'>
            <div className='grid grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:-ml-7'>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-9 lg:h-10'
                  src={udemy}
                  alt='онлайн курс платформа алматы'
                />
              </div>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-6 lg:h-8'
                  src={indriver}
                  alt='такси приложение алматы'
                />
              </div>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-6 lg:h-8'
                  src={koleso}
                  alt='нетфликс казахстан'
                />
              </div>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-4 lg:h-7'
                  src={skillbox}
                  alt='алиекспрес алматы'
                />
              </div>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-7 lg:h-9'
                  src={olx}
                  alt='олх копия алматы мобильное приложение'
                />
              </div>
              <div className='mt-4 flex justify-center flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <img
                  className='h-6 lg:h-9'
                  src={glovo}
                  alt='приложение доставки алматы'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clones
