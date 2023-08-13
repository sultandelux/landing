const AppCard = ({ src, link, text, descript }) => {
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={src} alt={text} />
      </div>
      <div className='bg-white p-6  flex-col justify-between'>
        <div className=''>
          <p className='text-sm font-medium text-indigo-600'>
            <a className=''>{link}</a>
          </p>
          <a href={link} className='inline-flex mt-2 '>
            <p className='text-xl font-bold text-gray-900'>{text}</p>
            <span>
              <svg
                className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
                data-todo-x-description='Heroicon name: solid/external-link'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
              </svg>
            </span>
          </a>
          <p className='mt-2 text-md text-gray-500'>{descript}</p>
        </div>
      </div>
    </div>
  )
}

export default AppCard
