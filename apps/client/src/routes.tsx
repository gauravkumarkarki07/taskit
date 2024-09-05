import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from './App';
import Auth from './Auth/views/Index';
import LoginForm from './Auth/components/LoginForm';
import SignupForm from './Auth/components/SignupForm';
import ForgetPassword from './Auth/components/ForgetPassword';
import NotFoundPage from './Common/pages/NotFoundPage';
import ErrorPage from './Common/pages/ErrorPage';

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
			
		],
		errorElement:<ErrorPage/>
	},
	{
		path:'*',
		element:<NotFoundPage/>
	}
])
