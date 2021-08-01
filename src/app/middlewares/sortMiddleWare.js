

module.exports = function sortMiddleWare(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };
  if (req.query.hasOwnProperty("_sort")) {
    res.locals._sort.enable = true;
    res.locals._sort.type= req.query.type;
    res.locals._sort.collumn= req.query.collumn;
    //Tuong tu o tren
    // Object.assign(res.locals._sort,{
    //     enabled: true,
    //     type: req.query.type,
    //     column:req.query.collumn,

    // })
  }

  next();
};
