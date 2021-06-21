import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CustomSwipeableViews from '../customSwipeableViews/CustomSwipeableViews';
const ProductLink = styled(Box, { name: 'product-link' })(({ theme }) => ({
	color: '#1d1d1f',
	padding: 0,
	marginTop: '3px',
	textAlign: 'center',
	width: 'auto',
	height: '77px',
	position: 'relative'
}));
const ProductIcon = styled('figure', { name: 'product-icon' })(({ url, width, height }) => ({
	// destruction props
	backgroundImage: `${url}`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center bottom',
	display: 'block',
	margin: '0 auto 7px',
	height: `${height}`,
	width: `${width}`
}));
const TypographyNew = styled(Typography, { name: 'product-item-new' })(({ theme }) => ({
	...theme.typography.chapternav_new,
	display: 'block',
	position: 'absolute',
	top: '100%',
	left: 0,
	width: '100%'
}));
const product_nav_link_description = [
	{
		url: 'url(./nav_images/macbookair_light_large.svg)',
		label: 'MacBook Air',
		width: '52px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/macbook_pro_13_light_large.svg)',
		label: 'MacBook Pro 13”',
		width: '51px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/macbook_pro_16_light_large.svg)',
		label: 'MacBook Pro 16”',
		width: '58px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/imac_24_large.svg)',
		label: 'iMac 24”',
		width: '45px',
		height: '54px',
		New: true
	},
	{
		url: 'url(./nav_images/imac_27_light_large.svg)',
		label: 'iMac 27”',
		width: '48px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_pro_light_large.svg)',
		label: 'Mac Pro',
		width: '35px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_mini_light_large.svg)',
		label: 'Mac mini',
		width: '28px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_compare_large.svg)',
		label: 'Compare',
		width: '73px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_pro_display_light_large.svg)',
		label: 'Pro Display XDR',
		width: '46px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_accessories_light_large.svg)',
		label: 'Accessories',
		width: '33px',
		height: '54px',
		New: false
	},
	{
		url: 'url(./nav_images/mac_os_large.svg)',
		label: 'Big Sur',
		width: '35px',
		height: '54px',
		New: false
	}
];
const ProoductNavbar = () => {
	return (
		<AppBar
			component='nav'
			sx={{
				position: 'relative',
				bgcolor: 'rgba(245,245,247,0.6)',
				minHeight: '100px',
				py: '8px',
				overflow: 'hidden',
				flexDirection: 'row',
				justifyContent: 'center',
				boxShadow: 0
			}}>
			<Toolbar
				sx={{
					maxWidth: { tablet: '960px', laptop: '1380px' },
					width: '100%',
					minHeight: '100px',
					px: '34px',
					justifyContent: 'center'
				}}>
				<CustomSwipeableViews slideClassName='product-nav-item' slideStyle={{ width: null, overflow: null }}>
					{product_nav_link_description.map(({ label, url, width, height, New }) => (
						<ProductLink key={label}>
							<ProductIcon url={url} width={width} height={height} />
							<Typography variant='chapternav_label' sx={{ display: 'block' }}>
								{label}
							</Typography>
							{New === true ? <TypographyNew>New</TypographyNew> : null}
						</ProductLink>
					))}
				</CustomSwipeableViews>
				{/*Control button */}
				<Box
					sx={{
						color: '#1d1d1f',
						position: 'absolute',
						right: 0,
						top: 0,
						width: '34px',
						height: '100%',
						display: { mobile: 'flex', laptop: 'none' },
						alignItems: 'center',
						justifyContent: 'center',
						borderLeft: '1px solid #d2d2d7'
					}}>
					<KeyboardArrowRight />
				</Box>
				<Box
					sx={{
						color: '#1d1d1f',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '34px',
						height: '100%',
						display: { mobile: 'flex', laptop: 'none' },
						alignItems: 'center',
						justifyContent: 'center',
						borderRight: '1px solid #d2d2d7'
					}}>
					<KeyboardArrowLeft />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default ProoductNavbar;
