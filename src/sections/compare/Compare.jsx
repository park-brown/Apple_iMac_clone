import React from 'react';
import { Grid, Box, Typography, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import CustomButton from '../../component/LinkButton/LinkButton';
import { Notebook__Descriptions } from './notebook_description';
import {
	DeviceWrapper,
	ImageWrapper,
	Image,
	DeviceContent,
	DeviceAvailableColor,
	DeviceAvailableColorForDesktop
} from './DeviceCell';
import { DeviceBuyCell, BuyButton } from './BuyCell';
import { DeviceDisplayCell } from './DisplayCell';
import { DeviceChipCell, ChipImage } from './ChipCell';
import { DeviceMemoryCell, MemoryImage } from './MemoryCell';
import { DeviceStorageCell } from './StorageCell';
import { DeviceBatteryCell, BatteryImage } from './BatteryCell';
import { DeviceCameraCell, CameraImage } from './CameraCell';
import { DeviceWeightCell } from './WeightCell';
import { DeviceKeyBoardCell, KeyboardImage } from './KeyBoardCell';
import { DeviceCtaCell } from './CallToActionCell';

const NoteBookPanel = styled(TabPanel, { name: 'panel-for-notebook' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		'&[hidden]': {
			display: 'none'
		},
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

const FootNote = styled('sup')(() => ({
	top: 'initial',
	position: 'relative',
	verticalAlign: 'baseline',
	fontFeatureSettings: `'numr'`,
	fontSize: '1em'
}));

const DesktopPanel = styled(TabPanel, { name: 'panel-for-desktop' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		'&[hidden]': {
			display: 'none'
		},
		maxWidth: '500px',
		width: '100%',
		padding: 0,
		margin: '39px auto 0 auto',
		display: 'grid',
		gap: '27px 10px',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(18,auto)',
		gridTemplateAreas: `
		"imac24-device             imac27-device"
     "imac24-buy               imac27-buy"
     "imac24-display           imac27-display"
     "imac24-chip              imac27-chip"
     "imac24-memory            imac27-memory"
     "imac24-storage           imac27-storage"
     "imac24-camera            imac27-camera"
     "imac24-keyboard          imac27-keyboard"
     "imac24-cta               imac27-cta"
     "macpro-device            macmini-device"
     "macpro-buy               macmini-buy"
     "macpro-display           macmini-display"
     "macpro-chip              macmini-chip"
     "macpro-memory            macmini-memory"
     "macpro-storage           macmini-storage"
     "macpro-camera            macmini-camera"
     "macpro-keyboard          macmini-keyboard"
     "macpro-cta               macmini-cta"`
	},
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '500px',
		gap: '39px 78px',
		margin: '50px auto 0 auto',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(18, auto)',
		gridTemplateAreas: `
		 "imac24-device             imac27-device"
     "imac24-buy               imac27-buy"
     "imac24-display           imac27-display"
     "imac24-chip              imac27-chip"
     "imac24-memory            imac27-memory"
     "imac24-storage           imac27-storage"
     "imac24-camera            imac27-camera"
     "imac24-keyboard          imac27-keyboard"
     "imac24-cta               imac27-cta"
     "macpro-device            macmini-device"
     "macpro-buy               macmini-buy"
     "macpro-display           macmini-display"
     "macpro-chip              macmini-chip"
     "macpro-memory            macmini-memory"
     "macpro-storage           macmini-storage"
     "macpro-camera            macmini-camera"
     "macpro-keyboard          macmini-keyboard"
     "macpro-cta               macmini-cta"`
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '940px',
		gap: '38px 34px',
		margin: '72px auto 0 auto',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(9, auto)',
		gridTemplateAreas: `"imac24-device   imac27-device     macpro-device       macmini-device"
		                    "imac24-buy      imac27-buy        macpro-buy          macmini-buy"
		                    "imac24-display  imac27-display    macpro-display      macmini-display"
		                    "imac24-chip     imac27-chip       macpro-chip         macmini-chip"
		                    "imac24-memory   imac27-memory     macpro-memory       macmini-memory"
		                    "imac24-storage  imac27-storage    macpro-storage      macmini-storage"
		                    "imac24-camera   imac27-camera     macpro-camera       macmini-camera"
		                    "imac24-keyboard imac27-keyboard   macpro-keyboard     macmini-keyboard"
		                    "imac24-cta      imac27-cta        macpro-cta          macmini-cta"`
	}
}));
export const Desktop__Descriptions = [
	//imac24
	{
		gridAreas: {
			device_wrapper: 'imac24-device',
			buy_cell: 'imac24-buy',
			display_cell: 'imac24-display',
			chip_cell: 'imac24-chip',
			memory_cell: 'imac24-memory',
			storage_cell: 'imac24-storage',
			camera_cell: 'imac24-camera ',
			keyboard_cell: 'imac24-keyboard ',
			cta_cell: 'imac24-cta '
		},
		image: {
			mobile: { url: 'url(./compare/desktop/compare_imac24_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/desktop/compare_imac24_large_2x.png)', width: '203px', height: '167px' },
			laptop: { url: 'url(./compare/desktop/compare_imac24_large_2x.png)', width: '203px', height: '167px' }
		},
		device_content: {
			eyebrow: 'iMac 24”',
			priceTag: 'From $1299',
			availableColor_logo: {
				url: {
					mobile: 'url(./compare/desktop/compare_swatches_multicolor_small_2x.png)',
					tablet: 'url(./compare/desktop/compare_swatches_multicolor_large_2x.png)'
				},
				width: { mobile: '97px', tablet: '175px' },
				height: { mobile: '44px', tablet: '19px' }
			}
		},
		device_display: {
			available: true,
			h4: '4.5K',
			p1: 'Retina display',
			p2: '218 ppi',
			footnote: '7'
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_m1_large_2x.png)',
			p1: 'Apple M1 chip',
			p2: ''
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_unified_memory_large_2x.png)',
			p1: 'Up to 16GB unified memory',
			p2: 'For increased performance and power efficiency',
			footnote: ''
		},
		device_storage: {
			h4: '2TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},
		device_camera: {
			available: true,
			url: 'url(./compare/notebook/compare_icon_camera_large_2x.png)',
			p1: '1080p FaceTime HD camera',
			p2: 'With the image signal processor of M1 for drastically improved performance'
		},
		device_keyboard: {
			available: true,
			url: 'url(./compare/desktop/compare_icon_imac24_keyboard_large_2x.png)',
			width: { mobile: '48px', tablet: '48px', laptop: '48px' },
			height: { mobile: '44px', tablet: '44px', laptop: '48px' },
			backgroundSize: { mobile: 'cover', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 4px 0',
			margin: '0 auto 5px auto',
			p: 'Configurable with Magic Keyboard with Touch ID and Numeric Keypad'
		}
	},
	//imac27
	{
		gridAreas: {
			device_wrapper: 'imac27-device',
			buy_cell: 'imac27-buy',
			display_cell: 'imac27-display',
			chip_cell: 'imac27-chip',
			memory_cell: 'imac27-memory',
			storage_cell: 'imac27-storage',
			camera_cell: 'imac27-camera ',
			keyboard_cell: 'imac27-keyboard ',
			cta_cell: 'imac27-cta '
		},
		image: {
			mobile: { url: 'url(./compare/desktop/compare_imac27_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/desktop/compare_imac27_large_2x.png)', width: '203px', height: '167px' },
			laptop: { url: 'url(./compare/desktop/compare_imac27_large_2x.png)', width: '203px', height: '167px' }
		},
		device_content: {
			eyebrow: 'iMac 27”',
			priceTag: 'From $1799',
			availableColor_logo: {
				url: {
					mobile: 'url(./compare/desktop/compare_swatches_one_color_large.png)',
					tablet: 'url(./compare/desktop/compare_swatches_one_color_large.png)'
				},
				width: { mobile: '19px', tablet: '19px' },
				height: { mobile: '19px', tablet: '19px' }
			}
		},
		device_display: {
			available: true,
			h4: '4.5K',
			p1: 'Retina display',
			p2: '218 ppi',
			footnote: '1'
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_intel_large_2x.png)',
			p1: 'Up to Intel Core i9 processor',
			p2: '',
			footnote: ''
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_memory_large_2x.png)',
			p1: 'Up to 128GB memory'
		},
		device_storage: {
			h4: '8TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},

		device_camera: {
			available: true,
			url: 'url(./compare/notebook/compare_icon_camera_large_2x.png)',
			p1: '1080p FaceTime HD camera',
			p2: ''
		},

		device_keyboard: {
			available: true,

			url: 'url(./compare/desktop/compare_icon_keyboard_large.png)',
			width: { mobile: '144px', tablet: '144px', laptop: '144px' },
			height: { mobile: '44px', tablet: '44px', laptop: '44px' },
			backgroundSize: { mobile: 'cover', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 4px 0',
			margin: '0 auto 5px auto',
			p: 'Configurable with Magic Keyboard with Numeric Keypad'
		}
	},
	//mac-pro
	{
		gridAreas: {
			device_wrapper: 'macpro-device',
			buy_cell: 'macpro-buy',
			display_cell: 'macpro-display',
			chip_cell: 'macpro-chip',
			memory_cell: 'macpro-memory',
			storage_cell: 'macpro-storage',
			camera_cell: 'macpro-camera ',
			keyboard_cell: 'macpro-keyboard ',
			cta_cell: 'macpro-cta '
		},
		image: {
			mobile: { url: 'url(./compare/desktop/compare_macpro_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/desktop/compare_macpro_large_2x.png)', width: '203px', height: '167px' },
			laptop: { url: 'url(./compare/desktop/compare_macpro_large_2x.png)', width: '203px', height: '167px' }
		},
		device_content: {
			eyebrow: 'Mac Pro',
			priceTag: 'From $5999',
			availableColor_logo: {
				url: {
					mobile: 'url(./compare/desktop/compare_swatches_one_color_large.png)',
					tabelt: 'url(./compare/desktop/compare_swatches_one_color_large.png)'
				},
				width: { mobile: '19px', tablet: '19px' },
				height: { mobile: '19px', tablet: '19px' }
			}
		},
		device_display: {
			available: false
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_intel_large_2x.png)',
			p1: 'Intel Xeon W processor',
			p2: ''
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_memory_large_2x.png)',
			p1: 'Up to 1.5TB memory',
			p2: '',
			footnote: ''
		},
		device_storage: {
			h4: '8TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},

		device_camera: {
			available: false
		},

		device_keyboard: {
			available: true,
			url: 'url(./compare/desktop/compare_icon_keyboard_large.png)',
			width: { mobile: '144px', tablet: '144px', laptop: '144px' },
			height: { mobile: '44px', tablet: '44px', laptop: '44px' },
			backgroundSize: { mobile: 'cover', tablet: 'cover', laptop: 'cover' },
			padding: '0 0 4px 0',
			margin: '0 auto 5px auto',
			p: 'Magic Keyboard with Numeric Keypad'
		}
	},
	//mac-mini
	{
		gridAreas: {
			device_wrapper: 'macmini-device',
			buy_cell: 'macmini-buy',
			display_cell: 'macmini-display',
			chip_cell: 'macmini-chip',
			memory_cell: 'macmini-memory',
			storage_cell: 'macmini-storage',
			camera_cell: 'macmini-camera ',
			keyboard_cell: 'macmini-keyboard ',
			cta_cell: 'macmini-cta '
		},
		image: {
			mobile: { url: 'url(./compare/desktop/compare_macmini_small_2x.png)', width: '138px', height: '113px' },
			tablet: { url: 'url(./compare/desktop/compare_macmini_large_2x.png)', width: '203px', height: '167px' },
			laptop: { url: 'url(./compare/desktop/compare_macmini_large_2x.png)', width: '203px', height: '167px' }
		},
		device_content: {
			eyebrow: 'Mac mini',
			priceTag: 'From $699',
			availableColor_logo: {
				url: {
					mobile: 'url(./compare/desktop/compare_swatches_two_colors_mac_mini_large_2x.png)',
					tablet: 'url(./compare/desktop/compare_swatches_two_colors_mac_mini_large_2x.png)'
				},
				width: { mobile: '45px', tablet: '45px' },
				height: { mobile: '19px', tablet: '19px' }
			}
		},
		device_display: {
			available: false
		},
		device_chip: {
			url: 'url(./compare/notebook/compare_icon_m1_large_2x.png)',
			p1: 'Apple M1 chip',
			p2: 'Also available with Intel Core i5 or i7 processor'
		},
		device_memory: {
			url: 'url(./compare/notebook/compare_icon_unified_memory_large_2x.png)',
			p1: 'Up to 16GB unified memory',
			p2: 'For increased performance and power efficiency',
			footnote: '8'
		},
		device_storage: {
			h4: '2TB',
			p: 'Maximum configurable storage',
			footnote: '2'
		},

		device_camera: {
			available: false
		},

		device_keyboard: {
			available: false
		}
	}
];

