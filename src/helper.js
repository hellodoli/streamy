export const mapKeys = (arr, key) => {
  if (typeof arr === 'object' && arr.length !== undefined) {
    let isKeyExist = false;
    const newArr = {};
    // check key exist
    for (const k in arr[0]) {
      if (k === key) {
        isKeyExist = true;
        break;
      }
    }
    
    // map keys
    if (isKeyExist) {
      for(let i = 0; i < arr.length; i++) {
        newArr[arr[i][key]] = arr[i];
      }
    }
    return newArr;
  }
}