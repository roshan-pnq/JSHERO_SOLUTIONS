function cutComment(a){
b = '//'
if(a.match(b)===null){
return null}

c = a.replace(b, "")
d = c.split(" ")
return d[d.length-1]
}