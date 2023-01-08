const dns = require("dns")

const domainVerify = (generatedNames)=>{
  var validDomains = []
  for (var i in generatedNames){
      dns.lookup(i, (err, value)=>{
          if(!err) validDomains.push(i)
      })
  }
  return validDomains
}


const generatedNames = ["google.com", "abdefg.com"]
console.log(domainVerify(generatedNames))