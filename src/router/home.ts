const Home = () => import('@/pages/home/index.vue');

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: 'github趋势'
		}
	}
];

export default routes;
