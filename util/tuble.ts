type threeD = [x: number, y: number, z: number];

function fetchThreeD(a: threeD, b: threeD): threeD {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
