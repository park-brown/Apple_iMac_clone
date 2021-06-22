import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceDisplayCell = styled(Box, { name: 'device-display-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0'
}));
