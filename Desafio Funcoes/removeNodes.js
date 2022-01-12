function removeNodes(listHead, x) {
  let arr = listHead;
  let reference = x;

  let remove;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < reference) {
      remove = arr.indexOf(i);
      arr.splice(remove, 1);
    }
  }
  return arr;
}
console.log(removeNodes([100, 105, 50], 100));
