import React from 'react';
import AppHeader from '../component/Appbar/Appbar';
import ProductNavbar from '../component/productNav/ProductNavBar';
import { Grid } from '@material-ui/core';
import Ribbon from '../component/ribbon/Ribbon';
const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavbar />
			<Grid container component='main' sx={{ width: '100%' }}>
				<Ribbon />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
