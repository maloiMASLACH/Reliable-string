function findShort(q){
let con=new Map()
for(let i=0;i<=q.length-1;i++){
  if (con.has(q[i])==false){
    con.set(q[i],1)
}else{
  con.set(q[i],con.get(q[i])+1)
}
}
return con
}