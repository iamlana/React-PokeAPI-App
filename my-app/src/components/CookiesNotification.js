import React, { useState } from "react"
import { useCookies } from "react-cookie";
// import { useCookies } from '../services/cookie';
// import { withCookies } from '../services/cookie'
const COOKIE_KEY = 'We use cookies';

export function CookiesNotification() {
    const [cookies, setCookie] = useCookies(null);
   
    function toggleCookies () {
    if (cookies) {
      return setCookie(COOKIE_KEY)
      } else {
          return setCookie(cookies)
      }
    }

    // const { favorites, toggleFavorite } = useFavorites()
    return	(

         <button onClick={()=>toggleCookies()}>hhh</button>
    )
}
