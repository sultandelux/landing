import { useHistory } from 'react-router-dom'

const Error = () => {
  let history = useHistory()
  return (
    <>
      {' '}
      <div className='justify-center'>
        <center className='mt-2 m-auto'>
          <div className=' tracking-widest'>
            <br />
            <span className='text-gray-500 text-6xl block'>
              <span>4 0 4</span>
            </span>
            <br />
            <span className='text-gray-500 text-xl block'>
              Страница не найдена
            </span>
          </div>
        </center>
        <center className='py-6'>
          <button
            // href={history.goBack()}
            onClick={history.goBack}
            className='text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md'
          >
            Назад{' '}
          </button>
        </center>
      </div>
    </>
  )
}

export default Error
