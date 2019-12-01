//https://gist.github.com/swernerx/2c2ba4e611b4ec7921813a71517ddf5a
import { Location } from '@reach/router'
import React from 'react'
let lastNavigationFromBrowserUI = true
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', event => {
    lastNavigationFromBrowserUI = true
  })
}
const AutoScrollToTop = ({ children }) => (
  <Location>
    {() => {
      if (
        typeof window !== 'undefined' &&
        typeof window.history !== 'undefined'
      ) {
        // Initial rendering and back/forward navigation uses browsers
        // native scroll history mechanism which tracks scroll position
        // for each history entry automatically
        if (lastNavigationFromBrowserUI) {
          lastNavigationFromBrowserUI = false
        } else {
          // When adding new entries by navigating through clicking on actual
          // links in the page, we always scroll up to work around
          // the scrolling applied by automatic focussing as done
          // by reach routers accessibility tweaks.
          requestAnimationFrame(() => {
            window.scrollTo(0, 0)
          })
        }
      }
      return children
    }}
  </Location>
)
export default AutoScrollToTop
