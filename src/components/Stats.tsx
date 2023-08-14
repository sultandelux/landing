import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';

const Stats: NextPageWithLayout = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl py-0 px-4 sm:px-6 lg:px-8">
          <div>
            <dl className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow">
                <div className="flex-grow px-4 py-0 sm:p-6">
                  <div className="flex items-center">
                    <span className="text-4xl">🎓</span>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="truncate text-xl font-medium text-gray-500">
                        {t('main.recents.jeted.stats.line1')}
                      </dt>
                      <dd className="flex items-center text-center">
                        <div className="text-xl font-semibold text-gray-900">
                          <CountUp
                            end={598}
                            useEasing={true}
                            duration={1}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <svg
                            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Increased by</span>
                          <CountUp
                            end={122}
                            useEasing={true}
                            duration={1}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow">
                <div className="flex-grow px-4 py-0 sm:p-6">
                  <div className="flex items-center">
                    <span className=" text-4xl">👩‍🏫</span>

                    <div className="ml-5 w-0 flex-1">
                      <dt className="truncate text-xl font-medium text-gray-500">
                        {t('main.recents.jeted.stats.line2')}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-gray-900">
                          <CountUp
                            end={53.16}
                            useEasing={true}
                            duration={1}
                            decimals={2}
                            suffix={'%'}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>

                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <svg
                            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Increased by</span>
                          <CountUp
                            end={5.4}
                            useEasing={true}
                            duration={1}
                            decimals={1}
                            suffix={'%'}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow">
                <div className="flex-grow px-4 py-0 sm:p-6">
                  <div className="flex items-center">
                    <span className=" text-3xl">⬇️</span>

                    <div className="ml-5 w-0 flex-1">
                      <dt className="truncate text-xl font-medium text-gray-500">
                        {t('main.recents.jeted.stats.line3')}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-gray-900">
                          <CountUp
                            end={24.57}
                            useEasing={true}
                            duration={1}
                            decimals={1}
                            suffix={'%'}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>

                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <svg
                            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Increased by</span>
                          <CountUp
                            end={11.9}
                            useEasing={true}
                            duration={1}
                            decimals={1}
                            suffix={'%'}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef, start }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

Stats.getLayout = function getLayout(page) {
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

export default Stats;
