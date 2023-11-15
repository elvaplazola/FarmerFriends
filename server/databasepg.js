const {Client} = require('pg') //using the PG package

const client = new Client({
    host: "localhost",
    user:"postgres",
    port: 5432,
    password: "Underwear1!",
    database: "farmer-friends"
})

client.connect(); //explicitly connect to the client

client.query(`Select * from supplies`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})