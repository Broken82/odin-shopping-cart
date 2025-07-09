import App from "./App";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";




const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Card />},
            {path: "/cart", element: <Cart />},
        ]
    }
]

export default routes