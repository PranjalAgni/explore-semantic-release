console.log('This is semantic release class');
console.log('Triggering a new release.');

const timeSort = (array) => {
  array.forEach((element) => {
    setTimeout(() => {
      console.log(element);
    }, element);
  });
};

console.log(timeSort([12, 3, 4, 56]));
