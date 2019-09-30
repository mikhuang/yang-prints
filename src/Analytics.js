import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { GA_TRACKING_ID } from './config'

export default function Analytics({ location }) {
  const { pathname, search } = location
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID)
  }, [])
  useEffect(() => {
    const page = pathname + search
    ReactGA.pageview(page)
  }, [pathname, search])
  return null
}
