import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import CustomButton from '../../component/LinkButton/LinkButton';

const WhatMakesMacSection = () => {
	const theme = useTheme();
	return (
		<Box
			component='section'
			className='section-what-makes-a-mac-a-mac'
			sx={{ p: { mobile: '50px 0 0 0', tablet: '93px 0 0 0', laptop: '150px 0 0 0' }, width: '100%' }}>
			<Box
				className='section-title'
				sx={{
					width: { mobile: '87.5%', tablet: '692px', laptop: '980px' },
					mx: 'auto',
					mb: { mobile: '44px', tablet: '44px', laptop: '80px' },
					textAlign: 'center'
				}}>
				<Typography variant='section_headline' component='h2'>
					What makes a Mac a Mac?
				</Typography>
			</Box>
			<Grid
				container
				mobile={12}
				sx={{
					width: '100%',
					maxWidth: { mobile: '100%', tablet: '772px', laptop: '1440px' },
					mx: 'auto',
					justifyContent: 'center',
					gap: { mobile: theme.spacing(3), tablet: theme.spacing(4), laptop: theme.spacing(6) }
				}}>
				<Grid
					item
					mobile={12}
					tablet={5}
					laptop={5.5}
					sx={{
						p: { mobile: 0, tablet: '0 8px', laptop: '0 55px' },
						height: { mobile: '440px', tablet: '550px', laptop: '600px' },
						backgroundColor: '#fafafa',
						overflow: 'hidden',
						backgroundImage: {
							mobile: 'url(./whyMac/why_mac_small_2x.jpg)',
							tablet: 'url(./whyMac/why_mac_medium_2x.jpg)',
							laptop: 'url(./whyMac/why_mac_large_2x.jpg)'
						},
						backgroundSize: { mobile: '280px 177px', tablet: '299px 189px', laptop: '459px 289px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: 'center 220px', tablet: 'center 288px', laptop: 'center 264px' }
					}}>
					<Box
						className='copy_container'
						sx={{ p: { mobile: '45px 0 0 0', laptop: '65px 0 0 0' }, width: '100%', textAlign: 'center' }}>
						<Typography variant='eyebrow' component='h2' sx={{ mb: '8.4px' }}>
							Why Mac
						</Typography>
						<Typography variant='tile_headline' component='h3'>
							Incredible power.
							<br /> Incredibly simple.
						</Typography>
						<Box sx={{ mt: '13.6px' }} />
						<CustomButton>Learn more</CustomButton>
					</Box>
				</Grid>
				<Grid
					item
					mobile={12}
					tablet={5}
					laptop={5.5}
					sx={{
						p: { mobile: 0, tablet: '0 8px', laptop: '0 55px' },
						height: { mobile: '440px', tablet: '550px', laptop: '600px' },
						backgroundColor: '#fafafa',
						overflow: 'hidden',
						backgroundImage: {
							mobile: 'url(./whyMac/big_sur_small_2x.jpg)',
							tablet: 'url(./whyMac/big_sur_medium_2x.jpg)',
							laptop: 'url(./whyMac/big_sur_large_2x.jpg)'
						},
						backgroundSize: { mobile: '734px 550px', tablet: '734px 550px', laptop: '1380px 600px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: 'center bottom', tablet: 'center bottom', laptop: 'center bottom' }
					}}>
					<Box
						className='copy_container'
						sx={{
							width: '100%',
							textAlign: 'center',
							position: 'relative',
							top: '50%',
							transform: 'translateY(-50%)',
							color: '#f5f5f7'
						}}>
						<Typography variant='eyebrow' component='h2' sx={{ mb: '8.4px' }}>
							macOS Big Sur
						</Typography>
						<Typography variant='tile_headline' component='h3'>
							Doing it all,
							<br /> in all new ways
						</Typography>
						<Box sx={{ mt: '13.6px' }} />
						<CustomButton>Learn more</CustomButton>
					</Box>
				</Grid>
				<Grid
					item
					mobile={12}
					tablet={5}
					laptop={5.5}
					sx={{
						p: { mobile: 0, tablet: '0 8px', laptop: '0 55px' },
						height: { mobile: '440px', tablet: '550px', laptop: '600px' },
						backgroundColor: '#fafafa',
						overflow: 'hidden',
						backgroundImage: {
							mobile: 'url(./whyMac/continuity_small_2x.jpg)',
							tablet: 'url(./whyMac/continuity_medium_2x.jpg)',
							laptop: 'url(./whyMac/continuity_large_2x.jpg)'
						},
						backgroundSize: { mobile: '736px 195px', tablet: '360px 185px', laptop: '675px 303px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: 'center 92%', tablet: 'center 86%', laptop: 'center 93%' }
					}}>
					<Box
						className='copy_container'
						sx={{ p: { mobile: '30px 0 0 0', laptop: '30px 0 0 0' }, width: '100%', textAlign: 'center' }}>
						<Typography variant='eyebrow' component='h2' sx={{ mb: '8.4px' }}>
							Continuity
						</Typography>
						<Typography variant='tile_headline' component='h3'>
							All your devices.
							<br /> One seamingless
							<br /> experience.
						</Typography>
						<Box sx={{ mt: '13.6px' }} />
						<CustomButton>Learn more</CustomButton>
					</Box>
				</Grid>
				<Grid
					item
					mobile={12}
					tablet={5}
					laptop={5.5}
					sx={{
						p: { mobile: 0, tablet: '0 8px', laptop: '0 55px' },
						height: { mobile: '440px', tablet: '550px', laptop: '600px' },
						backgroundColor: '#fafafa',
						overflow: 'hidden',
						backgroundImage: {
							mobile: 'url(./whyMac/security_small_2x.jpg)',
							tablet: 'url(./whyMac/security_medium_2x.jpg)',
							laptop: 'url(./whyMac/security_large_2x.jpg)'
						},
						backgroundSize: { mobile: '289px 129px', tablet: '299px 138px', laptop: '497px 230px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: 'center 82%', tablet: 'center 82%', laptop: 'center 81%' }
					}}>
					<Box
						className='copy_container'
						sx={{ p: { mobile: '30px 0 0 0', laptop: '30px 0 0 0' }, width: '100%', textAlign: 'center' }}>
						<Typography variant='eyebrow' component='h2' sx={{ mb: '8.4px' }}>
							iCloud
						</Typography>
						<Typography variant='tile_headline' component='h3'>
							Store it all.
							<br /> Access everywhere.
						</Typography>
						<Box sx={{ mt: '13.6px' }} />
						<CustomButton>Learn more</CustomButton>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default WhatMakesMacSection;
