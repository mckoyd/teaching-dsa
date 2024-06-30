export const flattenArray = (arr: any[]): any[] => {
  let flattenedArr: any[] = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flattenedArr = flattenedArr.concat(flattenArray(el));
    } else {
      flattenedArr.push(el);
    }
  });

  return flattenedArr;
};
