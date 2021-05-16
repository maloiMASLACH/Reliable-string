function sort(q){
    let str=q.split('').sort()
    let con=""
    while(str.length!==0){
      if(str.length === 1) break
      
      let temp=str[0]
      let k=0
      for(let j=0;j<str.length;j++){
        if(str[j]==temp){
          k++
        }else{
          con=con+k+temp
          str.splice(0,j)
          break
        }
        if(j==str.length-1){
          con=con+k+temp
          str.splice(0,j)
          break
        }
      }
    }
    return con
    
  }