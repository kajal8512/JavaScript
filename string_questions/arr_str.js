var myarray = ['aa','abcde','abnbvc'];
var maxlen = 0;
b=[]
for (i=0; i<myarray.length; i++) {
  if (myarray[i].length>maxlen) {
    maxlen = myarray[i].length;
  }
}
console.log(maxlen)
