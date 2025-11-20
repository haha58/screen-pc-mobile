const Login = () => import('@/pages/login/index.vue');

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'github趋势-登录页'
		}
	}
];

export default routes;
