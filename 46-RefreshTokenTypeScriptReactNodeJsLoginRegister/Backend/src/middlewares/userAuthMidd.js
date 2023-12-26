const jwt = require("jsonwebtoken");
const { refTokens } = require("./../controllers/userControllers");
console.log(refTokens);
const userAuthMidd = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const refToken = req.headers.refreshtoken.split(" ")[1];
  console.log("refToken---", refToken);
  console.log("refTokens---", refTokens);

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    console.log(err);
    if (err) {
      //burada refresh tokeni yoxlayiram
      if (refTokens.includes(refToken)) {
        console.log("salamlar");
        jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, user) => {
          const token = jwt.sign(
            { email: user.email, userName: user.userName },
            process.env.SECRET_TOKEN,
            {
              expiresIn: "5s",
            }
          );

          req.user = user;
          next();
        });

        // req.user = user;
        // next();
        return res.status(200).send({ token, refToken });
      } else {
        res.status(403).send(err);
      }

      // jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {

      //   req.user = user;
      //   next();
      // });
    }
    req.user = user;
    next();
  });

  //   const authHeader = req.headers['authorization']
  //   const token = authHeader && authHeader.split(' ')[1]
  //   if (token == null) return res.sendStatus(401)
};

module.exports = userAuthMidd;
