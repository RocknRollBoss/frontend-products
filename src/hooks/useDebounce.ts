import { useEffect, useState } from "react"

export const useDebounce = (searchValue: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(searchValue)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, delay)
    return () => clearTimeout(timerId)
  }, [searchValue])

  return debouncedValue
}
