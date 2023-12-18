const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");

router.post("/users", userControllers.postUser);
router.get("/users", userControllers.getAllUser);

module.exports = router;

// router.post("/posts", async (req, res) => {
// 	const post = new Post({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
// 	await post.save()
// 	res.send(post)
// })
