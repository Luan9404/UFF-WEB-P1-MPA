import { userRepository } from "../repositories/userRepository.js";

class UserController {
  async getUser() {

  }

  async registerUser(req, res) {
    let userData = req.body
    console.log(userData)
    let exists = await userRepository.getUserByEmail(userData.email)
    if(exists){
      res.status(500).send({error: 'Email já cadastrado'})

    }else {
      const result = userRepository.registerUser(userData)
      res.status(200).send({result})
    }
  }

  async signUp(res, req){
    req.render("sign-up")
  }

  async getConta(res, req){
    req.render("minha-conta")
  }

}

export const userController = new UserController()