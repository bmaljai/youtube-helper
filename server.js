const express = require('express')
const app = express()
const PORT = 8000

const testObjects = 
{
    'obj1':{
        'param1': 'object 1',
        'param2': 'data2',
        'param3': 'data3',
        'param4': 'data4'
    },
    'obj2': {
        'param1': 'object 2',
        'param2': 'data2',
        'param3': 'data3',
        'param4': 'data4'
    },
    'obj3': {
        'param1': 'object 3',
        'param2': 'data2',
        'param3': 'data3',
        'param4': 'data4'
    },
    'obj4': {
        'param1': 'object 4',
        'param2': 'data2',
        'param3': 'data3',
        'param4': 'data4'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
    response.sendFile(__dirname + '/js/main.js')

})
app.get('/api',(request,response)=>{
    response.json(testObjects)
})
app.get('/api/:objectnumber', (request, response) => {
    const objectnum = request.params.objectnumber
    console.log(request.params.objectnumber)
    
    if (testObjects['obj' + objectnum]){
        response.json(testObjects['obj' + objectnum])
    }else{
        response.json(testObjects['obj1'])
    }
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})