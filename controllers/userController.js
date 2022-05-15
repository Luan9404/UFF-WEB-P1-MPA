import { userRepository } from "../repositories/userRepository.js";

class UserController {
  async getUser() {

  }

  async registerUser(req, res) {
    let userData = req.body
    userData.isAdmin = false;
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

  async signIn(res, req){
    req.render("sign-in")
  }

  async getConta(res, req){
    req.render("minha-conta")
  }

  async login(req, res){
    let userData = req.body
    let user = await userRepository.getUserByEmail(userData.email)
    if(!user){
      res.status(404).send({error: 'Usuário não encontrado'})
    }
    if(userData.senha != user.senha){
      res.status(403).send({error: 'Senha incorreta' })
    }
    req.session.userEmail = user.email
    req.session.userId = user._id.toString()
    req.session.logged = true
    user.isAdmin ? req.session.isAdmin = true : req.session.isAdmin = false
    console.log(req.session)
    res.redirect('/')
  }
}

export const userController = new UserController()