
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const originalString = ' My name is Hope';
  const reversedString = reverseString(originalString);
  
  console.log(reversedString);
  
 /*const flavours= ["Strawberry","Vanilla","chocolate","Blueberry"];
 flavours.reverse();
 console.log(flavours);*/