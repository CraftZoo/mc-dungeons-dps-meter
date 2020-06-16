import { useEffect, useState } from 'react'

export const useDimensions = ref => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return { width, height }
}

export const usePosition = ref => {
  const [top, setTop] = useState(0)
  const [right, setRight] = useState(0)
  const [bottom, setBottom] = useState(0)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const { top, right, bottom, left } = ref.current.getBoundingClientRect()

      setTop(top)
      setRight(right)
      setBottom(bottom)
      setLeft(left)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return { top, right, bottom, left }
}
