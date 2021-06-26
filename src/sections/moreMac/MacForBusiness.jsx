import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const MacForBusiness = () => {
	return (
		<Box
			className='mac-for-business'
			sx={{
				width: '100%',
				minHeight: { mobile: '490px', tablet: '400px', laptop: '600px' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '100%', laptop: '100%' },
				backgroundImage: {
					mobile: 'url(./more_iphone_section/business_small_2x.jpg)',
					tablet: 'url(./more_iphone_section/business_medium_2x.jpg)',
					laptop: 'url(./more_iphone_section/business_large_2x.jpg)'
				},
				backgroundPosition: 'center bottom',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}>
			<Box
				className='copy_wrapper'
				sx={{
					flexBasis: { mobile: '75%', tablet: '90%' },
					p: { mobile: '176px 0 0 0', tablet: '142px 0 0 0', laptop: '242px 0 0 0' },
					mx: 'auto',
					maxWidth: { mobile: '75%', tablet: '90%' },
					width: '100%',
					maxHeight: '220px'
				}}>
				<Typography component='h2' variant='tile_headline' sx={{ color: '#f5f5f7' }}>
					Mac For Business
				</Typography>
				<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0', color: '#f5f5f7' }}>
					Get the power to take your business to the next level.
				</Typography>
				<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: '13.6px' }}>
					<CustomButton>Learn more</CustomButton>
				</Box>
			</Box>
		</Box>
	);
};

export default MacForBusiness;
