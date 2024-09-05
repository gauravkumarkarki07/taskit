import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from './App';
import Auth from './Auth/views/Index';
import LoginForm from './Auth/components/LoginForm';
import SignupForm from './Auth/components/SignupForm';
import ForgetPassword from './Auth/components/ForgetPassword';
import NotFoundPage from './Common/pages/NotFoundPage';
import ErrorPage from './Common/pages/ErrorPage';
import ProtectedRoute from './Auth/components/ProtectedRoute';
import Dashboard from '@/Dashboard/views/Index';
import MyProjects from '@/MyProjects/views/Index';
import Calendar from '@/Calendar/views/Index';

export const routes=createBrowserRouter([
	{
		path:'',
		element:<App/>,
		children:[
			{
				path:'auth',
				element:<Auth/>,
				children:[
					{
						path:'',
						element:<Navigate to={'/auth/login'} replace/>
					},
					{
						path:'login',
						index:true,
						element:<LoginForm/>
					},
					{
						path:'signup',
						element:<SignupForm/>
					},
					{
						path:'forgetpassword',
						element:<ForgetPassword/>
					}
				]
			},
			{
				path:'',
				element:<ProtectedRoute/>,
				children:[
					{
						index:true,
						element:<Navigate to={'/dashboard'}/>
					},
					{
						path:'dashboard',
						element:<Dashboard/>
					},
					{
						path:'myprojects',
						element:<MyProjects/>
					},
					{
						path:'calendar',
						element:<Calendar/>
					}
				]
			}
			
		],
		errorElement:<ErrorPage/>
	},
	{
		path:'*',
		element:<NotFoundPage/>
	}
])
