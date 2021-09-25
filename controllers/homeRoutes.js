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

        const projects = projectData.map((project) => {
            project.get({ plain: true });
        });

        res.render("homepage", {
            projects,
            // user.id here?
        })
    } catch (err) {
        res.status(400).json(err);
    }
})