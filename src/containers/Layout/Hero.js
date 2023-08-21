import Prototype from '@/assets/images/prototype.gif'
import { useTranslation } from 'react-i18next'
import Highlighter from 'react-highlight-words'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <main className='relative mt-6 px-5 mx-auto max-w-7xl xl:px-20'>
      <div className='lg:grid lg:grid-cols-12  lg:gap'>
        <div className='sm:text-center md:max-w-2xl md:mx-auto lg:pl-10 lg:-pr-5 lg:ml-0 xl:pl-2 lg:col-span-6 lg:text-left'>
          <div className='pb-3 lg:pb-2'>
            <span className='text-base block font-semibold  tracking-wide text-gray-500 lg:text-xl xl:text-xl'>
              {t('main.hero.mini')}
            </span>
            <h1 className='text-2xl block text-gray-500  mt-1  lg:text-4xl tracking-tight font-semibold  xl:text-4xl'>
              <Highlighter
                highlightClassName='font-bold'
                searchWords={['App', 'Studio', 'Exponentiate', 'қосымшалармен']}
                autoEscape={true}
                textToHighlight={t('main.hero.head')}
              />
            </h1>
          </div>
          <p className='text-sm mt-1.5 text-gray-700 font-semibold sm:mt-5 lg:text-xl xl:text-2xl'>
            ✔️ {t('main.hero.line1')}
          </p>
          <p className='text-sm mt-1.5 text-gray-700 font-semibold sm:mt-5 lg:text-xl xl:text-2xl'>
            ✔️ {t('main.hero.line2')}
          </p>
          <p className='text-sm mt-1.5 text-gray-700 font-semibold sm:mt-5 lg:text-xl xl:text-2xl'>
            ✔️ {t('main.hero.line3')}
          </p>
          <p className='text-sm mt-1.5 text-gray-700 font-semibold sm:mt-5 lg:text-xl xl:text-2xl'>
            ✔️ {t('main.hero.line4')}
          </p>
          {/* <p className='text-xl mt-1.5 text-gray-700 font-semibold sm:mt-5 lg:text-xl xl:text-2xl'>
            ✔️ {t('main.hero.line5')}
          </p> */}
          <a
            href='https://forms.gle/NAjxkUHmrob2gCne6'
            className='border-blue-400'
          >
            <button
              className='mt-5 px-2.5 py-1 lg:px-6 lg:py-3 rounded-xl font-medium 
                 text-black outline-black focus:outline hover:shadow-md border-blue-900
                 hover:from-true-gray-900 transition duration-200 ease-in-out'
            >
              {t('main.hero.call')}
            </button>
          </a>
        </div>

        <div className='mt-3 relative sm:max-w-lg sm:mx-auto lg:mt-0  lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
          <div className='relative mx-auto w-full rounded-lg lg:max-w-md'>
            <button
              type='button'
              className='relative block w-full bg-white rounded-lg overflow-hidden  '
            >
              <span className='sr-only'>web and mobile app animation</span>
              <img
                className='w-full'
                src={Prototype}
                alt='веб мобильное приложение алматы'
              />
            </button>
          </div>
        </div>
      </div>
      <div className='text-center mt-3 pb-7 sm:pb-0 text-emerald-700'>
        <Typewriter
          options={{
            wrapperClassName: 'text-xl text-emerald-700',
            cursorClassName: 'text-xl text-emerald-700',
            strings: t('main.hero.rabbit'),
            autoStart: true,
            loop: false,
          }}
        />
      </div>
    </main>
  )
}

export default Hero
