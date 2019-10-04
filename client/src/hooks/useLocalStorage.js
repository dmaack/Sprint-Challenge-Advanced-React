import { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
            //passing in a cb that sets the initial state
        const localData = localStorage.getItem(key);
            console.log('This is my localData variable', localData)

            if(localData) {
                return JSON.parse(localData)
            } else {
                return initialValue
            }
    })

    console.log(storedValue)

    //function that allows us to update stored value fro outside the function

    const setValue = value => {
            //update stored value state property
        setStoredValue(value);
        //update localStorage value
        localStorage.setItem(key, JSON.stringify(value))
    }
        //can now iport useLocalStorage anywhere in application
    return [storedValue, setValue];
}