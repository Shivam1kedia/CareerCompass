import PropTypes from 'prop-types';
import styles from '../home.module.css';
import { motion } from 'framer-motion';
import { Card, Container, Grid, Stack, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
const TOP_FACTORS = [
    {
        title: 'Mastery in a multitude of programming languages',
        description:
            'Mastery of various programming languages not only demonstrates adaptability but also signifies the ability to navigate through diverse projects and technology stacks, establishing you as a versatile and valuable resource for employers.',
        icon: TerminalIcon,
    },
    {
        title: 'Cumulative Grade Point Average',
        description:
            'An impressive CGPA underscores unwavering commitment, a solid grasp of subjects, and the aptitude to excel amidst academic challenges, positioning you as a disciplined and capable candidate in the competitive job market.',
        icon: SchoolIcon,
    },
    {
        title: 'Web Development',
        description:
        "In an era of growing dependence on digital platforms, proficiency in web development is crucial. It enables you to craft and sustain responsive, compelling, and operational websites, meeting the dynamic demands of the contemporary digital landscape.",
        icon: LanguageIcon,
    },
    {
        title: 'Number of Internships',
        description:
            'Internship experiences bridge the gap between theoretical knowledge and practical skills, showcasing your capacity to collaborate, solve problems, and contribute meaningfully in a professional environment. These experiences elevate your attractiveness to prospective employers.',
        icon: WorkOutlineIcon,
    },
];
const AVG_PACKAGE_VITAL_SKILLS = [
    {
        title: '',
        description:
            '',
        icon: QueryStatsIcon,
    },
    {
        title: '',
        description:
            '',
        icon: LanguageIcon,
    },
];
const Item = ({ children, Icon, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0.5, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className={styles.item}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: '8px',
                margin: '0 0 5px 0',
                padding: '0 2px',
            }}
        >
            <Card
                sx={{
                    height: '100%',
                    padding: '1rem',
                    width: '100%',
                }}
            >
                <Grid container columnSpacing={'1rem'}>
                    <Grid item xs={'auto'}>
                        <Icon sx={{ fontSize: '2.5rem', color: '#35F2DF' }} />
                    </Grid>

                    <Grid item xs>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-primary)',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {children}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-secondary)',
                                    fontWeight: '400',
                                }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </motion.div>
    );
};
export const TopFactors = ({ isMobile }) => {
    const imgVariants = {
        offscreen: {
            y: 400,

            opacity: 0,
        },
        onscreen: {
            y: -135,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.5,
            },
        },
    };
    return (
        <div
            style={{
                // backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                backgroundColor: '#f6f6f6',
            }}
        >
            <motion.div
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                style={{ width: '1px', zIndex: 4 }}
            >
                {!isMobile ? (
                    <div style={{ position: 'absolute', width: '10rem' }}>
                        <motion.img
                            variants={imgVariants}
                            style={{ width: '100%' }}
                            src='/static/images/Rectangle_img.webp'
                        />
                    </div>
                ) : (
                    ''
                )}
            </motion.div>
            <Container maxWidth='lg' sx={{ paddingBottom: '5rem' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        position: 'relative',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{ padding: '2px' }}>
                        <h1 style={{ textAlign: 'center' }}>
                        Key determinants influencing placement
                        </h1>

                        <Grid
                            alignItems={'stretch'}
                            container
                            rowSpacing={'0.5rem'}
                            columnSpacing={'0.5rem'}
                        >
                            {TOP_FACTORS.map((value, idx) => {
                                return (
                                    <Grid key={idx} item md={6} sm={12}>
                                        <Item
                                            Icon={value.icon}
                                            description={value.description}
                                        >
                                            {value.title}
                                        </Item>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                    <div
                        style={{
                            width: '18rem',
                            zIndex: 0,
                            position: 'absolute',
                            top: 190,
                            right: 100,
                            opacity: 0.2,
                            transform: 'rotate(-10deg)',
                        }}
                    >
                        <img
                            style={{ width: '100%' }}
                            src='/static/images/back-view-of-monitor-and-keyboard.png'
                        />
                    </div>
                    <div style={{ padding: '8px' }}>
                        <h1 style={{ textAlign: 'center' }}>
                            
                        </h1>
                        <Grid
                            container
                            rowSpacing={'0.5rem'}
                            columnSpacing={'0.5rem'}
                        >
                            {AVG_PACKAGE_VITAL_SKILLS.map((value, idx) => {
                                return (
                                    <Grid item key={idx} lg={12}>
                                        <Item
                                            Icon={value.icon}
                                            description={value.description}
                                        >
                                            {value.title}
                                        </Item>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Item.propTypes = {
    children: PropTypes.any,
    Icon: PropTypes.any,
    description: PropTypes.string,
};

TopFactors.propTypes = {
    isMobile: PropTypes.bool,
};
