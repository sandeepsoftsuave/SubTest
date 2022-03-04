export function setItem(name, item) {
  localStorage.setItem(name, item);
}

export function getItem(name) {
  const data = localStorage.getItem(name);

  return data === "undefined" ? null : data;
}

export function removeItem(name) {
  localStorage.removeItem(name);
}
