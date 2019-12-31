import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useData from '@src/hooks/useData'
import React from 'react'
import { Link as InternalLink } from '../components/Router'
import Title from '../components/Title'

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
  const { buildId } = useData()

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
        <Typography gutterBottom>
          On YangPrints, there are some materials in{' '}
          <InternalLink to="/tags/spanish">Spanish</InternalLink>,{' '}
          <InternalLink to="/tags/chinese">Chinese</InternalLink>,{' '}
          <InternalLink to="/tags/tagalog">Tagalog</InternalLink>,{' '}
          <InternalLink to="/tags/korean">Korean</InternalLink>,{' '}
          <InternalLink to="/tags/japanese">Japanese</InternalLink>, and{' '}
          <InternalLink to="/tags/german">German</InternalLink>.
        </Typography>
        <Typography>
          For more materials, try the{' '}
          <Link href="https://drive.google.com/drive/u/1/folders/1DnW7_BmbrUXf3SIyEgT0fQ4GeUTKNDMY">
            Yang Gang Translation Project
          </Link>
          . If you just need a website in different languages, try{' '}
          <Link href="https://humanityforyang.com">Humanity For Yang.</Link>
        </Typography>
      </FAQSection>

      <FAQSection title="How can I customize materials?">
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://everysinglemonth.org">
                Every Single Month
              </Link>
              lets you enter your town name to get customized fliers.
            </li>
            <li>
              Materials tagged{' '}
              <InternalLink to="/tags/canva">CANVA</InternalLink> are editable
              online at Canva.com.
            </li>
          </ul>
        </Typography>
      </FAQSection>

      <FAQSection title="I want to make something. Where do I get logos, photos, fonts, etc?">
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://drive.google.com/file/d/1XqPsQ_VRbHKJUqeHB7Y54mBQJKHn5xL4/view">
                Official brand bible
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1BG69BLEiOlvl0W98F3xbN5ysfNTYoSlq/view">
                Old official styleguide
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

      <FAQSection title="Where can I just buy stuff?">
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://shop.yang2020.com">Official store</Link> - buy
              here to support the campaign!
            </li>
            <li>
              <Link href="https://yangtrain.co">YANG TRAIN</Link> - designs by{' '}
              <Link href="https://www.instagram.com/jdschang/">@jdschang</Link>,
              creator of Mini Yang!!
            </li>
            <li>
              Probably lots more places. Try to buy stuff that supports the
              campaign, alternatively, just donate 😉.
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
          <Link href="http://www.betterworldprinting.com">
            Better World Printing
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

      <FAQSection title="Where are people buying printing?">
        <Typography gutterBottom>
          People buy printing from tons of places. Here are a few:
        </Typography>
        <Typography component="div">
          <li>
            <Link href="https://www.gotprint.com">GotPrint</Link> offers 10% off
            with code <b>YANG2020</b>.
          </li>
          <li>
            <Link href="https://vistaprint.com">Vistaprint</Link>,{' '}
            <Link href="https://psprint.com">PsPrint</Link> and tons of other
            places online tend to be in between, depending on promo.
          </li>
        </Typography>
      </FAQSection>
      <small style={{ display: 'none' }}>{buildId}</small>
    </Container>
  )
}
