import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
export const DeviceWrapper = styled(Box, { name: 'device-container' })(({ theme, gridArea }) => ({
	gridArea: gridArea
}));
export const ImageWrapper = styled(Box, { name: 'Image-wrapper' })(({ theme }) => ({
	marginBottom: '34px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	alignItems: 'center',
	[theme.breakpoints.up('tablet')]: {
		marginBottom: '40px'
	},
	[theme.breakpoints.up('laptop')]: {
		marginBottom: '48px'
	}
}));
export const Image = styled('figure', { name: 'device-image' })(({ theme, image }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: image.mobile.url,
		width: image.mobile.width,
		height: image.mobile.height,
		margin: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: image.tablet.url,
		width: image.tablet.width,
		height: image.tablet.height
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: image.laptop.url,
		width: image.laptop.width,
		height: image.laptop.height
	}
}));
export const DeviceContent = styled(Box, { name: 'device-content' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	position: 'relative'
}));
export const DeviceAvailableColor = styled('figure', { name: 'device-available-color' })(({ theme, image }) => ({
	margin: '16px 0px 14px 0px',
	height: image.height,
	width: image.width,
	backgroundImage: image.url,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		margin: '12px 0 10px 0'
	}
}));
