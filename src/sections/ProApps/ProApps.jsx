import React from 'react';
import { Box, Typography, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import CustomButton from '../../component/LinkButton/LinkButton';
const LogicProIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '43px',
	height: '49px',
	backgroundImage: 'url(./pro_apps/nav_icon_logicpro_large.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const MainStageIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '43px',
	height: '49px',
	backgroundImage: 'url(./pro_apps/nav_icon_mainstage_large.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const FinalCutProIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '43px',
	height: '49px',
	backgroundImage: 'url(./pro_apps/nav_icon_finalcut_large.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const MotionIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '43px',
	height: '49px',
	backgroundImage: 'url(./pro_apps/nav_icon_motion_large.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const CompressorIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '43px',
	height: '49px',
	backgroundImage: 'url(./pro_apps/nav_icon_compressor_large.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));

const ProApps = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			component='section'
			className='pro-apps-section'
			sx={{
				width: '100%',
				mt: { mobile: '15px', tablet: '25px', laptop: '30px' },
				pb: { mobile: '60px', tablet: '70px' }
			}}>
			<Box
				className='section-content'
				sx={{
					width: '100%',
					height: '100%',
					maxWidth: { mobile: '100%', tablet: '772px', laptop: '1440px' },
					mx: 'auto'
				}}>
				<Box
					className='gallery'
					sx={{
						height: '100%',
						backgroundColor: '#fbfbfd',
						maxWidth: { laptop: 'calc(91.6666% + 30px)', tablet: 'calc(83.333333% + 20px)', mobile: '100%' },
						mx: 'auto',
						display: 'flex',
						flexDirection: 'column'
					}}>
					<Box
						className='gallery-title'
						sx={{
							mx: 'auto',
							maxWidth: { laptop: '58.33333%', tablet: '75%', mobile: '100%' },
							textAlign: 'center',
							p: { mobile: '0 20px', tablet: 0 }
						}}>
						<Typography variant='section_headline' component='h2' sx={{ pt: { laptop: '75px', mobile: '37px' } }}>
							Pro Apps
						</Typography>
						<Typography variant='body' component='p' sx={{ mt: '13.8px' }}>
							For professionals ready to push their creativity, these industry-leading apps offer maximum control over
							editing, processing, and output of music and film.
						</Typography>
					</Box>
					<Box className='gallery-container' sx={{ p: { mobile: '32px 0 82px 0', tablet: '32px 0 0 0', flexGrow: 1 } }}>
						<TabContext value={value}>
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList
									onChange={handleChange}
									aria-label='lab API tabs example'
									variant='scrollable'
									scrollButtons='auto'
									sx={{
										'& .MuiTabs-flexContainer': {
											maxWidth: '450px',
											mx: 'auto'
										}
									}}>
									<Tab label='Logic Pro' value='1' icon={<LogicProIcon />} />
									<Tab label='MainStage' value='2' icon={<MainStageIcon />} />
									<Tab label='Final Cut Pro' value='3' icon={<FinalCutProIcon />} />
									<Tab label='Motion' value='4' icon={<MotionIcon />} />
									<Tab label='Compressor' value='5' icon={<CompressorIcon />} />
								</TabList>
							</Box>
							<TabPanel value='1'>
								<Box className='Logic-pro-panel'>
									<Box className='title-container' sx={{ m: ' 34px 0 66px 0', textAlign: 'center' }}>
										<Typography
											variant='caption'
											component='p'
											sx={{
												p: { mobile: '0 20px', tablet: '0 34px', laptop: '0 80px' },
												maxWidth: '700px',
												mx: 'auto',
												textAlign: 'left'
											}}>
											Logic Pro puts a complete recording and MIDI production studio on your Mac, with everything you
											need to write, record, edit, and mix like never before. And with a huge collection of
											full-featured plug-ins along with thousands of sounds and loops, you’ll have everything you need
											to go from first inspiration to final master, no matter what kind of music you want to create.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Logic Pro</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./pro_apps/gallery_hw_small.png)',
												tablet: 'url(./pro_apps/gallery_hw_medium.png)',
												laptop: 'url(./pro_apps/gallery_hw_large.png)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '307px', tablet: '504px', laptop: '625px' },
											height: { mobile: '179px', tablet: '315px', laptop: '364px' },
											mx: 'auto'
										}}>
										<Box
											className='logic-pro-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '16px', laptop: '13px' },
												left: { mobile: '36px', tablet: '62px', laptop: '72px' },
												backgroundImage: {
													mobile: 'url(./pro_apps/pro_logicpro_small.jpg)',
													tablet: 'url(./pro_apps/pro_logicpro_medium.jpg)',
													laptop: 'url(./pro_apps/pro_logicpro_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '235px', tablet: '415px', laptop: '479px' },
												height: { mobile: '147px', tablet: '260px', laptop: '300px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='2'>
								<Box className='main-stage-panel'>
									<Box className='title-container' sx={{ m: ' 34px 0 66px 0', textAlign: 'center' }}>
										<Typography
											variant='caption'
											component='p'
											sx={{
												p: { mobile: '0 20px', tablet: '0 34px', laptop: '0 80px' },
												maxWidth: '700px',
												mx: 'auto',
												textAlign: 'left'
											}}>
											Take your Mac to the stage with a full-screen interface optimized for live performance, flexible
											hardware control, and a massive collection of plug-ins and sounds that are fully compatible with
											Logic Pro.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Main Stage</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./pro_apps/gallery_hw_small.png)',
												tablet: 'url(./pro_apps/gallery_hw_medium.png)',
												laptop: 'url(./pro_apps/gallery_hw_large.png)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '307px', tablet: '504px', laptop: '625px' },
											height: { mobile: '179px', tablet: '315px', laptop: '364px' },
											mx: 'auto'
										}}>
										<Box
											className='photo-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '16px', laptop: '13px' },
												left: { mobile: '36px', tablet: '62px', laptop: '72px' },
												backgroundImage: {
													mobile: 'url(./pro_apps/pro_mainstage_small.jpg)',
													tablet: 'url(./pro_apps/pro_mainstage_medium.jpg)',
													laptop: 'url(./pro_apps/pro_mainstage_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '235px', tablet: '415px', laptop: '479px' },
												height: { mobile: '147px', tablet: '260px', laptop: '300px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='3'>
								<Box className='final-cut-pro-panel'>
									<Box className='title-container' sx={{ m: ' 34px 0 66px 0', textAlign: 'center' }}>
										<Typography
											variant='caption'
											component='p'
											sx={{
												p: { mobile: '0 20px', tablet: '0 34px', laptop: '0 80px' },
												maxWidth: '700px',
												mx: 'auto',
												textAlign: 'left'
											}}>
											Built to meet the needs of today’s creative editors, Final Cut Pro offers revolutionary video
											editing, powerful media organization, and incredible performance optimized for Mac computers and
											macOS Big Sur.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Final Cut Pro</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./pro_apps/gallery_hw_small.png)',
												tablet: 'url(./pro_apps/gallery_hw_medium.png)',
												laptop: 'url(./pro_apps/gallery_hw_large.png)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '307px', tablet: '504px', laptop: '625px' },
											height: { mobile: '179px', tablet: '315px', laptop: '364px' },
											mx: 'auto'
										}}>
										<Box
											className='photo-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '16px', laptop: '13px' },
												left: { mobile: '36px', tablet: '62px', laptop: '72px' },
												backgroundImage: {
													mobile: 'url(./pro_apps/pro_finalcut_small.jpg)',
													tablet: 'url(./pro_apps/pro_finalcut_medium.jpg)',
													laptop: 'url(./pro_apps/pro_finalcut_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '235px', tablet: '415px', laptop: '479px' },
												height: { mobile: '147px', tablet: '260px', laptop: '300px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='4'>
								<Box className='motion-panel'>
									<Box className='title-container' sx={{ m: ' 34px 0 66px 0', textAlign: 'center' }}>
										<Typography
											variant='caption'
											component='p'
											sx={{
												p: { mobile: '0 20px', tablet: '0 34px', laptop: '0 80px' },
												maxWidth: '700px',
												mx: 'auto',
												textAlign: 'left'
											}}>
											Motion is a powerful motion graphics tool that makes it easy to create cinematic 2D and 3D titles,
											fluid transitions, and realistic effects in real time.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about motion</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./pro_apps/gallery_hw_small.png)',
												tablet: 'url(./pro_apps/gallery_hw_medium.png)',
												laptop: 'url(./pro_apps/gallery_hw_large.png)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '307px', tablet: '504px', laptop: '625px' },
											height: { mobile: '179px', tablet: '315px', laptop: '364px' },
											mx: 'auto'
										}}>
										<Box
											className='band-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '16px', laptop: '13px' },
												left: { mobile: '36px', tablet: '62px', laptop: '72px' },
												backgroundImage: {
													mobile: 'url(./pro_apps/pro_motion_small.jpg)',
													tablet: 'url(./pro_apps/pro_motion_medium.jpg)',
													laptop: 'url(./pro_apps/pro_motion_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '235px', tablet: '415px', laptop: '479px' },
												height: { mobile: '147px', tablet: '260px', laptop: '300px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='5'>
								<Box className='compressor-panel'>
									<Box className='title-container' sx={{ m: ' 34px 0 66px 0', textAlign: 'center' }}>
										<Typography
											variant='caption'
											component='p'
											sx={{
												p: { mobile: '0 20px', tablet: '0 34px', laptop: '0 80px' },
												maxWidth: '700px',
												mx: 'auto',
												textAlign: 'left'
											}}>
											Add power and flexibility for exporting projects from Final Cut Pro. Customize output settings,
											work faster with distributed encoding, and easily package your film for the iTunes Store.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Compressor</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./pro_apps/gallery_hw_small.png)',
												tablet: 'url(./pro_apps/gallery_hw_medium.png)',
												laptop: 'url(./pro_apps/gallery_hw_large.png)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '307px', tablet: '504px', laptop: '625px' },
											height: { mobile: '179px', tablet: '315px', laptop: '364px' },
											mx: 'auto'
										}}>
										<Box
											className='compressor-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '16px', laptop: '13px' },
												left: { mobile: '36px', tablet: '62px', laptop: '72px' },
												backgroundImage: {
													mobile: 'url(./pro_apps/pro_compressor_small.jpg)',
													tablet: 'url(./pro_apps/pro_compressor_medium.jpg)',
													laptop: 'url(./pro_apps/pro_compressor_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '235px', tablet: '415px', laptop: '479px' },
												height: { mobile: '147px', tablet: '260px', laptop: '300px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
						</TabContext>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ProApps;
