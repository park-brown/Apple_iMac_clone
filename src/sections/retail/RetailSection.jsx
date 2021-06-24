import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import CustomButton from '../../component/LinkButton/LinkButton';

const RetailSection = () => {
	return (
		<Grid
			component='section'
			className='retail-section'
			sx={{ m: { mobile: '15px 0 0 0', tablet: '20px', laptop: '30px' }, width: '100%' }}>
			<Box
				className='buy-a-Mac-for-college'
				sx={{ m: { mobile: '42px 0 15px 0', tablet: '20px 0', laptop: '60px 0 30px 0' } }}>
				<Box
					className='banner-wrapper'
					sx={{
						display: 'flex',
						position: 'relative',
						alignItems: 'center',
						flexWrap: 'wrap',
						textAlign: 'center',
						m: '0 auto',
						width: '100%',
						maxWidth: { mobile: '100%', tablet: '767px', laptop: '1440px' }
					}}>
					<Box
						className='banner-container'
						sx={{
							width: '100%',
							height: '100%',
							backgroundImage: 'linear-gradient(135deg, #fbd0b8 0%, #fcdcbe 48%, #fcdcbe 49%, #fceac3 100%)',
							display: 'flex',
							p: { mobile: '213px 0 58px 0', tablet: '57px 0', laptop: '138px 0' },
							m: { mobile: 0, tablet: '0 2.08333%' },
							height: { mobile: '415px', tablet: '284px', laptop: '490px' }
						}}>
						<Box className='copy-container' sx={{ flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' } }}>
							<Box
								sx={{
									m: { mobile: 0, tablet: '0 0 0 77px', laptop: '0 0 0 90px' },
									display: 'flex',
									flexDirection: 'column',
									alignItems: { mobile: 'center', tablet: 'flex-start' },
									height: '100%',
									textAlign: { mobile: 'center', tablet: 'left' }
								}}>
								<Typography variant='tile_headline'>
									Buy a Mac
									<br /> for college.
									<br /> Get AirPods.
								</Typography>
								<Box sx={{ mt: '28px' }}>
									<CustomButton>Save with education pricing</CustomButton>
								</Box>
							</Box>
						</Box>

						<Box
							className='image-container'
							sx={{
								position: 'absolute',
								width: { mobile: '332px', tablet: '364px', laptop: '50%' },
								height: { mobile: '408px', tablet: '227px', laptop: '487px' },
								top: { mobile: '-19px', tablet: '50%', laptop: '50%' },
								left: { mobile: '50%', tablet: '45%', laptop: '41.66667%' },
								transform: { mobile: 'translateX(-50%)', tablet: 'translateY(-50%)' },
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								backgroundPosition: { mobile: 'center top', tablet: 'center' },
								backgroundImage: {
									mobile: 'url(./retail/flp_mac_family_small_2x.png)',
									tablet: 'url(./retail/flp_mac_family_medium_2x.png)',
									laptop: 'url(./retail/flp_mac_family_large_2x.png)'
								}
							}}></Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default RetailSection;
