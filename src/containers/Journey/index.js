import { useTranslation } from 'react-i18next'
import './index.scss'

const Journey = () => {
  const { t } = useTranslation()

  const data = [
    { id: 1, title: 'v.6.0.1', desc: 'Ready!' },
    { id: 2, title: 'v.5.0.1', desc: 'Production' },
    { id: 3, title: 'v.4.0.1', desc: 'Development' },
    { id: 4, title: 'v.3.0.1', desc: 'Test launch' },
    { id: 5, title: 'v.2.0.1', desc: 'Beta Launch' },
    { id: 6, title: 'v.1.0.1', desc: 'Initiation' },
  ]

  return (
    <>
      <div className='flex items-center justify-center mt-2 text-xl font-bold text-black sm:text-2xl lg:text2xl'>
        {t('main.journey.title')}
      </div>
      <div className='wrap'>
        <div className='timeline-wrap'>
          <ul className='timeline'>
            {data.map((item) => (
              <div key={item.title}>
                <li className='timeline-item bmw -mb-5' key={item.id}>
                  <div className='p-timeline-item'>
                    <time className='p-timeline-date' dateTime='2019-05-01'>
                      {item.title}
                    </time>
                    <div className='p-timeline-block' />
                  </div>
                </li>
                <span className='p-timeline-carmodel ' data-car={1}>
                  {item.desc}
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Journey
