function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let n = 0; n < array.length; n++)
  {
    for(let k = n + 1; k < array.length; k++)
    {
      if (target - array[n] == array[k]) return true;
      //else;//do nothing
    }
  }
  //if (target == 0 && array.length == 0) return true;
  return false;
}

/* 
  Write the Big O time complexity of your function here O(n*n=n^2)
*/

/* 
  Add your pseudocode here
  get diff = target - item[n]
  then for all other items:
  check to see if one of them equals the diff
  if they do return true
  if none are found that do return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
