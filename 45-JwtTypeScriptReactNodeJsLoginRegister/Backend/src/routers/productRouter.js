const router = require("express").Router();
const productControllers = require("../controllers/productControllers");
const userAuth = require("./../middlewares/userAuthMidd");

// router.post("/users", userControllers.postUser);
// router.get("/products", userControllers.getAllUser);
// router.get("/users/:id", userControllers.getUserById);
// router.delete("/users/:id", userControllers.getDeleteUser);
// router.patch("/users/:id", userControllers.getUpdateUser);
// router.put("/users/:id", userControllers.getPutUser);

router.get("/", userAuth, productControllers.getAllProduct);

module.exports = router;
