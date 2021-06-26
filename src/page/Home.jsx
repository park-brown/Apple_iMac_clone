import React from 'react';
import AppHeader from '../component/Appbar/Appbar';
import ProductNavbar from '../component/productNav/ProductNavBar';
import { Grid } from '@material-ui/core';
import Ribbon from '../component/ribbon/Ribbon';
import Hero from '../sections/iMac_hero/Hero';
import Compare from '../sections/compare/Compare';
import RetailSection from '../sections/retail/RetailSection';
import BuystripSection from '../sections/buystrip/BuystripSection';
import WhatMakesMacSection from '../sections/whatmakesMac/WhatMakesMacSection';
import BulidInApps from '../sections/bulidiInApps/BulidInApps';
import ProApps from '../sections/ProApps/ProApps';
import MoreMac from '../sections/moreMac/MoreMac';
const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavbar />
			<Grid container component='main' sx={{ width: '100%' }}>
				<Ribbon />
				<Hero />
				<Compare />
				<RetailSection />
				<BuystripSection />
				<WhatMakesMacSection />
				<BulidInApps />
				<ProApps />
				<MoreMac />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
