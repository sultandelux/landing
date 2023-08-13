import Highlighter from 'react-highlight-words'

const HighLight = ({ text }) => {
  return (
    <>
      <svg className='text' width='100%' height='100' aria-hidden='true'>
        <switch>
          <foreignObject x='0' y='0' dy='1em' width='100%' height='100%'>
            <Highlighter
              highlightTag='span'
              // highlightClassName='circle-sketch-highlight'
              // className='text-highlighted'
              searchWords={['қосымша клонын', 'clone any app', 'ваша команда']}
              textToHighlight={text}
            />
          </foreignObject>
        </switch>
        {/* <path className="stroke" tr style={{ transform: 'translateY(1em) scale(0.625)' }} fill="none" stroke="currentColor" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"></path> */}
        <path
          className='stroke'
          style={{ transform: 'translateY(1em) scale(1.875)' }}
          fill='none'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          d='M90 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6'
        ></path>
      </svg>
    </>
  )
}

export default HighLight
