import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from './App';
import Auth from './Auth/views/Index';
import LoginForm from './Auth/components/LoginForm';
import SignupForm from './Auth/components/SignupForm';

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
					}
				]
			}
		]
	}
])
