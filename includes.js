function findShort(q){
    let str=q.split('').sort()
    let con=[]
    let conId=-2
    for(let i=0;i<=str.length;i++){
      if (con.includes(str[i])==false){
        conId+=2
       con[conId]=1
       con[conId+1]=str[i]
    }else{
      con[conId]++
    }
    }
    con.splice(con.length-2,2)
    con=con.join('')
    return con
  }