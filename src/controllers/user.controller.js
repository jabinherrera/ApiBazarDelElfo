import UserModel from "../models/user.model.js";

// async function loginUser(req, res) {
//   let email = req.body.email;
//   let password = req.body.password;
//   try {
//     if (UserModel.findBy(email) === null) {
      
//     }
//   } catch {}
// }

async function registerUser(req, res) {
    try {
      const userRegistered = await UserModel.create(req.body);
      res.send(userRegistered);
    } catch (err) {
      if ( req.body.name == null || 
            req.body.last_name == null || 
            req.body.email == null || 
            req.body.password == null) {
        res.status(400).send("Falta campo requerido")
      } else {
        res.status(500).send(err);
      }
    }
  }

  async function listUsers(req, res) {
    try {
      const user = await UserModel.find({});
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }

export {
    registerUser,
    listUsers,
};