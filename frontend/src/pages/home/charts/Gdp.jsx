import { Container } from '@mui/material'
import { HeadText } from '../../../components/Headtext'
import { SideText } from '../../../components/SideText'
import styles from '../home.module.css'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const Gdp = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      rotate: 0,
      scale: 0,
      opacity: 0,
      y: 50,
    },
    onscreen: {
      rotate: 405,
      opacity: 0.5,
      scale: 1,
      y: 50,
      transition: {
        type: 'spring',
        duration: 3,
        delay: 1,
        stiffness: 20,
      },
    },
  }
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(246,246,246,1) 1%, rgba(213,255,208,1) 35%, rgba(219,250,170,1) 65%, rgba(255,255,255,1) 98%)',
        padding: '3rem 0',
      }}
    >
      {!isMobile ? (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.img
            style={{
              position: 'absolute',
              left: -200,
              transform: 'rotate(45deg)',
              width: '30rem',
            }}
            variants={imgVariants}
            width="100%"
            src="/static/images/earth-day-icons.png"
          ></motion.img>
        </motion.div>
      ) : (
        ''
      )}
      <Container maxWidth="lg">
        <HeadText>
        Analyzing the trends in GDP growth and job creation provides valuable insights when comparing India and the United States.
        </HeadText>
        <SideText>
        The symbiotic connection between job creation and GDP growth is evident in both India and the United States, underscoring how economic expansion directly influences employment opportunities.
        </SideText>
        <div className={styles.gdp_chart}>
          <img
            width="100%"
            src="/static/charts/gdpVSjob.png"
            alt="GDP VS Jobs"
          />
        </div>
        {!isMobile ? (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.img
              style={{
                position: 'absolute',

                left: -200,
                transform: 'rotate(45deg)',
                width: '30rem',
              }}
              variants={imgVariants}
              width="100%"
              src="/static/images/earth-day-icons1.png"
            ></motion.img>
          </motion.div>
        ) : (
          ''
        )}
        <HeadText>
        Examining the trends in GDP growth and student placement offers valuable insights into the comparative landscapes of India and the United States.
        </HeadText>
        <SideText>
        The correlation between GDP growth and fluctuations in student placement percentages in India suggests a strong influence of economic trends on educational and employment outcomes.
        </SideText>
        <div className={styles.gdp_chart}>
          <img
            width="100%"
            src="/static/charts/gdpVSplaced.png"
            alt="GDP VS Jobs"
          />
        </div>
      </Container>
    </div>
  )
}

Gdp.propTypes = {
  isMobile: PropTypes.bool,
}
