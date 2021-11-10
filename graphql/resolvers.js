const db = require('./db')
const Query = {
   //resolver function for greeting
   greeting:() => {
      return `Hey there!`
   },
   
   //resolver function for students returns list
   students:() => db.students.list(),

   //resolver function for studentbyId
   studentById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.get(args.id);
   },

   colleges: () => db.colleges.list(),

   collegeById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.colleges.get(args.id);
   }
}

const Mutation = {
   createStudent:(root,args,context,info) => {
      return db.students.create({collegeId:args.collegeId,
      firstName:args.firstName,
      lastName:args.lastName})
   }
}

module.exports = {Query,Mutation}
