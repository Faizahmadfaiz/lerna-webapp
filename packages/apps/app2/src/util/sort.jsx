const compareBy = (key, order, sortType) => (a, b) => {
  if (sortType !== "string") {
    if (a.alertResource[key] < b.alertResource[key]) {
      return order === "asc" ? -1 : 1;
    }
    if (a.alertResource[key] > b.alertResource[key]) {
      return order === "asc" ? 1 : -1;
    }
  } else {
    if (
      a.alertResource[key].toLowerCase() < b.alertResource[key].toLowerCase()
    ) {
      return order === "asc" ? -1 : 1;
    }
    if (
      a.alertResource[key].toLowerCase() > b.alertResource[key].toLowerCase()
    ) {
      return order === "asc" ? 1 : -1;
    }
  }
  return 0;
};

const sort = (list, sortKey, order, sortType = "string") => {
  if (sortKey === "") {
    return list;
  }
  return list.sort(compareBy(sortKey, order, sortType));
};
export default sort;
