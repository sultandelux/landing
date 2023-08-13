import { useRef, useEffect } from 'react'

const renderMatrix = (ref) => {
  let canvas = ref.current
  let context = canvas.getContext('2d')

  canvas.style.width = '100%'
  canvas.style.height = '18rem'
  // ...then set the internal size to match
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  const width = canvas.width
  const height = canvas.height

  const columns = Math.floor(width / 20) + 1
  const yPositions = Array.from({ length: columns }).fill(0)

  const render = () => {
    context.fillStyle = 'rgba(31, 41, 55, 0.05)'
    context.fillRect(0, 0, width, height)

    context.fillStyle = '#0f0'
    context.font = '14pt monospace'

    yPositions.forEach((y, index) => {
      const text = String.fromCharCode(Math.random() * 128)
      const x = index * 20
      context.fillText(text, x, y)

      if (y > 100 + Math.random() * 10000) {
        yPositions[index] = 0
      } else {
        yPositions[index] = y + 20
      }
    })
  }

  return () => {
    setInterval(render, 50)
  }
}

const MaxtrixEffect = (props) => {
  const ref = useRef()
  const keyName = 'mrl-' + props.key

  useEffect(() => renderMatrix(ref))

  return (
    <canvas key={keyName} ref={ref} className='absolute z-100 inset-x-0 top-0 h-16' />
  )
}

export default MaxtrixEffect
