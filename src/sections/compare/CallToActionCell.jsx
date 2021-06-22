import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceCtaCell = styled(Box, { name: 'device-keyboard-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '22px 0 12px 0',
	width: '100%',
	margin: '0 auto 0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	borderTop: '1px solid #d2d2d7',
	[theme.breakpoints.up('tablet')]: {
		width: '90%',
		padding: '22px 0 74px 0'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '100%',
		padding: '22px 0 0 0'
	}
}));
