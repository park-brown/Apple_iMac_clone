import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import VirtualSession from './VirtualSession';
import AppleOne from './AppleOne';
import AppleTV from './AppleTv';
import AppleNews from './AppleNews';
import AppleMusic from './AppleMusic';
import AppleArcade from './AppleArcade';
import AppleGiftCard from './AppleGiftCard';
import AppleEducation from './AppleEducation';
import MacForBusiness from './MacForBusiness';
const MoreMac = () => {
	return (
		<Grid
			component='section'
			className='more-mac-section'
			sx={{ width: '100%', overflow: 'hidden', pt: { mobile: '80px', tablet: '72px', laptop: '110px' } }}>
			<Typography
				variant='section_headline'
				component='h2'
				sx={{
					maxWidth: { mobile: '320px', tablet: '83.33333%' },
					mb: { mobile: '42px', tablet: '62px', laptop: '70px' },
					mx: 'auto',
					textAlign: 'center'
				}}>
				Get more out of Mac .
			</Typography>
			<Box
				className='tile-wrapper'
				sx={{
					display: 'flex',
					width: { mobile: '100%' },
					flexDirection: { mobile: 'column', tablet: 'row' },
					flexWrap: 'wrap',
					p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' },
					margin: { mobile: '0 auto' },
					maxWidth: { tablet: '736px', laptop: '1440px' }
				}}>
				<VirtualSession />
				<AppleOne />
				<AppleTV />
				<AppleNews />
				<AppleMusic />
				<AppleArcade />
				<AppleGiftCard />
				<AppleEducation />
				<MacForBusiness />
			</Box>
		</Grid>
	);
};

export default MoreMac;
