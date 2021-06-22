import React from 'react';
import { Grid, Box, Typography, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import CustomButton from '../../component/LinkButton/LinkButton';
import { Notebook__Descriptions } from './notebook_description';
import { DeviceWrapper, ImageWrapper, Image, DeviceContent, DeviceAvailableColor } from './DeviceCell';
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

const DesktopPanel = styled(TabPanel, { name: 'panel-for-desktop' })(({ theme }) => ({}));

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
