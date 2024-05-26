const formatDate = (date: string, reverse?: 'reverse') => {
    if (!date || date.toString().toLowerCase() === "none") return "";
    const dateArr = (
      date.toString().includes("T") ? date.toString().split("T")[0] : date.toString().split(" ")[0]
    )?.split("-");
    if (!dateArr) return "";
    return reverse
      ? `${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`
      : `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  };
  
  export default formatDate;