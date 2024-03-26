function countSheeps(sheep) {
    // TODO
    let count = 0;
    for (const isSheepPresent of sheep){
      if(isSheepPresent === true){
        count +=1;
      }
     }
    return count;
  }