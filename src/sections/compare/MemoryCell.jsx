import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceMemoryCell = styled(Box, { name: 'device-chip-cell' })(({ gridArea, theme }) => ({
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
export const MemoryImage = styled('figure', { name: 'memory-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 11px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
