import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceWeightCell = styled(Box, { name: 'device-weight-cell' })(({ gridArea, theme }) => ({
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
