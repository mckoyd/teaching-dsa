export const generateHashtag = (str: string): string | boolean => {
  const trimmedStr = str.trim();
  if (trimmedStr.length === 0 || trimmedStr.length > 140) return false;

  return (
    "#" +
    trimmedStr
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};
