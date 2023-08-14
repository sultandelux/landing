import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import icons from './icons';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout';
import Image from '@/components/ui/image';
import image1 from '@/assets/images/tabs/1.png';
import image2 from '@/assets/images/tabs/2.png';
import image3 from '@/assets/images/tabs/3.png';
import image4 from '@/assets/images/tabs/4.png';
import image5 from '@/assets/images/tabs/5.png';
import image6 from '@/assets/images/tabs/6.png';

type ImageKeys =
  | 'image1'
  | 'image2'
  | 'image3'
  | 'image4'
  | 'image5'
  | 'image6';

const images = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
  image5: image5,
  image6: image6,
};

const leftData = [
  {
    id: 2,
    title: 'main.differentation.title1',
    desc: 'main.differentation.desc1',
    icon: icons[0],
    color: '#F55767',
  },
  {
    id: 4,
    title: 'main.differentation.title2',
    desc: 'main.differentation.desc2',
    icon: icons[1],
    color: '#40975F',
  },
  {
    id: 5,
    title: 'main.differentation.title3',
    desc: 'main.differentation.desc3',
    icon: icons[2],
    color: '#5856D6',
  },
];

const rightData = [
  {
    id: 6,
    title: 'main.differentation.title4',
    desc: 'main.differentation.desc4',
    icon: icons[3],
    color: '#D6AB00',
  },
  {
    id: 1,
    title: 'main.differentation.title5',
    desc: 'main.differentation.desc5',
    icon: icons[4],
    color: '#E97325',
  },
  {
    id: 3,
    title: 'main.differentation.title6',
    desc: 'main.differentation.desc6',
    icon: icons[5],
    color: '#3DABDD',
  },
];

const Differentation: NextPageWithLayout = () => {
  const { t } = useTranslation('translation');

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  const [active, setActive] = useState('active1');
  const [image, setImage] = useState(image1);
  // const [imageVisible, setImageVisible] = useState(false)

  useEffect(() => {
    setImage(image1);
  }, []);

  const handleClick = (e: {
    currentTarget: { getAttribute: (arg0: string) => any };
  }) => {
    const id = e.currentTarget.getAttribute('data-id');
    const active = 'active' + id;
    const imageKey = `image${id}` as ImageKeys;
    setActive(active);
    setImage(images[imageKey]);
  };

  const renderFeatures = (data: any[]) => {
    return data.map((item) => (
      <div
        key={item.id}
        style={active === `active${item.id}` ? { borderColor: item.color } : {}}
        className="z-1 features flex w-72 items-center rounded-full border-2 border-solid p-5 md:w-80"
        data-id={item.id}
        onClick={handleClick}
      >
        <div className="icon-diff">{item.icon}</div>
        <div className="ml-2">
          <h3 className="font-bold">{t(item.title)}</h3>
          {/* <p>{t(item.desc)}</p> */}
        </div>
      </div>
    ));
  };

  return (
    <div className="differentatition-wrapper my-0 md:px-0">
      <div className="pulse-wrapper hidden xl:block">
        <span className="pulse block" />
        <span className="pulse block" />
        <span className="pulse block" />
      </div>
      <div className="flex hidden justify-evenly sm:flex">
        <div className="left-side flex flex-col justify-center gap-12 pr-5 lg:p-0">
          {renderFeatures(leftData)}
        </div>
        <div className="center-side hidden xl:block">
          <Image className="center-image" src={image} alt="image" />
        </div>
        <div className="right-side flex flex-col justify-center gap-12 pl-5 lg:p-0">
          {renderFeatures(rightData)}
        </div>
      </div>
      {isMobile && (
        <div className="flex flex-col items-center justify-center gap-5">
          {[...leftData, ...rightData].map((item) => (
            <div
              key={item.id}
              style={
                active === `active${item.id}` ? { borderColor: item.color } : {}
              }
              className="flex w-full items-center rounded-full border-2 border-solid p-5"
              data-id={item.id}
              onClick={handleClick}
            >
              <div className="icon-diff">{item.icon}</div>
              <div className="ml-2">
                <h3 className="font-bold">{t(item.title)}</h3>
                {/* <p>{t(item.desc)}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Differentation.getLayout = function getLayout(page) {
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

export default Differentation;
