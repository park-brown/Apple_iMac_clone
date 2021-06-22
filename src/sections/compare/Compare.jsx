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
	// marginTop: '-15px',
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
const DeviceDisplayCell = styled(Box, { name: 'device-display-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0'
}));
const FootNote = styled('sup')(() => ({
	top: 'initial',
	position: 'relative',
	verticalAlign: 'baseline',
	fontFeatureSettings: `'numr'`,
	fontSize: '1em'
}));
const DeviceChipCell = styled(Box, { name: 'device-chip-cell' })(({ gridArea, theme }) => ({
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

const ChipImage = styled('figure', { name: 'chip-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceMemoryCell = styled(Box, { name: 'device-chip-cell' })(({ gridArea, theme }) => ({
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
const MemoryImage = styled('figure', { name: 'memory-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 11px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceStorageCell = styled(Box, { name: 'device-storage-cell' })(({ gridArea, theme }) => ({
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
const DeviceBatteryCell = styled(Box, { name: 'device-battery-cell' })(({ gridArea, theme }) => ({
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
const BatteryImage = styled('figure', { name: 'battery-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceCameraCell = styled(Box, { name: 'device-camera-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '0 0 0 0',
	width: '97%',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '97%'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '100%'
	}
}));
const CameraImage = styled('figure', { name: 'camera-icon' })(({ icon }) => ({
	width: '48px',
	height: '44px',
	backgroundImage: icon,
	margin: '0 auto 3px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceWeightCell = styled(Box, { name: 'device-weight-cell' })(({ gridArea, theme }) => ({
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
const DeviceKeyBoardCell = styled(Box, { name: 'device-keyboard-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '100%',
	margin: '0 auto 6px auto',
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
const KeyboardImage = styled('figure', { name: 'camera-icon' })(
	({ theme, icon, width, height, margin, padding, backgroundSize }) => ({
		width: width.mobile,
		height: height.mobile,
		backgroundImage: icon,
		margin: margin,
		padding: padding,
		backgroundSize: backgroundSize.mobile,
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.up('tablet')]: {
			width: width.tablet,
			height: height.tablet,
			backgroundSize: backgroundSize.tablet
		},
		[theme.breakpoints.up('laptop')]: {
			width: width.laptop,
			height: height.laptop,
			backgroundSize: backgroundSize.laptop
		}
	})
);
const DeviceCtaCell = styled(Box, { name: 'device-keyboard-cell' })(({ gridArea, theme }) => ({
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
		},
		device_display: {
			h4: '13.3”',
			p: 'Retina display',
			footnote: '1'
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_m1_large_2x.png)',
			p1: 'Apple M1 chip'
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_unified_memory_large_2x.png)',
			p1: 'Up to 16GB unified memory',
			p2: 'For increased performance and power efficiency'
		},
		device_storage: {
			h4: '2TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},
		device_battery: {
			url: 'url(./compare/notebook/compare_icon_battery_large_2x.png)',
			p: 'Up to 18 hours battery life',
			footnote: '3'
		},
		device_camera: {
			url: 'url(./compare/notebook/compare_icon_camera_large_2x.png)',
			p1: '720p FaceTime HD camera',
			p2: 'With the image signal processor of M1 for drastically improved performance'
		},
		device_weight: {
			h4: '2.8 lb.',
			p: 'Weight'
		},
		device_keyboard: {
			url: 'url(./compare/notebook/compare_icon_touchid_large_2x.png)',
			width: { mobile: '48px', tablet: '48px', laptop: '48px' },
			height: { mobile: '44px', tablet: '44px', laptop: '48px' },
			backgroundSize: { mobile: 'cover', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 5px 0',
			margin: '0 auto 5px auto',
			p: 'Touch ID'
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
		},
		device_display: {
			h4: '13.3”',
			p: 'Retina display',
			footnote: '1'
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_m1_large_2x.png)',
			p1: 'Apple M1 chip',
			p2: 'Also available with Intel Core i5 or i7 processor'
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_unified_memory_large_2x.png)',
			p1: 'Up to 16GB unified memory',
			footnote: '4',
			p2: 'For increased performance and power efficiency'
		},
		device_storage: {
			h4: '2TB',
			p: 'Maximum configurable storage',
			footnote: '4'
		},
		device_battery: {
			url: 'url(./compare/notebook/compare_icon_battery_large_2x.png)',
			p: 'Up to 20 hours battery life',
			footnote: '5'
		},
		device_camera: {
			url: 'url(./compare/notebook/compare_icon_camera_large_2x.png)',
			p1: '720p FaceTime HD camera',
			p2: 'With the image signal processor of M1 for drastically improved performance'
		},
		device_weight: {
			h4: '3.0 lb.',
			p: 'Weight'
		},
		device_keyboard: {
			url: 'url(./compare/notebook/compare_icon_touchbar_large_2x.png)',
			width: { mobile: '165px', tablet: '165px', laptop: '165px' },
			height: { mobile: '38px', tablet: '38px', laptop: '38px' },
			backgroundSize: { mobile: 'contain', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 10px 0',
			margin: '0 auto 5px auto',
			p: 'Touch Bar and Touch ID'
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
		},
		device_display: {
			h4: '13.3”',
			p: 'Retina display',
			footnote: '1'
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_intel_large_2x.png)',
			p1: 'Up to Intel Core i9 processor'
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_memory_large_2x.png)',
			p1: 'Up to 16GB unified memory'
		},
		device_storage: {
			h4: '8TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},
		device_battery: {
			url: 'url(./compare/notebook/compare_icon_battery_large_2x.png)',
			p: 'Up to 11 hours battery life',
			footnote: '6'
		},
		device_camera: {
			url: 'url(./compare/notebook/compare_icon_camera_large_2x.png)',
			p1: '720p FaceTime HD camera',
			p2: ''
		},
		device_weight: {
			h4: '4.3 lb.',
			p: 'Weight'
		},
		device_keyboard: {
			url: 'url(./compare/notebook/compare_icon_touchbar_large_2x.png)',
			width: { mobile: '165px', tablet: '165px', laptop: '165px' },
			height: { mobile: '38px', tablet: '38px', laptop: '38px' },
			backgroundSize: { mobile: 'contain', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 10px 0',
			margin: '0 auto 5px auto',
			p: 'Touch Bar and Touch ID'
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
							{Notebook__Descriptions.map(
								({
									gridAreas,
									image,
									device_content,
									device_display,
									device_chip,
									device_memory,
									device_storage,
									device_battery,
									device_camera,
									device_weight,
									device_keyboard
								}) => (
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
										</DeviceWrapper>
										<DeviceBuyCell gridArea={gridAreas.buy_cell}>
											<BuyButton>Buy</BuyButton>
										</DeviceBuyCell>
										<DeviceDisplayCell gridArea={gridAreas.display_cell}>
											<Typography variant='eyebrow' component='h4'>
												{device_display.h4}
											</Typography>
											<Typography variant='body_reduced' component='p'>
												{device_display.p}
												<FootNote>{device_display.footnote}</FootNote>
											</Typography>
										</DeviceDisplayCell>
										<DeviceChipCell gridArea={gridAreas.chip_cell}>
											<ChipImage icon={device_chip.url} />
											<Typography variant='body_reduced' sx={{ width: '68%', mx: 'auto' }}>
												{device_chip.p1}
											</Typography>
											{device_chip.p2 ? (
												<Typography
													variant='body_reduced'
													sx={{ width: '68%', mx: 'auto', maxWidth: '200px', color: '#86868b' }}>
													{device_chip.p2}
												</Typography>
											) : null}
										</DeviceChipCell>
										<DeviceMemoryCell gridArea={gridAreas.memory_cell}>
											<MemoryImage icon={device_memory.url} />
											<Typography variant='body_reduced' sx={{ width: '88%', mx: 'auto' }}>
												{device_memory.p1}
												{device_memory.footnote ? <FootNote>{device_memory.footnote}</FootNote> : null}
											</Typography>
											<Typography
												variant='body_reduced'
												sx={{ width: '88%', mx: 'auto', maxWidth: '200px', color: '#86868b' }}>
												{device_memory.p2}
											</Typography>
										</DeviceMemoryCell>
										<DeviceStorageCell gridArea={gridAreas.storage_cell}>
											<Typography variant='eyebrow' component='h4' sx={{ mb: '5px' }}>
												{device_storage.h4}
											</Typography>
											<Typography variant='body_reduced' component='p' sx={{ mb: '5px' }}>
												{device_storage.p} <FootNote>{device_storage.footnote}</FootNote>
											</Typography>
										</DeviceStorageCell>
										<DeviceBatteryCell gridArea={gridAreas.battery_cell}>
											<BatteryImage icon={device_battery.url} />
											<Typography
												variant='body_reduced'
												sx={{ width: '88%', mx: 'auto', maxWidth: '200px', color: '#86868b' }}>
												{device_battery.p}
												<FootNote>{device_battery.footnote}</FootNote>
											</Typography>
										</DeviceBatteryCell>
										<DeviceCameraCell gridArea={gridAreas.camera_cell}>
											<CameraImage icon={device_camera.url} />
											<Typography
												variant='body_reduced'
												sx={{ width: { mobile: '77%', tablet: '100%', laptop: '97%' }, mx: 'auto' }}>
												{device_camera.p1}
											</Typography>
											<Typography
												variant='body_reduced'
												sx={{
													width: { mobile: '77%', tablet: '100%', laptop: '97%' },
													mx: 'auto',
													maxWidth: '200px',
													color: '#86868b'
												}}>
												{device_camera.p2}
											</Typography>
										</DeviceCameraCell>
										<DeviceWeightCell gridArea={gridAreas.weight_cell}>
											<Typography variant='eyebrow' component='h4' sx={{ mb: '4px' }}>
												{device_weight.h4}
											</Typography>
											<Typography variant='body_reduced' component='p'>
												{device_weight.p}
											</Typography>
										</DeviceWeightCell>
										<DeviceKeyBoardCell gridArea={gridAreas.keyboard_cell}>
											<KeyboardImage
												icon={device_keyboard.url}
												width={device_keyboard.width}
												height={device_keyboard.height}
												backgroundSize={device_keyboard.backgroundSize}
												margin={device_keyboard.margin}
												padding={device_keyboard.padding}
											/>
											<Typography
												variant='body_reduced'
												sx={{
													width: { mobile: '77%', tablet: '100%', laptop: '97%' },
													mx: 'auto',
													maxWidth: '200px',
													color: '#86868b'
												}}>
												{device_keyboard.p}
											</Typography>
										</DeviceKeyBoardCell>
										<DeviceCtaCell gridArea={gridAreas.cta_cell}>
											<CustomButton>learn more</CustomButton>
										</DeviceCtaCell>
									</React.Fragment>
								)
							)}
						</NoteBookPanel>
						<DesktopPanel value='2'>Item Two</DesktopPanel>
					</TabContext>
				</Box>
			</Box>
		</Grid>
	);
};

export default Compare;
