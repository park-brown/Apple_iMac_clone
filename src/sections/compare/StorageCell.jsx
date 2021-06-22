import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceStorageCell = styled(Box, { name: 'device-storage-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '53%',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '94%',
		margin: '-5px auto 0 auto'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '95%',
		margin: '0 auto'
	}
}));
