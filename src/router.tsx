import {
    createBrowserRouter, redirect,
  } from "react-router-dom";
import SignPage from "./pages/sign.page";
import { LoginPage } from "./pages/login.page";
import HomePage from "./pages/home.page";
import MessagerPage from "./pages/messager.page";
import axios from "axios";
import { getAccessTokenFromCookie } from "./utils/cookie";


async function checkLogin() {
  var loginIn = false;

  try {
    await axios.get(`http://localhost:3000/v1/user/user`, {
      headers: {
        Authorization: `Bearer ${getAccessTokenFromCookie()}`,
        Accept: 'application/json'
      }
    });

    loginIn = true;
  } catch (e) {
    loginIn = false;
  }

  if (!loginIn) {
    return redirect("/login")
  }

  return null;
}

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      loader: checkLogin,
      children: [
        
      ]
    },
    {
      path: "/messager",
      element: <MessagerPage/>
    }, 
    {
      path: "/sign",
      element: <SignPage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>
    }
  ]);