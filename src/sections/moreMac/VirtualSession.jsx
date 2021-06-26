import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const VirtualSession = () => {
	return (
		<>
			<Box
				className='tile-virtual-session'
				sx={{
					width: '100%',
					m: { mobile: '19px auto 15px auto', tablet: '19px auto 20px auto', laptop: '0 0 30px 0' },
					backgroundColor: '#fafafa',
					textAlign: 'center',
					flexGrow: 2,
					flexBasis: '100%'
				}}>
				<Box
					className='banner-container'
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
							p: {
								mobile: '63px 0 68px 0',
								tablet: 0,
								laptop: '0 0 0 100px'
							},
							display: 'flex',
							flexShrink: 0,
							flexDirection: 'column',
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' },
							justifyContent: 'center',
							textAlign: 'center'
							// minHeight: '500px'
						}}>
						<Typography variant='eyebrow' component='h2'>
							Today at Apple
						</Typography>
						<Typography variant='tile_headline' component='p' sx={{ mt: { mobile: '7px', tablet: '6px' } }}>
							Virtual Sessions
						</Typography>
						<Typography
							variant='tile_copy'
							component='p'
							sx={{
								maxWidth: { mobile: '260px', laptop: '320px' },
								mx: 'auto',
								mt: { mobile: '13.6px' },
								color: 'grey.700'
							}}>
							Learn the basics of using iPhone live with Apple Creatives.
						</Typography>
						<CustomButton>sign up</CustomButton>
					</Box>
					<Box
						className='image-wrapper'
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							overflow: 'hidden',
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '58.33333%' }
						}}>
						<Box
							className='virtual-session-image'
							component='figure'
							sx={{
								m: { mobile: '-18px 0 0 -368px', tablet: '0 0 0 -10px', laptop: '0 0 0 100px' },
								backgroundImage: {
									mobile: 'url(./more_iphone_section/virtual_sessions_small_2x.jpg)',
									tablet: 'url(./more_iphone_section/virtual_sessions_medium_2x.jpg)',
									laptop: 'url(./more_iphone_section/virtual_sessions_large_2x.jpg)'
								},
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { mobile: '736px', tablet: '378px', laptop: '703px' },
								height: { mobile: '214px', tablet: '350px', laptop: '504px' }
							}}></Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default VirtualSession;
