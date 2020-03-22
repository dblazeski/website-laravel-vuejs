import Home from './views/Home'
import Websites from './views/Websites'
import WebsitesCreate from './views/WebsitesCreate'

export default {
	mode: 'history',

	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/websites',
			component: Websites,
			name: 'websites',
		},
		{
			path: '/websites/create',
			component: WebsitesCreate,
			name: 'websites-create',
		},
	],
}
