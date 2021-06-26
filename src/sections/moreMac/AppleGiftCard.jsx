import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../component/LinkButton/LinkButton';
const AppleGiftCard = () => {
	return (
		<Box
			className='apple-gift-card'
			sx={{
				width: '100%',

				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '100%', laptop: '100%' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#fafafa',
					color: '#1d1d1f',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%',
						maxHeight: '220px'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '45px auto 0 auto', tablet: '44px auto 0 auto', laptop: '68px auto 0 auto' },
							width: { mobile: '139px', tablet: '139px', laptop: '213px' },
							height: { mobile: '25px', tablet: '27px', laptop: '40px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/gift_card_logo_small_2x.png)',
								tablet: 'url(./more_iphone_section/gift_card_logo_medium_2x.png)',
								laptop: 'url(./more_iphone_section/gift_card_logo_large_2x.png)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0' }}>
						For everything and everyone.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<CustomButton>Learn more</CustomButton>
						<CustomButton>Buy</CustomButton>
					</Box>
				</Box>
				<Box
					component='figure'
					className='apple-gift-card-image'
					sx={{
						m: { mobile: '38px 0 56px -347px', tablet: '18px 0 28px -179px', laptop: '38px 0 55px -337.5px' },
						position: 'relative',
						left: '50%',
						width: { mobile: '694px', tablet: '358px', laptop: '675px' },
						height: { mobile: '247px', tablet: '169px', laptop: '319px' },
						backgroundImage: {
							mobile: 'url(./more_iphone_section/giftcard_tile_small_2x.jpg)',
							tablet: 'url(./more_iphone_section/giftcard_tile_medium_2x.jpg)',
							laptop: 'url(./more_iphone_section/giftcard_tile_large_2x.jpg)'
						},
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						minHeight: { tablet: '170px' }
					}}
				/>
			</Box>
		</Box>
	);
};

export default AppleGiftCard;
