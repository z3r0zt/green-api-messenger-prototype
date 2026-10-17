export const cookies = {
  setCookie: (name: string, value: string) => {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`
  },
  getCookie: (name: string) => {
    const cookie = document.cookie
      .split('; ')
      .find(item => item.startsWith(`${name}=`));
  
    return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
  },
  deleteCookie: (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  }
};
