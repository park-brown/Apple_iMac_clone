import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceBatteryCell = styled(Box, { name: 'device-battery-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '100%',
	margin: '0 auto',
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
export const BatteryImage = styled('figure', { name: 'battery-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
