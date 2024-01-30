module.exports = app => {
    const projects = require("../controllers/projects.controller");
  
    // Retrieve all projects
    // GET http://localhost:3000/projects
    app.get("/projects", projects.retrieveAllProjects);

    // Create new project
    // POST http://localhost:3000/project/create
    /*  Body of request in JSON format
    {
        "projectname": "apple",
        "projectdesc": "apples are red",
        "startdate": "16/05/23 08:00",
        "enddate": "17/05/23 11:00"
    } 
    */
    app.post("/project/create", projects.createProject);

    // Retrieve project via id
    // GET http://localhost:3000/project/id?id=9
    app.get("/project/id", projects.retrieveProjectId);

    // Retrieve project via name
    // GET http://localhost:3000/project/name?name=apple
    app.get("/project/name", projects.retrieveProjectName);

    // Update project via id
    // PUT http://localhost:3000/project/id?id=9
    /* Body of request in JSON format
    {
        "projectname": "oranges",
        "projectdesc": "oranges are orange",
        "startdate": "16/05/23 0800",
        "enddate": "17/05/23 2000"
    }
    */
    app.put("/project/id", projects.updateProjectId);

    // Delete project via id
    // DELETE http://localhost:3000/project/id?id=9
    app.delete("/project/id", projects.deleteProjectId);

    // Delete all projects
    // DELTEE http://localhost:3000/projects
    app.delete("/projects", projects.deleteAllProjects);
}