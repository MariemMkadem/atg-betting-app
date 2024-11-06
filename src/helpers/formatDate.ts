const formatDate = (date: string | Date): string => {
  const dateObject = new Date(date);

  if (isNaN(dateObject.getTime())) {
    throw new Error("Invalid date");
  }

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).format(dateObject);
};

export default formatDate;
