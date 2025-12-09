import {useEffect, useState, useCallback} from 'react';
import {MENU_API_URL} from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = useCallback(async () => {
        try {
            const data = await fetch(MENU_API_URL + resId);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (err) {
            console.error("Failed to fetch menu:", err);
        }
    }, [resId]);

    useEffect(() => {
        fetchMenu();
    }, [fetchMenu]);

    return resInfo;
}

export default useRestaurantMenu; 
