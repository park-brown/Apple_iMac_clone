import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceKeyBoardCell = styled(Box, { name: 'device-keyboard-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '100%',
	margin: '0 auto 6px auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '90%'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '100%'
	}
}));
export const KeyboardImage = styled('figure', { name: 'camera-icon' })(
	({ theme, icon, width, height, margin, padding }) => ({
		width: width.mobile,
		height: height.mobile,
		backgroundImage: icon,
		margin: margin,
		padding: padding,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.up('tablet')]: {
			width: width.tablet,
			height: height.tablet
		},
		[theme.breakpoints.up('laptop')]: {
			width: width.laptop,
			height: height.laptop
		}
	})
);
