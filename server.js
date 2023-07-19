const http = require('http');
const port = 8080;
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });

    if(req.url=='/about')
        file='about.html';  
    else if(req.url=='/resume')
        file='resume.html';
    else if(req.url=='/projects')
        file='projects.html';
    else
        file='index.html';
    
    fs.readFile(file,(err,data)=>{
        if(err){
            return console.log(err);
        }
        res.end(data);
    })
});

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server started at: ', port);
})