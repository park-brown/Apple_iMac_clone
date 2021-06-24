import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';

const BuystripSection = () => {
	return (
		<Grid
			className='section-buystrip'
			component='section'
			sx={{
				width: '100%',
				p: { mobile: '100px 15px 0 15px', tablet: '100px 0 0 0', laptop: '83px 0 0 0' },
				mb: { mobile: '30px' },
				textAlign: 'center'
			}}>
			<Box className='buy-strip-wrapper' sx={{ width: '100%', height: '100%', maxWidth: '1440px', mx: 'auto' }}>
				<Box className='flex-wrapper' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
					<Box
						className='flex-item'
						sx={{
							flexBasis: { mobile: '100%', tablet: '33.333333%' },
							maxWidth: { mobile: '274px', tablet: '280px', laptop: '370px' },
							mb: { mobile: '60px', tablet: 0 }
						}}>
						<Box
							component='figure'
							sx={{
								backgroundImage: 'url(./buystrip/icon-delivery_large_2x.png)',
								width: '66px',
								height: '74px',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								position: 'relative',
								left: '50%',
								margin: '0 0 0 -33px'
							}}></Box>
						<Typography variant='buystrip_headline' component='h2'>
							Fast, no‑contact delivery
						</Typography>
						<Typography variant='tile_copy' compoent='p' sx={{ color: 'grey.700' }} component='p'>
							Choose two‑hour courier or free delivery.
						</Typography>
						<CustomButton>Learn more</CustomButton>
					</Box>
					<Box
						className='flex-item'
						sx={{
							flexBasis: { mobile: '100%', tablet: '33.333333%' },
							maxWidth: { mobile: '274px', tablet: '280px', laptop: '370px' },
							mb: { mobile: '60px', tablet: 0 }
						}}>
						<Box
							component='figure'
							sx={{
								backgroundImage: 'url(./buystrip/icon-finance_large.svg)',
								width: '74px',
								height: '74px',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								position: 'relative',
								left: '50%',
								margin: '0 0 0 -37px'
							}}></Box>
						<Typography variant='buystrip_headline' component='h2'>
							Pay monthly at 0% APR
						</Typography>
						<Typography variant='tile_copy' compoent='p' sx={{ color: 'grey.700' }} component='p'>
							You can pay over time with Apple Card Monthly Installments or with your carrier.
						</Typography>
						<CustomButton>Learn more</CustomButton>
					</Box>
					<Box
						className='flex-item'
						sx={{
							flexBasis: { mobile: '100%', tablet: '33.333333%' },
							maxWidth: { mobile: '274px', tablet: '280px', laptop: '370px' },
							mb: { mobile: '60px', tablet: 0 }
						}}>
						<Box
							component='figure'
							sx={{
								backgroundImage: 'url(./buystrip/icon-help_large.svg)',
								width: '63px',
								height: '74px',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								position: 'relative',
								left: '50%',
								margin: '0 0 0 -31.5px'
							}}></Box>
						<Typography variant='buystrip_headline' component='h2'>
							Online Personal Session
						</Typography>
						<Typography variant='tile_copy' compoent='p' sx={{ color: 'grey.700' }} component='p'>
							From basics to pro tips, get more out of your new iPhone.
						</Typography>
						<CustomButton>Learn more</CustomButton>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default BuystripSection;
