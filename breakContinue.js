const nums = [1, 2, 3, 4, -3, -5, -9, 5, 6];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 4) {
        break;           //loop instanly stop after condition fullfill. 
    }
    console.log(nums[i]);
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        continue;        //loop continue after condition doesn't match.
    }
    console.log(nums[i]);
}