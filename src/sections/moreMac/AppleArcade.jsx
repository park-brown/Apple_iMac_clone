import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const AppleArcade = () => {
	return (
		<Box
			className='apple-arcade'
			sx={{
				width: '100%',
				p: { mobile: 0, tablet: '0 0 0 10px ', laptop: '0 0 0 15px' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#fff',
					color: '#1d1d1f',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden',
					backgroundImage: {
						mobile: 'url(./more_iphone_section/apple_arcade_small_2x.jpg)',
						tablet: 'url(./more_iphone_section/apple_arcade_medium_2x.jpg)',
						laptop: 'url(./more_iphone_section/apple_arcade_large_2x.jpg)'
					},
					backgroundSize: { mobile: '734px 422px', tablet: '358px 283px', laptop: '675px 582px' },
					backgroundPosition: { mobile: 'center bottom', tablet: 'center 92px', laptop: 'center bottom' },
					backgroundRepeat: 'no-repeat',
					minHeight: { mobile: '490px', tablet: '350px' }
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%',
						maxHeight: '220px'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '44px auto 0 auto', tablet: '44px auto 0 auto', laptop: '69px auto 0 auto' },
							width: { mobile: '116px', tablet: '116px', laptop: '180px' },
							height: { mobile: '26px', tablet: '26px', laptop: '39px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/logo_apple_arcade_medium_2x.png)',
								tablet: 'url(./more_iphone_section/logo_apple_arcade_medium_2x.png)',
								laptop: 'url(./more_iphone_section/logo_apple_arcade_large_2x.png)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0' }}>
						Get 3 months of Apple Arcade free <br /> when you buy an iPhone.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<CustomButton>try it free</CustomButton>
						<CustomButton>learn more</CustomButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AppleArcade;
