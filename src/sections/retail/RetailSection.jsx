import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import CustomButton from '../../component/LinkButton/LinkButton';
const HeroButton = styled(Button, { name: 'product-buy-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.button,
		padding: '8px 16px',
		borderRadius: '980px',

		color: '#fff',
		backgroundColor: theme.palette.common.button_background,
		'&:hover': {
			backgroundColor: theme.palette.common.button_background_hover
		}
	}
}));
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
						maxWidth: { mobile: '100%', tablet: '768px', laptop: '1440px' }
					}}>
					<Box
						className='banner-container'
						sx={{
							width: '100%',

							backgroundImage: 'linear-gradient(135deg, #fbd0b8 0%, #fcdcbe 48%, #fcdcbe 49%, #fceac3 100%)',
							display: 'flex',
							p: { mobile: '213px 0 58px 0', tablet: '57px 0', laptop: '138px 0' },

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
			<Box
				className='acmi'
				sx={{ m: { mobile: '15px 0 15px 0', tablet: '20px 0', laptop: '30px 0 30px 0' }, overflow: 'hidden' }}>
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
						maxWidth: { mobile: '100%', tablet: '736px', laptop: '1440px' }
					}}>
					<Box
						className='banner-container'
						sx={{
							width: '100%',
							backgroundColor: '#f2f2f2',
							display: 'flex',
							// m: { tablet: 0, laptop: '0 2.08333%' },
							position: 'relative',
							flexDirection: { mobile: 'column', tablet: 'row' }
						}}>
						<Box
							className='copy_wrapper'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								width: { mobile: '100%', tablet: '42%', laptop: '47%' },
								maxWidth: { mobile: '385px', maxWidth: '42%', laptop: '47%' },
								p: { mobile: 0, tablet: '0 0 0 10px', laptop: 0 },
								m: {
									mobile: '40px auto 2.34082vw auto',
									tablet: '40px 34px 40px 1.17041%',
									laptop: '0 2.08333% 0 1.04167%'
								},
								order: { mobile: 1, tablet: 2 }
							}}>
							<Typography variant='tile_headline'>
								Get 3% <br /> Daily Cash back <br /> with Apple Card.
							</Typography>
							<Typography variant='promo_intro' sx={{ maxWidth: '340px', color: 'grey.700', mt: '19px' }}>
								And pay for your new Mac over
								<br /> 12 months, interest‑free when <br />
								you choose to check out with
								<br /> Apple Card Monthly Installments.
							</Typography>
							<Box sx={{ mt: '10px' }}>
								<CustomButton>Learn more</CustomButton>
							</Box>
						</Box>
						<Box
							className='image-wrapper'
							sx={{
								width: { mobile: '100%', tablet: '50%', laptop: '50%' },
								m: { tablet: 0, laptop: '0 0 0 30px' },
								display: 'flex',
								height: { mobile: '160px', tablet: '318px', laptop: '500px' },
								order: { mobile: 2, tablet: 1 }
							}}>
							<Box
								className='banner-image'
								component='figure'
								sx={{
									position: 'relative',
									alignSelf: 'center',
									left: { mobile: '50%', tablet: '30px', laptop: '30px' },
									m: { mobile: '0 0 0 -156px', tablet: 0 },
									width: { mobile: '298px', tablet: '349px', laptop: '660px' },
									height: { mobile: '160px', tablet: '188px', laptop: '355px' },
									backgroundImage: {
										mobile: 'url(./retail/acmi_small_2x.jpg)',
										tablet: 'url(./retail/acmi_medium_2x.jpg)',
										laptop: 'url(./retail/acmi_large_2x.jpg)'
									},
									backgroundSize: 'contain',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center'
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				className='apple-accessories'
				sx={{
					maxWidth: { mobile: '100%', tablet: '736px', laptop: '1440px' },
					mx: 'auto',
					width: '100%',
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row' },
					alignItems: 'center'
				}}>
				<Box
					className='left'
					sx={{
						backgroundColor: '#f2f2f2',
						m: { laptop: '0 15px 30px 0', tablet: '0 10px 20px 0', mobile: '0 auto 15px auto' },
						p: { laptop: '0 4.16667% 276px 4.16667%', tablet: '0 3.74532% 286px 3.74532%', mobile: '0 0 254px 0' },
						width: { laptop: '50%', tablet: '50%', mobile: '100%' },
						backgroundImage: {
							laptop: 'url(./retail/accessories_tile_large_2x.jpg)',
							tablet: 'url(./retail/accessories_tile_medium_2x.jpg)',
							mobile: 'url(./retail/accessories_tile_small_2x.jpg)'
						},
						backgroundSize: { laptop: '676px 282px', tablet: '510px 177px', mobile: '736px 223px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						height: '100%'
					}}>
					<Box
						className='copy_wraper'
						sx={{ textAlign: 'center', p: { mobile: '45px 0 0 0', tablet: '45px 0 0 0', laptop: '60px 0 0 0' } }}>
						<Typography variant='eyebrow' component='h4' sx={{ mb: '8.4px' }}>
							Accessories
						</Typography>
						<Typography variant='headline' component='p' sx={{ maxWidth: '282px', mx: 'auto' }}>
							Explore Mac accessories.
						</Typography>
						<HeroButton sx={{ mt: '13.8px' }}>shop</HeroButton>
					</Box>
				</Box>
				<Box
					className='right'
					sx={{
						backgroundColor: '#f2f2f2',
						m: { laptop: '0 0 30px 15px', tablet: '0 0 20px 10px', mobile: '0 auto 15px auto' },
						p: { laptop: '0 4.16667% 320px 4.16667%', tablet: '0 3.74532% 214px 3.74532%', mobile: '0 0 196px 0' },
						width: { laptop: '50%', tablet: '50%', mobile: '100%' },
						backgroundImage: {
							laptop: 'url(./retail/trade_in_mac_tile_large_2x.jpg)',
							tablet: 'url(./retail/trade_in_mac_tile_medium_2x.jpg)',
							mobile: 'url(./retail/trade_in_mac_tile_small_2x.jpg)'
						},
						backgroundSize: { laptop: '422px 282px', tablet: '294px 174px', mobile: '736px 170px' },
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						height: '100%'
					}}>
					<Box
						className='copy_wraper'
						sx={{ textAlign: 'center', p: { mobile: '45px 0 0 0', tablet: '45px 0 0 0', laptop: '60px 0 0 0' } }}>
						<Typography variant='eyebrow' component='h4' sx={{ mb: '8.4px' }}>
							Apple trade in
						</Typography>
						<Typography
							variant='headline'
							component='p'
							sx={{
								maxWidth: { laptop: '80%', tablet: '82%', mobile: '72%' },
								minWidth: { laptop: '400px', tablet: '248px', mobile: '270px' },
								mx: 'auto'
							}}>
							Get credit toward a new Mac
						</Typography>
						<Box sx={{ mt: '13.6px' }}></Box>
						<CustomButton>find your trde in value</CustomButton>
					</Box>
				</Box>
			</Box>
			<Box
				className='macos-monterey'
				sx={{
					maxWidth: { mobile: '100%', tablet: '736px', laptop: '1440px' },
					mx: 'auto',
					width: '100%',
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row' },
					alignItems: 'center',
					mb: { mobile: '0px', tablet: '25px', laptop: '30px' }
				}}>
				<Box
					className='banner-container'
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						p: { mobile: '40px 0', tablet: '65px 0', laptop: '70px 0' },
						flexDirection: { mobile: 'column', tablet: 'row' },
						background: '#F2F2F2',
						minHeight: '510px'
					}}>
					<Box
						className='flex_wrapper'
						sx={{
							width: { mobile: '100%', tablet: '50%' },
							maxWidth: { mobile: '100%', tablet: '50%' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							flexShrink: 0,
							m: { mobile: '0 auto', tablet: 'auto auto auto 4%', laptop: 'auto -10px auto 6.4%' },
							position: 'relative',
							zIndex: 2
						}}>
						<Typography variant='eyebrow' component='h2' sx={{ textAlign: 'center', mb: '8.4px' }}>
							<Typography variant='caption' sx={{ color: '#bf4800', display: 'block' }}>
								Available this fall
							</Typography>
							macOS Monterey
						</Typography>
						<Typography variant='tile_headline' component='h3' sx={{ textAlign: 'center' }}>
							High powered meets <br />
							"Hi everyone.
						</Typography>
						<Box sx={{ mt: '13.6px' }}></Box>
						<CustomButton>learn more</CustomButton>
					</Box>
					<Box
						className='flex_wrapper'
						sx={{
							width: { mobile: '100%', tablet: '50%' },
							maxWidth: { mobile: '100%', tablet: '50%' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							flexShrink: 1,
							m: { mobile: '30px 0 0 0', tablet: '10px 0 0 0', laptop: '0' },
							overflow: 'hidden'
						}}>
						<Box
							className='monterey-image'
							component='figure'
							sx={{
								position: 'relative',
								zIndex: 1,
								width: { mobile: '322px', tablet: '332px', laptop: '100%' },
								maxWidth: { laptop: '618px' },
								height: { mobile: '192px', tablet: '198px', laptop: '100%' },

								backgroundImage: {
									mobile: 'url(./retail/monterey_tile_small_2x.jpg)',
									tablet: 'url(./retail/monterey_tile_medium_2x.jpg)',
									laptop: 'url(./retail/monterey_tile_large_2x.jpg)'
								},
								margin: { mobile: '0px', tablet: '0px', laptop: '0px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default RetailSection;
