import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    maxWidth: 600,
  },
}))

function FAQSection({ title, children }) {
  return (
    <Box mb={3}>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Title gutterBottom variant="h4">
        FAQ
      </Title>

      <FAQSection title="How do I get started?">
        <Typography gutterBottom>
          If you're printing from home, just download files and try printing
          them out. For an awesome guide, check out{' '}
          <Link href="http://bit.ly/PrintLikeAYangster">
            How to Print Like A Yangster
          </Link>
          .
        </Typography>
      </FAQSection>

      <FAQSection title="Where did these designs come from?">
        <Typography paragraph>
          YangPrints is powered by volunteers and their work. The Yang Gang is
          creative and passionate. The designs on YangPrints come from all over.
          Sources are linked where we were able to find them. In general, we
          really like the following sites:
        </Typography>
        <Typography component="div">
          <ul>
            <li>
              <Link href="http://bit.ly/PrintLikeAYangster">
                How to Print Like A Yangster
              </Link>
            </li>
            <li>
              <Link href="http://andrewyang.vote/canvass">
                AndrewYang.Vote's Canvassing Materials collection
              </Link>
            </li>
            <li>
              <Link href="http://yanggangprintables.com">
                YangGangPrintables collection of printables
              </Link>
            </li>
          </ul>
        </Typography>
      </FAQSection>

      <FAQSection title="Where can I find translated materials?">
        <Typography>
          Try the{' '}
          <Link href="https://drive.google.com/drive/u/1/folders/1DnW7_BmbrUXf3SIyEgT0fQ4GeUTKNDMY">
            Yang Gang Translation Project
          </Link>
          . If you just need a website in different languages, try{' '}
          <Link href="https://humanityforyang.com">Humanity For Yang.</Link>
        </Typography>
      </FAQSection>

      <FAQSection title="I want to make something. Where do I get logos, photos, fonts, etc?">
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://drive.google.com/file/d/1BG69BLEiOlvl0W98F3xbN5ysfNTYoSlq/view">
                Official styleguide
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/drive/folders/1W3Gzd6rzV0BnoBXgf3mA59dJORc1aE2n">
                Official media/press kit for logos and photos
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/drive/folders/1bBXFz6LEscDbDafELmcsw3pSa-hYjQw7">
                Official graphics folder
              </Link>
            </li>
            <li>
              <Link href="https://fonts.google.com/specimen/Montserrat">
                Montserrat font
              </Link>
            </li>
          </ul>
          If you'd like to share, please submit your design below.
        </Typography>
      </FAQSection>

      <FAQSection title="Where can I just like buy stuff?">
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://shop.yang2020.com">Official store</Link>
            </li>
            <li>
              <Link href="https://yangtrain.co">YANG TRAIN</Link> - designs by{' '}
              <Link href="https://www.instagram.com/jdschang/">@jdschang</Link>,
              creator of Mini Yang!!
            </li>
            <li>
              Probably lots more places. Try to buy stuff that chips in to the
              campaign, alternatively, just chip into the campaign 😹
            </li>
          </ul>
        </Typography>
      </FAQSection>

      <FAQSection title="Are there any print shops that are Yang Gang?">
        <Typography gutterBottom>
          <b>Los Angeles</b>
          <br />
          <Link href="https://patricklabel.com">Patrick Label Printing Co</Link>
          <br />
          1915 Wilshire Blvd, Los Angeles, CA 90057
          <br />
          (213) 484-2673
        </Typography>
        <Typography gutterBottom>
          {' '}
          <b>San Francisco</b>
          <br />
          <Link href="http://www.brianwebster.com">
            Brian Webster and Associates
          </Link>
          <br />
          190 O'Farrell Street, Suite 409, San Francisco, CA 94102
          <br />
          (415) 243-8900
        </Typography>
        <Typography gutterBottom>
          If you know of more,{' '}
          <Link href="mailto:m@yangprints.com">please let us know</Link>.
        </Typography>
      </FAQSection>
    </Container>
  )
}
