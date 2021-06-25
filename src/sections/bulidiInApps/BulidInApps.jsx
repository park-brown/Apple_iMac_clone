import React from 'react';
import { Box, Typography, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

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
			sx={{ width: '100%', height: '100vh', mt: { mobile: '15px', tablet: '25px', laptop: '30px' } }}>
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
									scrollButtons='auto'>
									<Tab label='safari' value='1' icon={<SafariIcon />} />
									<Tab label='Photos' value='2' icon={<PhotosIcon />} />
									<Tab label='iMovie' value='3' icon={<MovieIcon />} />
									<Tab label='GarageBand' value='4' icon={<GarageIcon />} />
									<Tab label='Pages' value='5' icon={<PageIcon />} />
									<Tab label='Numbers' value='6' icon={<NumberIcon />} />
									<Tab label='Keynotes' value='7' icon={<KeynotesIcon />} />
								</TabList>
							</Box>
							<TabPanel value='1'>Item One</TabPanel>
							<TabPanel value='2'>Item Two</TabPanel>
							<TabPanel value='3'>Item Three</TabPanel>
						</TabContext>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default BulidInApps;
// '#fbfbfd'
