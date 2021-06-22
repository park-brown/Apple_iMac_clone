import { Box, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const DeviceBuyCell = styled(Box, { name: 'buy-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	// marginTop: '-15px',
	paddingBottom: '11px',
	paddingTop: '4px',
	borderBottom: '1px solid #d2d2d7',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	width: '100%'
}));
export const BuyButton = styled(Button)(({ theme }) => ({
	...theme.typography.button_reduced,
	padding: '4p 11px',
	margin: '-4px 0 18px 0',
	backgroundColor: theme.palette.common.button_background,
	borderRadius: '980px',
	color: '#fff',
	'&:hover': {
		backgroundColor: theme.palette.common.button_background_hover
	}
}));
