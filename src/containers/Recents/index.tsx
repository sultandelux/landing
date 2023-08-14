import Stats from '@/components/Stats';
import jeted from '@/assets/images/apps/jeted.png';
import factcheck from '@/assets/images/apps/factcheck.png';
import turan from '@/assets/images/apps/turan.png';
import Alert from '@/components/Alert';
import Technology from '@/containers/Technology';
import InfiniteScroll from '@/containers/InfiniteScroll';
import CountStats from '@/containers/CountUp';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import Image from '@/components/ui/image';

const Recents: NextPageWithLayout = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <div className="">
        <div className="relative overflow-hidden bg-gray-50 pt-5 sm:pt-2 lg:pt-4">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <CountStats />
              <h2 className="mt-0 text-base font-semibold uppercase tracking-wider text-gray-600">
                [ {t('main.recents.mini')} ]
              </h2>
              {/* <p className='mt-2 text-3xl font-bold text-gray-800 tracking-tight sm:text-4xl'> */}
              <InfiniteScroll />
              <a
                href="https://jeted.zhasapp.com"
                className="inline-flex rounded-md border border-transparent  px-0 py-0 text-xl font-bold tracking-tight  text-gray-900 hover:bg-gray-50  lg:text-2xl"
              >
                <h2>{t('main.recents.jeted.title')} </h2>
                <span>
                  <svg
                    className="-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400"
                    data-todo-x-description="Heroicon name: solid/external-link"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </span>
              </a>
              <p className=" mx-auto mt-3 max-w-prose text-xl text-gray-800">
                {t('main.recents.jeted.description')}
              </p>
            </div>
            <Stats />
            <div className="-mx-100 mt-8  -mb-0 flex items-stretch justify-center justify-self-center lg:-mx-0 lg:-mb-0 ">
              <Image
                height={30}
                className="self-center 	justify-self-center rounded-lg"
                src={jeted}
                alt="разработка онлайн платформа jeted udemy алматы"
              />
            </div>
          </div>
        </div>
        <Alert />
        <Technology />

        {/* <MovingBlock /> */}
        {/* <MovingBlockGsap /> */}

        <div className="relative overflow-hidden bg-white pt-10  pb-12">
          <div className="relative">
            <div className="  lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <a
                    href="https://factcheck.kz/"
                    className="inline-flex rounded-md border border-transparent  px-0 py-0 text-xl font-bold tracking-tight  text-gray-900 hover:bg-gray-50  lg:text-2xl"
                  >
                    {t('main.recents.factchek.title')}
                    <span>
                      <svg
                        className="-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/external-link"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                    </span>
                  </a>
                  <p className="mx-aut mt-2 max-w-prose text-xl text-gray-800">
                    {t('main.recents.factchek.description')}
                  </p>
                </div>
              </div>
              <div className="mt-1 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5   "
                    src={factcheck}
                    alt="factchek.kz новостной портал алматы"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <a
                    // href='https://factcheck.kz/'
                    className="mt-5 inline-flex rounded-md border border-transparent  px-0 py-0 text-xl font-bold tracking-tight  text-gray-900 hover:bg-gray-50  lg:text-2xl"
                  >
                    {t('main.recents.turan.title')}

                    <span>
                      <svg
                        className="-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/external-link"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                    </span>
                  </a>
                  <p className="mx-aut mt-2 max-w-prose text-xl text-gray-800">
                    {t('main.recents.turan.description')}
                  </p>
                </div>
              </div>
              <div className="mt-7 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={turan}
                    alt="xponend мобильді қосымша алматы цена, низкая стоимость разработки"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 space-y-0">
          <div className="w-full">
            <div className="mx-auto h-full w-full flex-1 lg:w-96">
              <div className="flex w-full rounded-lg bg-white py-4 px-10 shadow">
                <a
                  href="/apps"
                  className="inset-0 m-auto text-center text-xl font-semibold leading-7 text-gray-800"
                >
                  {t('main.recents.more')}
                </a>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Recents.getLayout = function getLayout(page) {
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

export default Recents;
