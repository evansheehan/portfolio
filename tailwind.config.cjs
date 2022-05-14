const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					deep: '#000e00',
					mid: '#051605',
					light: '#214F25'
				},
				accent: {
					deep: '#a99732',
					mid: '#bbb67f',
					light: '#fffdc3'
				}
			},
			boxShadow: {
				'subtle-highlight':
					'4px 4px 6px -1px rgb(0 0 0 / 0.1), 2px 2px 4px -2px rgb(0 0 0 / 0.1), inset 1px 1px rgb(255 255 255 / 0.1)'
			}
		}
	},

	plugins: []
};

module.exports = config;
