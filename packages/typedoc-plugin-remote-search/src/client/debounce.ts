export const debounce = (fn: (...args: any[]) => any, wait = 100) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(args), wait);
  };
};
