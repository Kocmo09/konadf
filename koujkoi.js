var myRegest=new XMLHttpRequest()
myRegest.open('GET','url')
myRegest.onload=Function();{
    var myData=JSON.parse(myRegest.responseText)
    console.log(myData[0])
}
myRegest.send()
