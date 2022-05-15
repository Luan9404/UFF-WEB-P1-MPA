class HomeController{
  async List(req, res){
    res.render('index')
  }
}
export const home = new HomeController();