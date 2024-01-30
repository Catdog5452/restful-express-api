const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 3

// Define the Project model
const Project = function(project) {
    this.projectname = project.projectname;
    this.projectdesc = project.projectdesc;
    this.startdate = project.startdate;
    this.enddate = project.enddate;
};

// Retrieve all projects
Project.retrieveAllProjects = result => {
    // Query the database to retrieve all projects
    db.query("SELECT * FROM projects", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        if (res.length === 0) {
            // Handle case when no records are found
            console.log("No projects were found");
            result(null, []);
            return;
        }
        
        // Print all returned project objects to console
        for(let i = 0; i< res.length; i++){
            const row = JSON.parse(JSON.stringify(res[i]));
            console.log("Retrieved Project:", row);
        }
        
        result(null, res);
    });
};

// Create a new project
Project.createProject = (newProject, result) => {
    // Insert the new project into the database
    db.query("INSERT INTO projects SET ?", newProject, (err, res) => {
        if (err) {
            console.log("Error:", err);
            result(null, err);
            return;
        }

        console.log("Created project:", { id: res.insertId, ...newProject });
        result(null, { id: res.insertId, ...newProject });
    });
};

// Retrieve project by ID
Project.retrieveProjectId = (id, result) => {
    // Query the database to retrieve a project by ID
    db.query(`SELECT * FROM projects WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        if (res.length === 0) {
            // Handle case when no records are found
            console.log("No project found with the specified id:",id);
            result(null, []);
            return;
        }

        
        const row = JSON.parse(JSON.stringify(res[0]));
        console.log("Retrieved Project:", row);
        

        result(null, res);
    });
};

// Retrieve project by name
Project.retrieveProjectName = (name, result) => {
    // Query the database to retrieve a project by name
    db.query(`SELECT * FROM projects WHERE projectname = "${name}"`, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        
        if (res.length === 0) {
            // Handle case when no records are found
            console.log("No project found with the specified name:",name);
            result(null, []);
            return;
        }

        // Print all returned project objects to console
        for(let i = 0; i< res.length; i++){
            const row = JSON.parse(JSON.stringify(res[i]));
            console.log("Retrieved Project:", row);
        }

        result(null, res);
    });
};

// Update project by ID
Project.updateProjectId = (id, newProject, result) => {
    // Update the project in the database with the provided ID
    db.query(
        `UPDATE projects SET projectname = "${newProject.projectname}", projectdesc = "${newProject.projectdesc}", startdate = "${newProject.startdate}", enddate = "${newProject.enddate}" WHERE id = ${id};`,
        (err, res) => {
            if (err) {
                console.log("Error:", err);
                result(null, err);
                return;
            }

            if (res.changedRows === 0) {
                // Handle case when no rows were updated
                console.log("No project found with the specified ID or no changes were made.");
                result(null, false);
                return;
            }

            console.log(`Updated Project with id = ${id}\n`, newProject);
            result(null, true);
        }
    );
};

// Delete project by ID
Project.deleteProjectId = (id, result) => {
    // Delete the project from the database with the provided ID
    db.query(`DELETE FROM projects WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        if (res.affectedRows === 0) {
            // Handle case when no rows were deleted
            console.log("No project found with the specified ID.");
            result(null, false);
            return;
        }

        console.log(`Deleted Project with id = ${id}`);
        result(null, true);
    });
};

// Delete all projects
Project.deleteAllProjects = result => {
    // Delete all projects from the database
    db.query("DELETE FROM projects", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        if (res.affectedRows === 0) {
            // Handle case when no rows were deleted
            console.log("No project found with the specified ID.");
            result(null, false);
            return;
        }

        console.log("All projects deleted:\nNumber of rows deleted =",res.affectedRows);
        result(null, true);
    });
};

module.exports = Project;