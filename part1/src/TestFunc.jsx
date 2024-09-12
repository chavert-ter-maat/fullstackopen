import React from 'react';

const Sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const TestFunc = () => {
  const result = Sum(1, 2);
  console.log(result);
  return <div>Check the console for results.</div>;
};

export default TestFunc;