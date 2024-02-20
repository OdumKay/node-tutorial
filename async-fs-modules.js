const {readFile , writeFile} = require ('fs');

readFile ('./content/first.text', 'utf8', (err, result)=> {
  if (err){
    console.log(err);
    return
  }
  const first = result

  readFile ('./content/second.text', 'utf8', (err , result)=> {
    if (err){
        console.log(err);
        return
      }
     
      const second = result
      writeFile ('./content/result-async.text', `here is the result : ${first}, ${second} `, (err, result)=>{
        if (err) {
            console.log(err)
            return
        }

        console.log(result)
      })
  })
})