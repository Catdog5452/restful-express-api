const Project = require("../models/projects.model");

// Controller to retrieve all projects
exports.retrieveAllProjects = (req, res) => {
    Project.retrieveAllProjects((err, data) => {
        if (err) {
            // Error handling if retrieval fails
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving projects."
            });
        } else {
            // Return the retrieved projects
            res.send(data);
        }
    });
};

// Controller to create a new project
exports.createProject = (req, res) => {
    if (!req.body) {
        // Check if the request body is empty
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    // Create a new project object using the request body
    const project = new Project({
        projectname: req.body.projectname,
        projectdesc: req.body.projectdesc,
        startdate: req.body.startdate,
        enddate: req.body.enddate
    });

    Project.createProject(project, (err, data) => {
        if (err) {
            // Error handling if project creation fails
            res.status(500).send({
                message: err.message || "Error occurred while creating project."
            });
        } else {
            // Return the created project
            res.send(data);
        }
    });
};

// Controller to retrieve a project by ID
exports.retrieveProjectId = (req, res) => {
    const id = req.query.id;
    if (!id) {
        // Check if the ID parameter is missing
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    Project.retrieveProjectId(id, (err, data) => {
        if (err) {
            // Error handling if retrieval fails
            res.status(500).send({
                message: err.message || "Error occurred while retrieving project."
            });
        } else {
            // Return the retrieved project
            res.send(data);
        }
    });
};

// Controller to retrieve a project by name
exports.retrieveProjectName = (req, res) => {
    const name = req.query.name;
    if (!name) {
        // Check if the name parameter is missing
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    Project.retrieveProjectName(name, (err, data) => {
        if (err) {
            // Error handling if retrieval fails
            res.status(500).send({
                message: err.message || "Error occurred while retrieving project."
            });
        } else {
            // Return the retrieved project
            res.send(data);
        }
    });
};

// Controller to update a project by ID
exports.updateProjectId = (req, res) => {
    const id = req.query.id;
    if (!id) {
        // Check if the ID parameter is missing
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    if (!req.body) {
        // Check if the request body is empty
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    // Create a new project object using the request body
    const project = new Project({
        projectname: req.body.projectname,
        projectdesc: req.body.projectdesc,
        startdate: req.body.startdate,
        enddate: req.body.enddate
    });

    Project.updateProjectId(id, project, (err, data) => {
        if (err) {
            // Error handling if project update fails
            res.status(500).send({
                message: err.message || "Error occurred while updating project."
            });
        } else {
            // Return the updated project
            res.send(data);
        }
    });
};

// Controller to delete a project by ID
exports.deleteProjectId = (req, res) => {
    const id = req.query.id;
    if (!id) {
        // Check if the ID parameter is missing
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    Project.deleteProjectId(id, (err, data) => {
        if (err) {
            // Error handling if project deletion fails
            res.status(500).send({
                message: err.message || "Error occurred while deleting project."
            });
        } else {
            // Return the deleted project
            res.send(data);
        }
    });
};

// Controller to delete all projects
exports.deleteAllProjects = (req, res) => {
    Project.deleteAllProjects((err, data) => {
        if (err) {
            // Error handling if deletion fails
            res.status(500).send({
                message: err.message || "Some error occurred while deleting projects."
            });
        } else {
            // Return the result of the deletion
            res.send(data);
        }
    });
};
