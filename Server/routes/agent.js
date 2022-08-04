const router = require("express").Router();
const { Agent, validate } = require("../models/agent");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const agent = await Agent.findOne({ email: req.body.email });
		if (agent)
			return res
				.status(409)
				.send({ message: "Agent with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Agent({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Agent created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;