import { adminRepository } from "../repositories/adminRepository.js"
import { carsRepository } from "../repositories/carRepository.js"
import {userRepository} from "../repositories/userRepository.js"

class AdminController{
  async signIn(req, res){
    res.render("admin")
  }

  async singUp(req, res){
    let admData = req.body
    let user = await userRepository.getUserAdmin(admData.email)
    if(user == null){
      res.send({error: 'Usuário não encontrado'})
      return
    }
    if(admData.senha != user.senha){
      res.send({error: 'Senha incorreta' })
      return
    }
    req.session.userEmail = user.email
    req.session.userId = user._id.toString()
    req.session.logged = true
    user.isAdmin ? req.session.isAdmin = true : req.session.isAdmin = false
        
    res.redirect('/admin/loja')
  }

  async addCar(req, res) {
    let carData = req.body

    await adminRepository.addCar(carData)
    res.redirect("/admin/loja")
 
  }

  async loadLoja(req, res){
    let carros = await carsRepository.getAllCars()
    console.log(carros)
    res.render("index", carros)
  }
}

export const adminController = new AdminController()