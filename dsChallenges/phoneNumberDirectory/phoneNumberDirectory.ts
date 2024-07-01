export const phoneNumberDirectory = (
  phoneNumbers: string[]
): Map<string, string> => {
  const directory = new Map();

  phoneNumbers.forEach((phoneNumber) => {
    const [name, number] = phoneNumber.split(":");
    directory.set(name, number);
  });

  return directory;
};
