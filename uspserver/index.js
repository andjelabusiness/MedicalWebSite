const express= require("express");
const mysql= require("mysql");
const bodyparser= require("body-parser");
const cors=require("cors");
const index=express();


index.use(bodyparser.json());

index.use(cors());

index.listen(3000,()=>{
    console.log("Server je startovan na 3000");
});

const db=mysql.createConnection({
    host:"localhost", 
    user: "root",
    password:"1234",
    database: "usp",
    

});

db.connect((err)=>{
    if(err) throw err;
    console.log("povezan je mysql");
})

index.get("/get/:u/:s", (req,res)=>{
    
    let query= db.query("SELECT * FROM users WHERE username=? AND password=?",[req.params.u,req.params.s], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});

index.get("/proveri/:u", (req,res)=>{
    
    let query= db.query("SELECT username FROM users WHERE username=?",[req.params.u], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});

index.get("/uk/:u/:s/:m/:b", (req,res)=>{
    
    
    let query= db.query("INSERT INTO users(username,password,tip,bolnica) VALUES(?,?,?,?);",[req.params.u,req.params.s,"istrazivac",req.params.b], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
        
        

    });
});

index.get("/admin", (req,res)=>{
    
    let query= db.query("SELECT * FROM users", (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});

index.get("/delete/user/:u", (req, res) => {
    let query = db.query("DELETE FROM users WHERE username=?", [req.params.u], (err, results) => {
        if (err) throw err;
        res.send(results); console.log(results);
    })
})

index.get("/promenisifru/:u/:p", (req, res) => {
    let query = db.query("UPDATE users SET password=? WHERE username=? ", [req.params.p, req.params.u], (err, results) => {
        if (err) throw err;
        res.send(results); console.log(results);
    });
})

index.get("/azuriraj/:u/:p", (req, res) => {
    let query = db.query("UPDATE users SET bolnica=? WHERE username=? ", [req.params.p, req.params.u], (err, results) => {
        if (err) throw err;
        res.send(results); console.log(results);
    });
})


index.get("/lekovi", (req,res)=>{
    
    let query= db.query("SELECT * FROM lekovi", (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});

index.get("/bolesti/:id", (req,res)=>{
    
    let query= db.query("SELECT naziv FROM bolesti WHERE id IN (SELECT bolest FROM leci WHERE lek=?);",[req.params.id], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});


index.get("/komentari/:id", (req,res)=>{
    
    let query= db.query("SELECT * FROM komentari WHERE lek=?;",[req.params.id], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});


index.get("/novikom/:tekst/:lek", (req,res)=>{
    
    
    let query= db.query("INSERT INTO komentari(tekst,lek,user) VALUES(?,?,1);",[req.params.tekst,req.params.lek], (err,results)=>{
        if(err) throw err;
        console.log(results);
       
        let query2= db.query("SELECT * FROM komentari WHERE lek=?;",[req.params.lek], (err,results)=>{
            if(err) throw err;
            console.log(results);
            res.send(results);
           
        });
        

    });

    
});

index.get("/visebolesti", (req,res)=>{
    
    let query= db.query("SELECT * FROM bolesti", (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});

index.get("/lekzabol/:id", (req,res)=>{
    
    let query= db.query("SELECT naziv FROM lekovi WHERE id IN (SELECT lek FROM leci WHERE bolest=?);",[req.params.id], (err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send(results);
       
    });
});





