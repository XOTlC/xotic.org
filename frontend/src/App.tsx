import { RouteObject, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import * as Component from '@components/index';
import routes from './routes';

import './all.scss';

const router = createBrowserRouter([{
	id: 'app',
	element: <div className='viewBody'>
		<Component.Navbar />

		<main>
			<Outlet />
		</main>

		<Component.Footer />
	</div>,
	children: routes satisfies RouteObject[]
}]);

export default function App() {
	return <RouterProvider router={router} />;
}
