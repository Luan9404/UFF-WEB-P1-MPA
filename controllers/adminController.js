class AdminController{
  async signIn(req, res){
    res.render("admin")
  }
}

export const adminController = new AdminController()