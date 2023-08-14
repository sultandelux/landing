import CountUp from 'react-countup';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useRef,
} from 'react';
import { useEffect, useState } from 'react';

const CountStats = () => {
  const { t } = useTranslation('translation');
  const countUpRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="container my-2">
      <div className="flex items-center justify-center text-6xl">
        <CountUp
          end={30}
          useEasing={true}
          duration={3}
          redraw={true}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        >
          {({ countUpRef: localCountUpRef, start }) => (
            <p className="count-up" ref={countUpRef}>
              +
            </p>
          )}
        </CountUp>
        <p className="count-up">+</p>
      </div>
      <div className="mt-2 flex items-center justify-center">
        {/* <p className='text-5xl'>{t('main.count_stats.title')}</p> */}
      </div>
    </div>
  );
};

CountStats.getLayout = function getLayout(
  page:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) {
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

export default CountStats;
