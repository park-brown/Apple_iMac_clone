import React from 'react';
import { Box, Typography, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import CustomButton from '../../component/LinkButton/LinkButton';
const SafariIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_safari_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const PhotosIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_photos_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const MovieIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_imovie_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const GarageIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_garageband_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const PageIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_pages_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const NumberIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_Numbers_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const KeynotesIcon = styled('figure', { name: 'icon-safari' })(({ theme }) => ({
	width: '48px',
	height: '59px',
	backgroundImage: 'url(./bulid_in_apps/nav_icon_keynote_large_2x.jpg)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	margin: '0 0 9px 0'
}));
const BulidInApps = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			component='section'
			className='build-in-apps-section'
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
							Built-in Apps
						</Typography>
						<Typography variant='body' component='p' sx={{ mt: '13.8px' }}>
							Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect,
							and work more efficiently.
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
											maxWidth: '630px',
											mx: 'auto'
										}
									}}>
									<Tab label='safari' value='1' icon={<SafariIcon />} />
									<Tab label='Photos' value='2' icon={<PhotosIcon />} />
									<Tab label='iMovie' value='3' icon={<MovieIcon />} />
									<Tab label='GarageBand' value='4' icon={<GarageIcon />} />
									<Tab label='Pages' value='5' icon={<PageIcon />} />
									<Tab label='Numbers' value='6' icon={<NumberIcon />} />
									<Tab label='Keynotes' value='7' icon={<KeynotesIcon />} />
								</TabList>
							</Box>
							<TabPanel value='1'>
								<Box className='safari-panel'>
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
											Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in
											privacy features help protect your information and keep your Mac secure. An updated start page
											helps you easily and quickly save, find, and share your favorite sites. And Siri suggestions
											surface bookmarks, links from your reading list, iCloud Tabs, links you receive in Messages, and
											more.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about safari</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='safari-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_safari_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_safari_medium_2x.jpg)',
													laptop: 'url(./bulid_in_apps/bia_safari_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='2'>
								<Box className='photo-panel'>
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
											Keep your growing library organized and accessible. Perfect your images and create beautiful gifts
											for sharing. And with iCloud Photos, you can store a lifetime’s worth of photos and videos in the
											cloud.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about photos</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='photo-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_photos_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_photos_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_photos_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='3'>
								<Box className='iMovie-panel'>
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
											Tell stories like never before. A simple design and intuitive editing features make it easy to
											create beautiful 4K movies and Hollywood-style trailers.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about iMovies</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='photo-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_imovie_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_imovie_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_imovie_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='4'>
								<Box className='band-panel'>
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
											The easiest way to create great-sounding songs on your Mac. With an intuitive interface and access
											to a complete sound library, it’s never been easier to learn, play, record, and share music like a
											pro.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about garage band</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='band-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_garageband_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_garageband_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_garageband_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='5'>
								<Box className='page-panel'>
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
											This powerful word processor gives you everything you need to create documents that look
											beautiful. And read beautifully. It lets you work seamlessly between Mac, iOS, and iPadOS devices.
											And work effortlessly with people who use Microsoft Word.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Pages</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='page-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_pages_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_pages_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_pages_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='6'>
								<Box className='number-panel'>
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
											Create sophisticated spreadsheets with dramatic interactive charts, tables, and images that paint
											a revealing picture of your data. Work seamlessly between Mac, iOS, and iPadOS devices. And work
											effortlessly with people who use Microsoft Excel.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about Numbers</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='number-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_numbers_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_numbers_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_numbers_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
											}}
										/>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value='7'>
								<Box className='keynote-panel'>
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
											Bring your ideas to life with beautiful presentations. Employ powerful tools and dazzling effects
											that keep your audience engaged. Work seamlessly between Mac, iOS, and iPadOS devices. And work
											effortlessly with people who use Microsoft PowerPoint.
										</Typography>
										<Box sx={{ mt: '13.6px' }} />
										<CustomButton>Learn more about keynotes</CustomButton>
									</Box>
									<Box
										className='gallery-image'
										sx={{
											position: 'relative',
											backgroundImage: {
												mobile: 'url(./bulid_in_apps/bia_hw_small_2x.jpg)',
												tablet: 'url(./bulid_in_apps/bia_hw_medium_2x.jpg)',
												laptop: 'url(./bulid_in_apps/bia_hw_large_2x.jpg)'
											},
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: { mobile: '266px', tablet: '476px', laptop: '608px' },
											height: { mobile: '225px', tablet: '402px', laptop: '514px' },
											mx: 'auto'
										}}>
										<Box
											className='number-image'
											sx={{
												position: 'absolute',
												top: { mobile: '10px', tablet: '10px', laptop: '13px' },
												left: { mobile: '8px', tablet: '14px', laptop: '16px' },
												backgroundImage: {
													mobile: 'url(./bulid_in_apps/bia_keynote_small.jpg)',
													tablet: 'url(./bulid_in_apps/bia_keynote_medium.jpg)',
													laptop: 'url(./bulid_in_apps/bia_keynote_large.jpg)'
												},
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												width: { mobile: '251px', tablet: '450px', laptop: '575px' },
												height: { mobile: '141px', tablet: '254px', laptop: '324px' }
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

export default BulidInApps;
// '#fbfbfd'
