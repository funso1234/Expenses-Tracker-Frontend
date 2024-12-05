import Home from "../components/Home";
import Registration from "../components/Registration";
import Login from "../components/login";
import {createBrowserRouter} from 'react-router-dom'
import AddTransaction from "../components/AddTransaction";
import {ExpensesPage} from "../components/ExpensesPage";

 const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/signIn',
        element: <Registration />,
    },
    {
        path: '/login',
        element: <Login />,
    },
     {
         path: '/AddTransaction',
         element: <ExpensesPage/>
     }
])
export default Route
