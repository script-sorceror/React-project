import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [food_list, setFoodList] = useState([]); // should be array
    const url = 'http://localhost:4000';
    const [token, setToken] = useState("");

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + '/api/food/list');
            setFoodList(response.data.data);
        } catch (err) {
            console.error("Failed to fetch food list", err);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) setToken(savedToken);
        }
        loadData();
    }, []); // ✅ only run once on mount

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) - 1
        }));
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find(food => food._id === item);
                if (itemInfo) total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    };

    const contextValues = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValues}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
