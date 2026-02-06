export const MENU_API_URL = 'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.252318221261632&lng=75.70347367317582&restaurantId=';

export const CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/';

// Inline SVG data URI used as a local placeholder to avoid external network lookup failures
export const PLACEHOLDER_IMG =
	"data:image/svg+xml;utf8," +
	encodeURIComponent(`
		<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
			<rect width='100%' height='100%' fill='#f0f0f0' />
			<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#666' font-family='Arial, Helvetica, sans-serif' font-size='12'>No Image</text>
		</svg>
	`);
