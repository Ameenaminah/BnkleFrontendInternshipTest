export const formatDate = (inputDate: number) => {
  const date = new Date(inputDate * 1000);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
