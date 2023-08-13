import CountUp from 'react-countup'
import './index.scss'
import { useTranslation } from 'react-i18next'

const CountStats = () => {
  const { t } = useTranslation()

  return (
    <div className='container my-2'>
      <div className='flex items-center justify-center text-6xl'>
        <CountUp
          end={30}
          useEasing={true}
          duration={3}
          redraw={true}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        >
          {({ countUpRef, start }) => (
            <p className='count-up' ref={countUpRef}>+</p>
          )}
        </CountUp>
        <p className='count-up'>+</p>
      </div>
      <div className='flex items-center justify-center mt-2'>
        {/* <p className='text-5xl'>{t('main.count_stats.title')}</p> */}
      </div>
    </div>
  )
}

export default CountStats
