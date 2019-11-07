import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React, { useRef } from 'react'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
import { useSiteData } from 'react-static'
import ReactToPrint from 'react-to-print'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    maxWidth: 600,
  },
}))

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        className="sheet padding-20mm"
        style={{
          colorAdjust: 'exact !important',
          backgroundColor: 'red',
        }}
      >
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default () => {
  const classes = useStyles()
  const componentRef = useRef()

  return (
    <Container className={classes.root}>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
        bodyClass="paper-css-letter"
      />
      <div
        style={{
          transformOrigin: '0 0',
          transform: 'scale(.5)',
        }}
        className="paper-css-letter"
      >
        <ComponentToPrint ref={componentRef} />
      </div>
    </Container>
  )
}
