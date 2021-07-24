const without = (source, itemsToRemove) => {
  let unmached = [];
  for(let i = 0; i < source.length; i++){
    if(itemsToRemove.indexOf(source[i]) === -1){
      unmached.push(source[i]);
    }
  };
  for(let j = 0; j < itemsToRemove.length; j++){
    if(source.indexOf(itemsToRemove[j]) === -1){
      unmached.push(itemsToRemove[j]);
    }   
  }
   return unmached;
};