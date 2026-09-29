import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HeadText } from '../../../components/Headtext'
import { Container } from '@mui/material'
import { SideText } from '../../../components/SideText'

export const LeastAvgHighest = ({ isMobile }) => {
  const imgVariants = {
    offscreen: {
      y: 400,
      x: -50,
      opacity: 0.1,
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  }
  return (
    <div>
      <Container maxWidth="lg">
        <HeadText>
        Analysis of Salary Distribution Across Tiers: High, Average, and Low Earnings.
        </HeadText>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {!isMobile && (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              style={{ width: '20rem' }}
            >
              <motion.img
                variants={imgVariants}
                style={{ width: '100%' }}
                src="/static/images/startups,-entrepreneurship-and-growth.png"
              />
            </motion.div>
          )}
          <div style={{ width: '40rem' }}>
            <img
              style={{ width: '100%' }}
              src="/static/charts/least_avg_highest_tier1.png"
            />
          </div>
        </div>
        <SideText>
        In the salary hierarchy, Tier 1 reflects the highest incomes, Tier 2 signifies moderate earnings, while Tier 3 indicates the lowest wages. This demonstrates a distinct and structured salary gradation across tiers.
        </SideText>
      </Container>
    </div>
  )
}

LeastAvgHighest.propTypes = {
  isMobile: PropTypes.bool,
}
