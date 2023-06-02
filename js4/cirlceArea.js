function calculateCircleArea(radius) {
    if (typeof radius !== 'number' || radius < 0) {
      return -1;
    }
  
    const area = Math.PI * radius ** 2;
    return area.toFixed(3);
  }
  
  console.log(calculateCircleArea(5)); // Output: 78.540
  console.log(calculateCircleArea(-2)); // Output: -1
  console.log(calculateCircleArea("10")); // Output: -1
  console.log(calculateCircleArea(3.14159265359)); // Output: 31.006
  