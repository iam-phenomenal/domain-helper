
const dns = require("node:dns")

const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};


// console.log(ipAddress)


// const dnsPromise = new Promise((resolve, reject)=>{
//     dns.lookup(url, (err, value)=>{
//         if(!err){
//            return resolve(value)
//         }
//         return reject(err)
//     })
// })

let url = "www.google.com"

function test(url){
    dns.lookup(url, async (err, value)=>{
        if(err){
            return err
        }
        return value
    })
}

const ipAddress = test(url)