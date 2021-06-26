import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const AppleOne = () => {
	return (
		<>
			<Box
				className='tile_apple_one'
				sx={{
					width: '100%',
					m: { mobile: '0 auto 15px auto', tablet: '0 auto 20px auto', laptop: '0 0 30px 0' },
					backgroundColor: '#fafafa',
					textAlign: 'center',
					flexGrow: 2,
					flexBasis: '100%'
				}}>
				<Box
					className='apple_one_content'
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						overflow: 'hidden',
						justifyContent: 'space-between'
					}}>
					<Box
						className='copy_wrapper'
						sx={{
							display: 'flex',
							flexShrink: 0,
							flexDirection: 'column',
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' },
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							order: { mobile: 1, tablet: 2 },
							mt: { mobile: '50px', tablet: 0 }
						}}>
						<Typography
							variant='eyebrow'
							component='h2'
							sx={{
								m: { mobile: 0 },
								backgroundImage: {
									mobile: 'url(./more_iphone_section/apple_one_logo_small_2x.jpg)',
									tablet: 'url(./more_iphone_section/apple_one_logo_medium_2x.jpg)',
									laptop: 'url(./more_iphone_section/apple_one_logo_large_2x.jpg)'
								},
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { mobile: '84px', tablet: '184px', laptop: '317px' },
								height: { mobile: '28px', tablet: '59px', laptop: '100px' }
							}}></Typography>
						<Typography
							variant='eyebrow'
							component='p'
							sx={{
								m: { mobile: '25px 0 15px 0', tablet: '20px 0 15px 0', laptop: '30px 0 25px 0' },
								maxWidth: { mobile: '315px', tablet: '264px', laptop: '420px' }
							}}>
							Bundle up to six Apple services. And enjoy more for less.
						</Typography>
						<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
							<CustomButton>try it free</CustomButton>
							<CustomButton>learn more</CustomButton>
						</Box>
					</Box>
					<Box
						className='image_wrapper'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							overflow: 'hidden',
							m: { mobile: '50px 0', tablet: '86px 0 70px', laptop: '150px 0 130px 0' },
							p: { mobile: 0, tablet: 0, laptop: 0 },
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '58.33333%' },
							order: { mobile: 2, tablet: 1 }
						}}>
						<Box
							className='apple-one-image'
							component='figure'
							sx={{
								m: { mobile: '0 0 0 30px', tablet: '0 -50px 0 0', laptop: 0 },
								backgroundImage: {
									mobile: 'url(./more_iphone_section/apple_one_small_2x.jpg)',
									tablet: 'url(./more_iphone_section/apple_one_medium_2x.jpg)',
									laptop: 'url(./more_iphone_section/apple_one_large_2x.jpg)'
								},
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { mobile: '297px', tablet: '313px', laptop: '542px' },
								height: { mobile: '181px', tablet: '191px', laptop: '329px' }
							}}></Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AppleOne;
