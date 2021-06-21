import React from 'react';
import { Grid, Box, Typography, Tab, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import CustomButton from '../../component/LinkButton/LinkButton';
const NoteBookPanel = styled(TabPanel, { name: 'panel-for-notebook' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		maxWidth: '100%',
		width: '100%',
		padding: 0,
		margin: '-3px 0 0 0',
		display: 'grid',
		gap: '27px 10px',
		gridTemplateColumns: 'repeat(2, minmax(140px,1fr))',
		gridTemplateRows: 'repeat(22,auto)',
		gridTemplateAreas: `
    "mba-device         mbp13-device"
    "mba-buy            mbp13-buy"
    "mba-display        mbp13-display"
    "mba-chip           mbp13-chip"
    "mba-memory         mbp13-memory"
    "mba-storage        mbp13-storage"
    "mba-battery        mbp13-battery"
    "mba-camera         mbp13-camera"
    "mba-weight         mbp13-weight"
    "mba-keyboard       mbp13-keyboard"
    "mba-cta            mbp13-cta"
    "mbp16-device       ."
    "mbp16-buy          ."
    "mbp16-display      ."
    "mbp16-chip         ."
    "mbp16-memory       ."
    "mbp16-storage      ."
    "mbp16-battery      ."
    "mbp16-camera       ."
    "mbp16-weight       ."
    "mbp16-keyboard     ."
    "mbp16-cta          ."`
	},
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '694px',
		gap: '39px 8px',
		margin: '50px auto 0 auto',
		display: 'grid',
		gridTemplateRows: 'repeat(11, auto)',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateAreas: `
    "mba-device       mbp13-device       mbp16-device"
    "mba-buy          mbp13-buy          mbp16-buy"
    "mba-display      mbp13-display      mbp16-display"
    "mba-chip         mbp13-chip         mbp16-chip"
    "mba-memory       mbp13-memory       mbp16-memory"
    "mba-storage      mbp13-storage      mbp16-storage"
    "mba-battery      mbp13-battery      mbp16-battery"
    "mba-camera       mbp13-camera       mbp16-camera"
    "mba-weight       mbp13-weight       mbp16-weight"
    "mba-keyboard     mbp13-keyboard     mbp16-keyboard"
    "mba-cta          mbp13-cta          mbp16-cta"`
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '940px',
		gap: '38px 34px'
	}
}));
const DeviceWrapper = styled(Box, { name: 'device-container' })(({ theme, gridArea }) => ({
	gridArea: gridArea
}));
const ImageWrapper = styled(Box, { name: 'Image-wrapper' })(({ theme }) => ({
	marginBottom: '34px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	alignItems: 'center',
	[theme.breakpoints.up('tablet')]: {
		marginBottom: '40px'
	},
	[theme.breakpoints.up('laptop')]: {
		marginBottom: '48px'
	}
}));
const Image = styled('figure', { name: 'device-image' })(({ theme, image }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: image.mobile.url,
		width: image.mobile.width,
		height: image.mobile.height,
		margin: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: image.tablet.url,
		width: image.tablet.width,
		height: image.tablet.height
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: image.laptop.url,
		width: image.laptop.width,
		height: image.laptop.height
	}
}));
const DeviceContent = styled(Box, { name: 'device-content' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	position: 'relative'
}));
const DeviceAvailableColor = styled('figure', { name: 'device-available-color' })(({ theme, image }) => ({
	margin: '16px 0px 14px 0px',
	height: image.height,
	width: image.width,
	backgroundImage: image.url,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		margin: '12px 0 10px 0'
	}
}));
const DeviceBuyCell = styled(Box, { name: 'buy-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	marginTop: '15px',
	paddingBottom: '11px',
	paddingTop: '4px',
	borderBottom: '1px solid #d2d2d7',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	width: '100%'
}));
const BuyButton = styled(Button)(({ theme }) => ({
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
const DesktopPanel = styled(TabPanel, { name: 'panel-for-desktop' })(({ theme }) => ({}));
const Notebook__Descriptions = [
	//Macbook Air
	{
		gridAreas: {
			device_wrapper: 'mba-device ',
			buy_cell: 'mba-buy',
			display_cell: 'mba-display',
			chip_cell: 'mba-chip',
			memory_cell: 'mba-memory',
			storage_cell: 'mba-storage',
			battery_cell: 'mba-battery ',
			camera_cell: 'mba-camera ',
			weight_cell: 'mba-weight ',
			keyboard_cell: 'mba-keyboard ',
			cta_cell: 'mba-cta '
		},
		image: {
			mobile: { url: 'url(./compare/notebook/compare_mba_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/notebook/compare_mba_medium_2x.png)', width: '212px', height: '125px' },
			laptop: { url: 'url(./compare/notebook/compare_mba_large_2x.png)', width: '276px', height: '167px' }
		},
		device_content: {
			eyebrow: 'MacBook Air',
			priceTag: 'From $999',
			availableColor_logo: {
				url: 'url(./compare/notebook/mba_available_color_large_2x.png)',
				width: '70px',
				height: '19px'
			}
		}
	},
	//Macbook Pro 13
	{
		gridAreas: {
			device_wrapper: 'mbp13-device ',
			buy_cell: 'mbp13-buy',
			display_cell: 'mbp13-display',
			chip_cell: 'mbp13-chip',
			memory_cell: 'mbp13-memory',
			storage_cell: 'mbp13-storage',
			battery_cell: 'mbp13-battery ',
			camera_cell: 'mbp13-camera ',
			weight_cell: 'mbp13-weight ',
			keyboard_cell: 'mbp13-keyboard ',
			cta_cell: 'mbp13-cta '
		},
		image: {
			mobile: { url: 'url(compare/notebook/compare_mbp13_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(compare/notebook/compare_mbp13_medium_2x.png)', width: '212px', height: '125px' },
			laptop: { url: 'url(compare/notebook/compare_mbp13_large_2x.png)', width: '276px', height: '167px' }
		},
		device_content: {
			eyebrow: 'MacBook Pro 13”',
			priceTag: 'From $1299',
			availableColor_logo: {
				url: 'url(./compare/notebook/mbp13_available_color_large_2x.png)',
				width: '45px',
				height: '19px'
			}
		}
	},
	//Macbook Pro 16
	{
		gridAreas: {
			device_wrapper: 'mbp16-device ',
			buy_cell: 'mbp16-buy',
			display_cell: 'mbp16-display',
			chip_cell: 'mbp16-chip',
			memory_cell: 'mbp16-memory',
			storage_cell: 'mbp16-storage',
			battery_cell: 'mbp16-battery ',
			camera_cell: 'mbp16-camera ',
			weight_cell: 'mbp16-weight ',
			keyboard_cell: 'mbp16-keyboard ',
			cta_cell: 'mbp16-cta '
		},
		image: {
			mobile: { url: 'url(./compare/notebook/compare_mbp16_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/notebook/compare_mbp16_medium_2x.png)', width: '212px', height: '125px' },
			laptop: { url: 'url(./compare/notebook/compare_mbp16_large_2x.png)', width: '276px', height: '167px' }
		},
		device_content: {
			eyebrow: 'MacBook Pro 16”',
			priceTag: 'From $2399',
			availableColor_logo: {
				url: 'url(./compare/notebook/mbp16_available_color_large_2x.png)',
				width: '45px',
				height: '19px'
			}
		}
	}
];
const Compare = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Grid
			component='section'
			className='section-compare'
			sx={{
				width: '100%',
				p: { mobile: '86px 0 0 0', tablet: '92px 0 0 0', laptop: '110px 0 0 0' },
				overflow: 'hidden'
			}}>
			<Box
				className='section-content'
				sx={{ width: { mobile: '87.5%', tablet: '722px', laptop: '980px' }, mx: 'auto', textAlign: 'center' }}>
				<Typography component='h2' variant='headline'>
					Which Mac is right for you?
				</Typography>
				<Box sx={{ m: { mobile: '30px 0 41px 0', tablet: '30px 0 51px 0', laptop: '30px 0 62px 0' } }}>
					<CustomButton>Compare all Mac models</CustomButton>
				</Box>
				<Box className='compare-gallery' sx={{ width: '100%' }}>
					<TabContext value={value}>
						<TabList
							onChange={handleChange}
							aria-label='compare-section-gallery-tab-list'
							sx={{ '& .MuiTabs-flexContainer': { justifyContent: 'center' } }}>
							<Tab label='Notebook' value='1' />
							<Tab label='Desktop' value='2' />
						</TabList>

						<NoteBookPanel value='1'>
							{Notebook__Descriptions.map(({ gridAreas, image, device_content }) => (
								<React.Fragment key={gridAreas.device_wrapper}>
									<DeviceWrapper gridArea={gridAreas.device_wrapper}>
										<ImageWrapper>
											<Image image={image} />
										</ImageWrapper>
										<DeviceContent>
											<Typography
												variant='eyebrow'
												sx={{ mb: { mobile: '7.6px', tablet: '8.4px', laptop: '9.6px' }, minWidth: '161px' }}>
												{device_content.eyebrow}
											</Typography>
											<Typography variant='body_reduced'>{device_content.priceTag}</Typography>
											<DeviceAvailableColor image={device_content.availableColor_logo} />
										</DeviceContent>
										<DeviceBuyCell gridArea={gridAreas.buy_cell}>
											<BuyButton>Buy</BuyButton>
										</DeviceBuyCell>
									</DeviceWrapper>
								</React.Fragment>
							))}
						</NoteBookPanel>
						<DesktopPanel value='2'>Item Two</DesktopPanel>
					</TabContext>
				</Box>
			</Box>
		</Grid>
	);
};

export default Compare;
