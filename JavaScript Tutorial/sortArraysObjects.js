const students = [
    {
         name: 'Alice',
         age: 20 
    },

    { 
        name: 'Bob', 
        age: 19 
    },
    
  ];
  
  // Sort students array based on age in ascending order
  const sortedByAge = students.sort( (a, b) => a.age - b.age);
  
  console.log(sortedByAge[0]);
  
  // Sort students array based on name in alphabetical order
  const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
  
  console.log(sortedByName[0]);
  