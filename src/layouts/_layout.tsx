import { useState } from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Header from '@/layouts/_header';
import { Sidebar } from '@/layouts/_layout-sidebar';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import Banner from '@/components/Banner'
import Footer from '@/containers/Layout/Footer'

const BottomNavigation = dynamic(() => import('@/layouts/_bottom-navigation'), {
  ssr: false,
});

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const breakpoint = useBreakpoint();
  const isMounted = useIsMounted();
  let [collapse, setCollapse] = useState(false);
  function toggleSidebar() {
    setCollapse((prev) => !prev);
  }
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      className=" bg-light-300 dark:bg-dark-100"
    >
      <div className='pattern-boxes pattern-gray-100 pattern-bg-white pattern-size-7"
   relative max-w-7xl mx-auto' style={{ opacity: 20 }}>
        {/* <div className='relative pt-90px px-3 pb-50px flex-auto md:px-35px'> */}
        <Banner />
        <div className="flex flex-1">
          {/* <Sidebar isCollapse={collapse} /> */}
          <main
            className={cn(
              'flex w-full flex-col',
              collapse
                ? 'ltr:sm:pl-60 rtl:sm:pr-60 ltr:xl:pl-[75px] rtl:xl:pr-[75px]'
                : 'ltr:sm:pl-[75px] rtl:sm:pr-[75px] ltr:xl:pl-60 rtl:xl:pr-60'
            )}
          >
            {children}
          </main>
        </div>
        <Footer />
        {/* </div> */}
      </div>
      {/* {isMounted && breakpoint === 'xs' && <BottomNavigation />} */}
    </motion.div>
  );
}
