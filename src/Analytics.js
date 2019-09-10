import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { GA_TRACKING_ID } from './config'

export default function Analytics({ location }) {
  const { href } = location
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID)
  }, [])
  useEffect(() => {
    ReactGA.pageview(href)
  }, [href])
  return null
}
