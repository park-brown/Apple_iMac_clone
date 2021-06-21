import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
const LinkButton = styled(Button, { name: 'learn-more-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.body,
		color: theme.palette.common.link,
		padding: 0,
		'& .MuiSvgIcon-root': {
			width: '12.25px',
			height: '20px'
		}
	}
}));
const Hero = () => {
	return (
		<Grid
			component='section'
			className='section-imac-hero-product'
			sx={{
				width: '100%',
				p: { mobile: '44px 0px', tablet: '63px 0 98px 0', laptop: '63px 0 120px 0' },
				overflow: 'hidden'
			}}>
			<Box
				className='section-content'
				sx={{ width: { mobile: '87.5%', tablet: '692px', laptop: '980px' }, mx: 'auto' }}>
				<Box
					className='product-wrapper'
					sx={{
						width: '100%',
						maxWidth: { mobile: '100%', tablet: '66.66667%', laptop: '58.33333%' },
						mx: 'auto',
						textAlign: 'center'
					}}>
					<Typography component='h2' variant='headline'>
						<Typography
							compoent='span'
							variant='body'
							sx={{ mb: '0.16em', fontWeight: 600, color: '#f56300', display: 'block' }}>
							New
						</Typography>
						iMac
					</Typography>
					<Typography variant='eyebrow' component='p' sx={{ m: '0.2em 0' }}>
						Say hello.
					</Typography>
					<Typography variant='body' component='p' sx={{ fontWeight: 600 }}>
						From $1299
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '13.6px' }}>
						<HeroButton sx={{ mt: '0.8em' }}>Buy</HeroButton>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>learn more</LinkButton>
					</Box>
					<Box sx={{ width: '100%', mt: '0.8em' }} className='image-wrapper'>
						<Box
							className='hero-image'
							component='figure'
							sx={{
								position: 'relative',
								left: '50%',

								width: { mobile: '322px', tablet: '738px', laptop: '1070px' },
								height: { mobile: '472px', tablet: '308px', laptop: '446px' },
								backgroundImage: {
									mobile: 'url(./hero/hero_imac_24_small_2x.jpg)',
									tablet: 'url(./hero/hero_imac_24_medium_2x.jpg)',
									laptop: 'url(./hero/hero_imac_24_large_2x.jpg)'
								},
								margin: { mobile: '20px 0 0 -161px', tablet: '27px 0 0 -369px', laptop: '32px 0 0 -535px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default Hero;
