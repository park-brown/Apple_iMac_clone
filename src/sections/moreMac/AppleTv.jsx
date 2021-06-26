import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const AppleTV = () => {
	return (
		<Box
			className='apple-tv-plus'
			sx={{
				width: '100%',
				p: { mobile: 0, tablet: '0 10px 0 0', laptop: '0 15px 0 0' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#000',
					color: '#f5f5f7',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '45px 0 10px -32px', tablet: '44px 0 0 -32px', laptop: '68px 0 0 -49px' },
							position: 'relative',
							left: '50%',
							width: { mobile: '64px', tablet: '64px', laptop: '98px' },
							height: { mobile: '26px', tablet: '26px', laptop: '39px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/apple_tv_plus_logo_small_2x.png)',
								tablet: 'url(./more_iphone_section/apple_tv_plus_logo_medium_2x.png)',
								laptop: 'url(./more_iphone_section/apple_tv_plus_logo_large_2x.png)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0' }}>
						Get 1 year of Apple TV+ free when you
						<br /> buy an iPhone before June 30th.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<CustomButton>try it free</CustomButton>
						<CustomButton>learn more</CustomButton>
					</Box>
				</Box>
				<Box
					component='figure'
					className='apple-tv-image'
					sx={{
						m: { mobile: '26px 0 10px -367.5px', tablet: '36px 0 0 -179.5px', laptop: '36px 0 0 -337.5px' },
						position: 'relative',
						left: '50%',
						width: { mobile: '735px', tablet: '359px', laptop: '675px' },
						height: { mobile: '273px', tablet: '234px', laptop: '354px' },
						backgroundImage: {
							mobile: 'url(./more_iphone_section/apple_tv_plus_tile_small_2x.jpg)',
							tablet: 'url(./more_iphone_section/apple_tv_plus_tile_medium_2x.jpg)',
							laptop: 'url(./more_iphone_section/apple_tv_plus_tile_large_2x.jpg)'
						},
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				/>
			</Box>
		</Box>
	);
};

export default AppleTV;
