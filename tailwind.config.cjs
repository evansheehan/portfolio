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
					mid: '#bbb67f'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
