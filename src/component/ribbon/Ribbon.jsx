import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const RibbonWrapper = styled(Box, { name: 'ribbon-wrapper' })(({ theme }) => ({
	width: '100%',
	height: 'auto',
	color: '#1d1d1f',
	backgroundColor: '#f5f5f7',
	animation: `ribbon-drop 0.8s ${theme.transitions.easing.easeInOut} `,
	'@keyframes ribbon-drop': {
		from: { transform: 'translateY(-100%)', opacity: 0 },
		to: { transform: 'translateY(0px)', opacity: 1 }
	}
}));
const RibbonContent = styled(Box, { name: 'ribbon-content' })(({ theme }) => ({
	width: '100%',
	height: '100%',
	padding: '9px 34px',
	textAlign: 'center',
	backgroundColor: '#f5f5f7',
	display: 'flex',
	alignItems: 'flex-end',
	flexWrap: 'wrap',
	justifyContent: 'center',
	animation: `animate-background 5s ${theme.transitions.easing.easeInOut} `,
	'@keyframes animate-background': {
		from: { backgroundColor: '#0071e3', color: '#fff' },
		to: { backgroundColor: '#f5f5f7', color: '#1d1d1f' }
	}
}));
const LinkButton = styled(Button, { name: 'ribbon-learn-more' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: 0,
		...theme.typography.caption,
		display: 'inline-flex',
		alignItems: 'center',

		'& .MuiSvgIcon-root': {
			width: '9px',
			height: '12px'
		}
	}
}));
const Ribbon = () => {
	return (
		<RibbonWrapper>
			<RibbonContent>
				<Typography variant='caption' component='p'>
					Save on Mac for college with education pricing. And get AirPods.
					<LinkButton sx={{ ml: '8px' }} component='button' endIcon={<ArrowForwardIosIcon />}>
						shop now
					</LinkButton>
				</Typography>
			</RibbonContent>
		</RibbonWrapper>
	);
};

export default Ribbon;
