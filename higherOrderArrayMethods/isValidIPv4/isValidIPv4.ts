export const isValidIPv4 = (IP: string): boolean => {
  const IPArray = IP.split(".");

  if (IPArray.length !== 4) return false;

  return IPArray.every(
    (el) => Number(el) >= 0 && Number(el) <= 255 && el[0] !== "0"
  );
};
