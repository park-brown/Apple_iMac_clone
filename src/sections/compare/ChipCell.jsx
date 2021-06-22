import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceChipCell = styled(Box, { name: 'device-chip-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '90%',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '100%'
	}
}));

export const ChipImage = styled('figure', { name: 'chip-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
