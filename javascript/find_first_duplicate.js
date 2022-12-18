function findFirstDuplicate(arr) {
  let arrSet = new Set;
  
  for (let i in arr){
    if (arrSet.has(arr[i])){
      return arr[i]
    }
    arrSet.add(arr[i])

  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;


//This code will go through an array and return the first duplicate of a number. 
//if there is no duplicate, this code will return 1

// put array into ascending order so that nums can easily be compared by sort method
// 
