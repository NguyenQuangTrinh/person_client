import Cookies from "js-cookie"

export const getAccessTokenFromCookie = (): string | undefined => {
    return Cookies.get('_person_token');
  };
  