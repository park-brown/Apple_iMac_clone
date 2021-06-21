import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontSize: '17px',
					lineHeight: 1.47059,
					fontWeight: 400,
					letterSpacing: '-.022em',
					fontFamily: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
					backgroundColor: '#fff',
					color: '#1d1d1f',
					fontStyle: 'normal',
					margin: 0,
					padding: 0,
					minWidth: '320px'
				}
			}
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 733,
			laptop: 1068,
			desktop: 1440
		}
	},
	palette: {
		common: {
			button_background: '#0071e3',
			button_background_hover: '#0077ED',
			link: '#06c'
		}
	},
	spacing: 5
});
const fontSize = 17; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 17;
const coef = fontSize / 17;

// const theme = createMuiTheme({
//   typography: {
//     pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
//   },
// });
theme.typography = {
	pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
	body: {
		fontSize: '17px',
		lineHeight: 1.47059,
		fontWeight: 400,
		letterSpacing: '-.022em',
		fontStyle: 'normal',
		color: '#1d1d1f',
		fontFamily: ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
	},
	body_reduced: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '14px',
			lineHeight: 1.42859,
			fontWeight: 400,
			letterSpacing: '-.016em'
		}
	},
	h1: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h2: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h3: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h4: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h5: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h6: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	chapternav_label: {
		fontSize: '12px',
		lineHeight: 1.33337,
		fontWeight: 400,
		letterSpacing: '-.01em'
	},
	chapternav_new: {
		fontSize: '10px',
		lineHeight: 1.2,
		fontWeight: 400,
		letterSpacing: '-.008em',
		color: '#bf4800'
	},
	caption: {
		fontSize: '12px',
		lineHeight: 1.33337,
		fontWeight: 400,
		letterSpacing: '-.01em'
	},
	eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.21053,
			fontWeight: 600,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.19048,
			fontWeight: 600,
			letterSpacing: '.011em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '24px',
			lineHeight: 1.16667,
			fontWeight: 600,
			letterSpacing: '.009em'
		}
	},
	eyebrow_elevated: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '21px',
			lineHeight: 1.19048,
			fontWeight: 600,
			letterSpacing: '.011em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '24px',
			lineHeight: 1.16667,
			fontWeight: 600,
			letterSpacing: '.009em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '28px',
			lineHeight: 1.14286,
			fontWeight: 600,
			letterSpacing: '.007em'
		}
	},
	headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '32px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '40px',
			lineHeight: 1.1,
			fontWeight: 600,
			letterSpacing: '0em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '48px',
			lineHeight: 1.08349,
			fontWeight: 600,
			letterSpacing: '-.003em'
		}
	},
	section_headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '32px',
			lineHeight: 1.2,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '56px',
			lineHeight: 1.07143,
			fontWeight: 600,
			letterSpacing: '-.005em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '64px',
			lineHeight: 1.0625,
			fontWeight: 600,
			letterSpacing: '-.009em'
		}
	},
	tile_headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '30px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '32px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '48px',
			lineHeight: 1.08349,
			fontWeight: 600,
			letterSpacing: '-.003em'
		}
	},
	buystrip_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 600,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 600,
			letterSpacing: '.011em'
		}
	},
	button: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.17648,
			fontWeight: 400,
			letterSpacing: '-.022em'
		}
	},
	button_reduced: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '12px',
			lineHeight: 1.33337,
			fontWeight: 400,
			letterSpacing: '-.01em'
		}
	},
	hero_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	compare_all_cta: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '24px',
			lineHeight: 1.33341,
			fontWeight: 400,
			letterSpacing: '.009em'
		}
	},

	tout: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.21053,
			fontWeight: 600,
			letterSpacing: '.012em'
		}
	},
	tile_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	tabnav_link: {
		fontSize: '17px',
		lineHeight: 1,
		fontWeight: 400,
		letterSpacing: '-.021em'
	},
	cta_link: {
		fontSize: '19px',
		lineHeight: 1.4211,
		fontWeight: 400,
		letterSpacing: '.012em'
	},
	promo_intro: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '19px',
			lineHeight: 1.4211,
			fontWeight: 400,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	intro: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.4211,
			fontWeight: 400,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	}
};

export default theme;
