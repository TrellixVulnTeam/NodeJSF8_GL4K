class NewController{
    // [GET] news
     index(req, res)  {
        return res.render('news');
      }
      // [GET] /news/:slug
     show(req, res)   {
          res.send('news Detail');
      }

   
}
module.exports = new NewController;
