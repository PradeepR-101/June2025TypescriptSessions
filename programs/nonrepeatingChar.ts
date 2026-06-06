
 let s = 'pradeep playwright automation';
 
 let nonrepeatedChar = (str:string) => {
      let set = new Set();
      for(let char of str){
          
          if(str.indexOf(char) === str.lastIndexOf(char)){
              //return char;
              set.add(char)
          }
      }
      return [...set].join('');
 }
 
 console.log(nonrepeatedChar(s));