function findShort(q){
    let con=new Map()
    for(let i=0;i<=q.length-1;i++){
      if (con.has(q[i])==false){
        con.set(q[i],1)
    }else{
      con.set(q[i],con.get(q[i])+1)
    }
    }
    let count=[]
    let i=0
    for (let t of con.values()) { 
      count[i]=t
      i++
  }
    let simvol=[]
    i=0
    for (let t of con.keys()) { 
      simvol[i]=t
      i++
  }
    let res=''
    for(i=0;i<simvol.length;i++){
      res=res+count[i]+simvol[i]
    }
    return res
  }