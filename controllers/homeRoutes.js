const router = require("express").Router();
const { Model } = require("sequelize/types");
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });
    } catch (err) {
        res.status(400).json(err);
    }
})