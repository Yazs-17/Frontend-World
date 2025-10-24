import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载：企业常规做法，优化性能
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')
const DefaultLayout = () => import('../layout/DefaultLayout.vue')

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{ path: '', name: 'home', component: Home },
			{ path: 'about', name: 'about', component: About },
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: () => ({ top: 0 }),
})

export default router
