import { useEffect, useState } from 'react';
import image1 from '@/assets/images/tabs/shop.png';
import image2 from '@/assets/images/tabs/adminshop.png';
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

const Tabs: NextPageWithLayout = () => {
  const data = [
    {
      id: 1,
      title: 'main.tabs.title1',
      desc: 'main.tabs.desc1',
      url: 'shop',
      img: image1,
    },
    {
      id: 2,
      title: 'main.tabs.title2',
      desc: 'main.tabs.desc2',
      url: 'admin',
      img: image2,
    },
  ];

  const { t } = useTranslation('translation');

  const [active, setActive] = useState(data[0]);

  useEffect(() => {
    setActive(data[0]);
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-container">
        {data.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setActive(item)}
            className={`content-btn ${active == item ? '--active' : ''}`}
          >
            <h3 className="fs-sm mb-4 font-bold">
              {t(item.title)}
              {i === data.length - 1 && <span className="next" />}
            </h3>
            <p className="text-gray-600">{t(item.desc)}</p>
          </div>
        ))}
      </div>
      <aside className="demo-aside">
        <div className="demo-head">
          <div className="demo-head__btns">
            <span className="red" />
            <span className="orange" />
            <span className="green" />
          </div>
          <div className="demo-head__bar">
            zhasapp.com/
            <span>{active.url}</span>
          </div>
        </div>
        <div className="demo demo__dt">
          <Image src={active.img} alt={active.title} />
        </div>
      </aside>
    </div>
  );
};

Tabs.getLayout = function getLayout(page) {
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

export default Tabs;
