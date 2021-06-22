import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceCameraCell = styled(Box, { name: 'device-camera-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '0 0 0 0',
	width: '97%',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '97%'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '100%'
	}
}));
export const CameraImage = styled('figure', { name: 'camera-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 3px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
