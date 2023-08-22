import profile from '@/assets/images/profile.png'
import full from '@/assets/images/full.jpg'
import pm from '@/assets/images/pm.png'
import backend from '@/assets/images/backend.png'
// import frontend from '@/assets/images/frontend.png'
import designer from '@/assets/images/designer.png'
import { useTranslation } from 'react-i18next'


const Team = () => {
  const { t } = useTranslation('translation')
  const data = [
    {
      img: profile,
      title: '@sultandelux',
      position: 'CTO, mobile',
      alt: 'sultandelux программист алматы, разработчик',
      url: 'https://www.instagram.com/sultandelux/?hl=ru',
    },
    {
      img: pm,
      title: '@yeerkin',
      position: 'CEO, Project Manager',
      alt: 'алматы программист, php разработчик Туран университет',
      url: 'https://www.instagram.com/yeerkin/?hl=ru',
    },
    // {
    //   img: full,
    //   title: '@elnar_abi',
    //   position: 'Full-Stacker',
    //   alt: 'алматы программист, php разработчик Туран университет',
    //   url: 'https://www.instagram.com/elnar_abi/?hl=ru',
    // },
    {
      img: backend,
      title: '@nur_aubakir',
      position: 'Backender, mobile',
      alt: 'алматы программист, php разработчик Туран университет',
      url: 'https://www.instagram.com/nur_aubakir/?hl=ru',
    },
    // {
    //   img: frontend,
    //   title: '@ige1strom_384',
    //   position: 'Frontender, designer',
    //   alt: 'xponend мобильный ui ux дизайнер фронтенд дизайнер',
    //   url: 'https://www.instagram.com/ige1strom_384/?hl=ru',
    // },
    {
      img: designer,
      title: '@kanattone',
      position: 'UI, UX designer',
      alt: 'xponend мобильный ui ux дизайнер фронтенд дизайнер лого',
      url: 'https://www.instagram.com/kanattone/?hl=ru',
    },
  ]

  return (
    <div className=' my-10 relative sm:mt-16 lg:my-10 lg:ml-10'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-5 lg:items-center'>
        <div className='lg:col-start-2'>
          {/* <p className='circle-sketch-highlight'>Dream Team</p> */}
          <h3 className='text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl text-highlighted'>
            <span className='circle-sketch-highlight-team'>
              {t('main.team.title')}
            </span>
          </h3>
          <p className='mt-3 text-xl text-gray-500'>
            {t('main.team.text')}
            {/* We got{' '}
            <span className='text-gray-700 font-bold  '>
              {' '}
              app professionals{' '}
            </span>{' '}
            to realize your app ideas. */}
          </p>

          <div className='mt-10 space-y-'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12  rounded-md bg-white-500 text-white'>
                  <span className='text-3xl'>💯</span>
                </div>
              </div>
              <div className='ml-4'>
                <dt className='text-xl leading-6 font-bold text-gray-900'>
                  Expert Fullstackers
                </dt>
                <dd className='mt-2 text-xl text-gray-500'>
                  Laravel, Nodejs, Django, Wordpress, Firebase, GraphQl,
                  ReactJs, Vuejs
                </dd>
              </div>
            </div>

            <div className='flex'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-10 rounded-md bg-white-500 text-white'>
                  <span className='text-3xl'>📱</span>
                </div>
              </div>
              <div className='ml-4'>
                <dt className='text-xl leading-6 font-bold text-gray-900'>
                  Expert Mobile developers
                </dt>
                <dd className='mt-2 text-xl text-gray-500'>
                  Expo, React Native, PWA, Flutter
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5 k lg:mt-0 lg:col-start-1 lg:max-w-sm content-end lg:ml-20'>
          <div className='container bg-cover justify-center lg:max-w-3xl'>
            <div className='bg-white p-2 py-0 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
              <div className='card-content divide-y flex flex-col gap-y-1 mt-2'>
                {
                  data.map(el => {
                    return (
                      <div >
                        <div key={el.url} className='card-content-profil pt-3 flex justify-between items-center'>
                          <div className=' flex gap-x-3 items-center'>
                            <img
                              className='avatar w-20 h-20 rounded-full border-4 border-opacity-40'
                              src={el.img}
                              alt={el.alt}
                            />
                            <div className='card-name-user text-base'>
                              <h3 className='font-semibold'>{el.title}</h3>
                              <div className=' flex items-center gap-x-1'>
                                <span className='h-3 w-3 rounded-full bg-green-500'></span>
                                <span>{el.position}</span>
                              </div>
                            </div>
                          </div>
                          <div className='card-action'>
                            <a
                              href={el.url}
                              className='flex items-center px-2 py-1 text-xs '
                            >
                              <div className='border border-black rounded-full inline-flex p-2 items-center justify-center'>
                                <svg
                                  className='transform translate-y-1'
                                  height='22'
                                  viewBox='0 0 48 48'
                                  color='white'
                                  width='22'
                                >
                                  <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z'></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>


                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
