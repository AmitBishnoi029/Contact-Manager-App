const mongoose = require("mongoose")

const URL = "mongodb+srv://itsamit:amit%40123@cluster0.6zmhgsv.mongodb.net/contact_manager"

const connection = async() =>{
   try{
      await mongoose.connect(URL,{useUnifiedTopology:true ,useNewUrlParser:true})
      console.log(`databse connected on port ${URL}`)
   }catch(error){    
      console.log("Error while Creating DataBase",error)
   }
}

module.exports = connection