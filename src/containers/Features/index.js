import { useTranslation } from 'react-i18next'
import Highlighter from 'react-highlight-words'

const Features = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <div _style={{ maxHeight: '800px' }} className='overflow-y-auto'>
        <div className='py-2 relative bg-white lg:pt-4 lg:pb-10 lg:px-10'>
          <div className='mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <div className='mt-6 lg:mt-10 text-xl'>
              <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='pt-3'>
                  <div className='p-2 pl-0 flow-root bg-gray-50 rounded-xl'>
                    <div className='-mt-6'>
                      <h3 className='mt-4 text-xl lg:text-2xl font-bold text-gray-900 tracking-tight'>
                        🤩 {t('main.feature1.title')}
                      </h3>
                      <p className='mt-2 text-xl  text-gray-600 font-semibold'>
                        <Highlighter
                          highlightClassName='text-gray-900 font-bold'
                          searchWords={['Google Play, AppStore']}
                          autoEscape={true}
                          textToHighlight={t('main.feature1.text')}
                        />

                        {/* Free hosting service, deployment on servers, publishing
                        on{' '}
                        <span className='text-gray-900 font-bold'>
                          Google Play, AppStore.
                        </span>{' '}
                        Free domain configurations. */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-3'>
                  <div className='p-2 pl-0 flow-root bg-gray-50 rounded-xl  '>
                    <div className='-mt-6'>
                      <h3 className='mt-4 text-xl font-bold lg:text-2xl   text-gray-900 tracking-tight'>
                        🤝 {t('main.feature2.title')}
                      </h3>
                      <p className='mt-2 text-x  font-semibold text-gray-500'>
                        <Highlighter
                          highlightClassName='text-gray-900 font-bold'
                          searchWords={[
                            'Free technical requirements drafting',
                            'Техникалық талаптар (ТЗ).',
                            'Бесплатное составление ТЗ (технических заданий).',
                          ]}
                          autoEscape={true}
                          textToHighlight={t('main.feature2.text')}
                        />

                        {/* Legal agreement. Free{' '}
                        <span className='text-gray-900 font-bold'>
                          technical requirements
                        </span>{' '}
                        drafting. Online zoom meeting and{' '}
                        <span className='text-gray-900 font-bold'>
                          {' '}
                          agreement signature{' '}
                        </span>
                        possibility. */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-3'>
                  <div className='p-2 pl-0 flow-root bg-gray-50 rounded-xl '>
                    <div className='-mt-6'>
                      <h3 className='mt-4 text-xl font-bold  lg:text-2xl text-gray-900 tracking-tight'>
                        ⭐ {t('main.feature3.title')}
                      </h3>
                      <p className='mt-2 text-xl text-gray-500 font-semibold'>
                        <Highlighter
                          highlightClassName='text-gray-900 font-bold'
                          searchWords={['React Native']}
                          autoEscape={true}
                          textToHighlight={t('main.feature3.text')}
                        />
                        {/* Admin Dashboard + iOS and Android app made with{' '}
                        <span className='text-gray-900 font-bold'>
                          {' '}
                          React Native{' '}
                        </span>
                        + Web application + Free Landing Page */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
