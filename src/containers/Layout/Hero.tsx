import Prototype from '@/assets/images/prototype.gif'
import { useTranslation } from 'next-i18next'
import Highlighter from 'react-highlight-words'
import Typewriter from 'typewriter-effect'
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useEffect } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import Logo from '@/assets/images/logos/logo.png'
import Call from '@/assets/images/call.gif'

const Hero: NextPageWithLayout = () => {
  const { t } = useTranslation('translation')
  useEffect(() => {
  }, [])

  return (
    <div className='p-1 pt-4 flex flex-col justify-center lg:p-10 xl:p-10 sm:p-4'>
      <div className='relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-2xl absolute inset-0 -mr-3.5 bg-gradient-to-r from-gray-500 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:rotate-0 sm:rounded-3xl'></div>
        <div className='rounded-2xl relative bg-white shadow-2xl border-t-2 border-gray-300 sm:rounded-3xl'>
          <div className='flex items-center justify-start pt-6 pl-6'>
            <span className='w-3 h-3 bg-red-400 rounded-full mr-2'></span>
            <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
            <span className='w-3 h-3 bg-green-400 rounded-full mr-2'></span>
          </div>
          <div className='px-2 pt-3 sm:p-10 lg:p-10'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <a href='/' className='flex items-center justify-center'>
                  <Image
                    className='h-9 w-9'
                    src={Logo}
                    alt='Xponend лого, разработка сайтов, приложений'
                  />
                  <span className='text-xl font-bold tracking-tight'>
                    {/* Xponend */}
                  </span>
                </a>
              </div>
              <a className='md:hidden' href='tel:+77471240727'>
                <Image className='w-6 h-6' src={Call} alt={'Call, мобильное приложение создать узнать стоимость Алматы'} />
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
                      <Image
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
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['translation'])),
    },
    revalidate: 60, // In seconds
  };
};

export default Hero
