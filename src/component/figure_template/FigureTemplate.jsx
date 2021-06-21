import React from 'react';
import { Box } from '@material-ui/core';
const FigureTemplate = () => {
	return (
		<Box sx={{ width: '100%', mt: '0.8em' }} className='image-wrapper'>
			<Box
				className='hero-image'
				component='figure'
				sx={{
					position: 'relative',
					left: '50%',

					width: { mobile: '322px', tablet: '738px', laptop: '1070px' },
					height: { mobile: '472px', tablet: '308px', laptop: '446px' },
					backgroundImage: {
						mobile: 'url(./hero/hero_imac_24_small_2x.jpg)',
						tablet: 'url(./hero/hero_imac_24_medium_2x.jpg)',
						laptop: 'url(./hero/hero_imac_24_large_2x.jpg)'
					},
					margin: { mobile: '20px 0 0 -161px', tablet: '27px 0 0 -369px', laptop: '32px 0 0 -535px' },
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}></Box>
		</Box>
	);
};

export default FigureTemplate;
