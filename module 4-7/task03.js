'use strict';


const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pre) => {
  const prefix = [];
    for (const i of arr) {
      prefix.push(`${pre} ${i}`);
    }
  return prefix;
  }
  
  
  console.log(addPrefix(names, 'Mr'));