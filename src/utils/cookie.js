export const setCookie = (name, value, maxAge = 30, attributes = []) => {
  const cookieArr = [`${name}=${value}`, ...attributes];
  // set expires date
  const d = new Date();
  d.setTime(d.getTime() + maxAge * 24 * 60 * 60 * 1000);
  cookieArr.push(`expires=${d.toUTCString()}`);

  document.cookie = cookieArr.join(';');
};

export const getCookie = (name) => {
  const cookieArr = decodeURIComponent(document.cookie).split(';');
  let value = null;
  for (let i = 0; i < cookieArr.length; i += 1) {
    const c = cookieArr[i];
    const cArr = c.trim().split('=');
    const [nameStored, valueStored] = cArr;
    if (nameStored === name) {
      value = valueStored;
    }
  }
  return value;
};

export const removeCookie = (name) => {
  // document.cookie = name+'=; Max-Age=-99999999;';
  // document.cookie.remove(name);
  setCookie(name, '', -1);
};
