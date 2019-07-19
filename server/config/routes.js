const cities = require('./../controllers/cities');

module.exports = function(app) { 

    // might need to add more routes...

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });

}
