export const formatDate = (inputDate: number) => {
  const date = new Date(inputDate * 1000);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export const isArrayNullOrEmpty = <T>(obj: T[]): boolean => {
  if (obj === undefined || obj === null || obj.length === 0) {
    return true;
  }

  return false;
};