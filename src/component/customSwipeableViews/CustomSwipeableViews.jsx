import SwipeableViews from 'react-swipeable-views';
import { styled } from '@material-ui/core/styles';

const CustomSwipeableViews = styled(SwipeableViews, { name: 'custom-swipeableViews' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100px',
		maxWidth: '100%',
		animation: `Slide-in ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut} 300ms `
	},
	'& .react-swipeable-view-container': {
		height: '100%',
		width: 'auto',
		alignItems: 'flex-start'
	},
	'& .product-nav-item': {
		display: 'inline-block',
		verticalAlign: 'top',
		margin: '0 -.11765em',
		padding: '0 20px',
		height: '80px',
		width: 'auto',
		'&:first-of-type': {
			paddingLeft: '4px'
		}
	},

	'@keyframes Slide-in': {
		from: { transform: 'translateX(200px)', opacity: 0 },
		to: { transform: 'translateX(0px)', opacity: 1 }
	}
}));

export default CustomSwipeableViews;
