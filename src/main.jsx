import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root/Root';
import { Face } from './components/Face/Face';
import { Cream } from './components/Face/ChildrenFace/Cream/Cream';
import { All } from './components/Face/ChildrenFace/All/All';
import { Serums } from './components/Face/ChildrenFace/Serums/Serums';
import { Gel } from './components/Face/ChildrenFace/Gel/Gel';
import { Oil } from './components/Face/ChildrenFace/Oil/Oil';
import { Emulsion } from './components/Face/ChildrenFace/Emulsion/Emulsion';
import { Provider } from 'react-redux';
import store from './app/store';
import { Bucket } from './components/Bucket/Bucket';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: "Face",
				element: <Face />,
				children: [
					{
						path: "/Face/",
						element: <All />
					},
					{
						path: "Cream",
						element: <Cream />
					},
					{
						path: "Serums",
						element: <Serums />
					},
					{
						path: "Gel",
						element: <Gel />
					},
					{
						path: "Oil",
						element: <Oil />
					},
					{
						path: "Emulsion",
						element: <Emulsion />
					}
				]
			},
			{
				path: "Bucket",
				element: <Bucket />
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);