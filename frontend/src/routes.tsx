import { RouteObject } from 'react-router-dom';
import * as Route from '@views/index';

export default [
	{
		path: '/',
		element: <Route.Home />
	}
] satisfies RouteObject[];
