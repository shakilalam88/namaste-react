import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    window.addEventListener('online', () => {
      return setOnline(true)
    })
    window.addEventListener('offline', () => {
      return setOnline(false)
    })
  }, [])

  return online
}

export default useOnlineStatus
