import icons from './icons';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import Image from '@/components/ui/image';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';

const Technology: NextPageWithLayout = () => {
  const { t } = useTranslation('translation');

  return (
    <div className="container px-5 lg:px-0">
      <div className="relative mb-0 mt-4 flex h-20 flex-col items-center overflow-hidden md:flex-row">
        <span className="technology-used mr-0 flex-shrink-0 text-center text-xl md:mr-8 md:text-left">
          {t('main.technology.title')}
        </span>
        <div className="technology-slider flex w-full flex-auto flex-nowrap items-center justify-between overflow-hidden md:w-auto">
          <div className="animate animate left-0 flex h-20 flex-shrink-0 items-center gap-20">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-[20rem] items-start justify-center"
                >
                  {icon}
                </div>
              );
            })}
          </div>
          <div className="animate animate left-0 ml-6 flex h-20 flex-shrink-0 items-center gap-20">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-[20rem] items-start justify-center"
                >
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Technology.getLayout = function getLayout(
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

export default Technology;
