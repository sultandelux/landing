import udemy from '@/assets/images/logos/udemy.png';
import glovo from '@/assets/images/logos/glovo.png';
import koleso from '@/assets/images/logos/kolesa.png';
import indriver from '@/assets/images/logos/indriver.png';
import olx from '@/assets/images/logos/olx.png';
import skillbox from '@/assets/images/logos/skillbox.png';
import HighLight from '@/components/highlight';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import Image from '@/components/ui/image';

const Clones: NextPageWithLayout = () => {
  const { t } = useTranslation('translation');

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1335px)' })
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)',
  // })

  return (
    <>
      <div className="bg-white-700 px-0 lg:px-10 ">
        <div className="mx-autosm:py-20 py-10  px-4 sm:px-6 lg:px-8 lg:py-5">
          <h2 className="text-2xl font-bold text-gray-500 lg:text-3xl xl:text-4xl">
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
          <div className="mt-8 flow-root lg:mt-10">
            <div className="grid grid-cols-2 lg:-ml-7 lg:flex lg:flex-row lg:justify-between">
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-9 lg:h-10"
                  src={udemy}
                  alt="онлайн курс платформа алматы"
                />
              </div>
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-6 lg:h-8"
                  src={indriver}
                  alt="такси приложение алматы"
                />
              </div>
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-6 lg:h-8"
                  src={koleso}
                  alt="нетфликс казахстан"
                />
              </div>
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-4 lg:h-7"
                  src={skillbox}
                  alt="алиекспрес алматы"
                />
              </div>
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-7 lg:h-9"
                  src={olx}
                  alt="олх копия алматы мобильное приложение"
                />
              </div>
              <div className="mt-4 flex flex-shrink-0 justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-6 lg:h-9"
                  src={glovo}
                  alt="приложение доставки алматы"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Clones.getLayout = function getLayout(page) {
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

export default Clones;
