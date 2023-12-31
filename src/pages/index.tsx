import type {
  CategoryQueryOptions,
  NextPageWithLayout,
  ProductQueryOptions,
  SettingsQueryOptions,
} from '@/types';
import type { GetStaticProps } from 'next';
import Layout from '@/layouts/_layout';
import { useProducts } from '@/data/product';
import Grid from '@/components/product/grid';
import { useRouter } from 'next/router';
import Seo from '@/layouts/_seo';
import routes from '@/config/routes';
import client from '@/data/client';
import { dehydrate, QueryClient } from 'react-query';
import { API_ENDPOINTS } from '@/data/client/endpoints';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Clones from '@/components/Clones';
import Features from '@/containers/Features';
import Recents from '@/containers/Recents';
import Team from '@/containers/Team';
import Treadmill from '@/components/Treadmill';
import Call from '@/components/Call';
import Journey from '@/containers/Journey';
import Slideout from '@/containers/Slideout';
import Differentation from '@/containers/Differentation';
import Bubbles from '@/containers/Bubbles';
import Tabs from '@/containers/Tabs';
import Price from '@/containers/Price';
import Hero from '@/containers/Layout/Hero';
import Splitter from '@/containers/Splitter';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchQuery(
        [API_ENDPOINTS.SETTINGS, { language: locale }],
        ({ queryKey }) =>
          client.settings.all(queryKey[1] as SettingsQueryOptions)
      ),
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRODUCTS, { language: locale }],
        ({ queryKey }) =>
          client.products.all(queryKey[1] as ProductQueryOptions)
      ),
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.CATEGORIES, { limit: 100, language: locale }],
        ({ queryKey }) =>
          client.categories.all(queryKey[1] as CategoryQueryOptions)
      ),
    ]);
    return {
      props: {
        ...(await serverSideTranslations(locale!, ['common', 'translation'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

function Products() {
  const { query } = useRouter();
  const { products, loadMore, hasNextPage, isLoadingMore, isLoading } =
    useProducts({
      ...(query.category && { categories: query.category }),
      ...(query.price && { price: query.price }),
    });
  return (
    <Grid
      products={products}
      limit={30}
      onLoadMore={loadMore}
      hasNextPage={hasNextPage}
      isLoadingMore={isLoadingMore}
      isLoading={isLoading}
    />
  );
}

// TODO: SEO text gulo translation ready hobe kina? r seo text gulo static thakbe or dynamic?
const Home: NextPageWithLayout = () => {

  const { setTheme } = useTheme()
  
  useEffect(() => {
    setTheme('light')
  }, [])
  return (
    <>
      <Seo
        title="UI Design Resources, UI Kits, Wireframes, Icons and More"
        description="Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        url={routes.home}
      />
      <Hero />
      <Tabs />
      <Clones />
      <Recents />
      <Differentation />
      <Treadmill />
      <Call />
      <Features />
      <Bubbles />
      <Team />
      <Journey />
      <Slideout />
      <div className=" px-15 xl:px-50 ml- relative mx-auto mt-6 mb-4 flex max-w-4xl max-w-lg justify-center overflow-hidden rounded-lg rounded-md rounded-sm">
        {/* <Splitter /> */}
      </div>
      {/* <PriceNew /> */}
      {/* <MultiForm /> */}
      <Price />
      {/* <Map /> */}
      {/* <Device /> */}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
