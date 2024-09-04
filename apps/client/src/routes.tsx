import {createBrowserRouter} from 'react-router-dom';
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
				path:'',
				element:<Auth/>,
				children:[
					{
						path:'login',
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