const Compare = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const NotAvailable = (
		<Typography variant='body_reduced' sx={{ display: 'block', color: '#86868b' }}>
			——
		</Typography>
	);
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
						<DesktopPanel value='2'>
							{Desktop__Descriptions.map(
								({
									gridAreas,
									image,
									device_content,
									device_display,
									device_chip,
									device_memory,
									device_storage,
									device_camera,
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
												<DeviceAvailableColorForDesktop image={device_content.availableColor_logo} />
											</DeviceContent>
										</DeviceWrapper>
										<DeviceBuyCell gridArea={gridAreas.buy_cell}>
											<BuyButton>Buy</BuyButton>
										</DeviceBuyCell>
										<DeviceDisplayCell gridArea={gridAreas.display_cell}>
											{device_display.available === true ? (
												<React.Fragment>
													<Typography variant='eyebrow' component='h4'>
														{device_display.h4}
													</Typography>
													<Typography variant='body_reduced' component='p'>
														{device_display.p1}
														<FootNote>{device_display.footnote}</FootNote>
													</Typography>
													<Typography variant='body_reduced' component='p' sx={{ color: '#86868b' }}>
														{device_display.p2}
													</Typography>
												</React.Fragment>
											) : (
												NotAvailable
											)}
										</DeviceDisplayCell>
										<DeviceChipCell gridArea={gridAreas.chip_cell}>
											<ChipImage icon={device_chip.url} />
											<Typography variant='body_reduced' sx={{ width: '68%', mx: 'auto' }}>
												{device_chip.p1}
											</Typography>
											<Typography
												variant='body_reduced'
												sx={{ width: '68%', mx: 'auto', maxWidth: '200px', color: '#86868b' }}>
												{device_chip.p2}
											</Typography>
										</DeviceChipCell>
										<DeviceMemoryCell gridArea={gridAreas.memory_cell}>
											<MemoryImage icon={device_memory.url} />
											<Typography variant='body_reduced' sx={{ width: '88%', mx: 'auto' }}>
												{device_memory.p1}
												<FootNote>{device_memory.footnote}</FootNote>
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
											<Typography variant='body_reduced' component='p' sx={{ mb: '5px', color: '#86868b' }}>
												{device_storage.p} <FootNote>{device_storage.footnote}</FootNote>
											</Typography>
										</DeviceStorageCell>
										<DeviceCameraCell gridArea={gridAreas.camera_cell}>
											{device_camera.available === true ? (
												<React.Fragment>
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
												</React.Fragment>
											) : (
												<Box
													sx={{
														width: '100%',
														height: '100%',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}>
													<Typography variant='body_reduced' sx={{ display: 'block', color: '#86868b' }}>
														——
													</Typography>
												</Box>
											)}
										</DeviceCameraCell>
										<DeviceKeyBoardCell gridArea={gridAreas.keyboard_cell}>
											{device_keyboard.available === true ? (
												<React.Fragment>
													<KeyboardImage
														icon={device_keyboard.url}
														width={device_keyboard.width}
														height={device_keyboard.height}
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
												</React.Fragment>
											) : (
												<Box
													sx={{
														width: '100%',
														height: '100%',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}>
													<Typography variant='body_reduced' sx={{ display: 'block', color: '#86868b' }}>
														——
													</Typography>
												</Box>
											)}
										</DeviceKeyBoardCell>
										<DeviceCtaCell gridArea={gridAreas.cta_cell}>
											<CustomButton>learn more</CustomButton>
										</DeviceCtaCell>
									</React.Fragment>
								)
							)}
						</DesktopPanel>
					</TabContext>
				</Box>
			</Box>
		</Grid>
	);
};

export default Compare;
