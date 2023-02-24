function teamInfo(employeeArray) {
    
    const managerHTML = (manager) => {
        
        const templateManager = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title bg-light">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class>Employee ID: ${manager.id}</p>
        <p class>Email: ${manager.email} </p>
        <p class>Office number: ${manager.officeNumber}</p>
        </div>
        </div>
        `;
        htmlInfo.push(templateManager)
    }
    const engineerHTML = (engineer) => {
        
        const templateEngineer = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title bg-light">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <p class = "card-text">Employee ID: ${engineer.id}</p>
        <p class ="card-text">Email: ${engineer.email}</p>
        <a href="https://github.com/${engineer.githubUsername}" class="stretched-link">Github Account</a>
        </div>
        </div>
        `;
        htmlInfo.push(templateEngineer)
    }
    const internHTML = (intern) => {
        const templateIntern = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title bg-light">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        
        <p class="card-text">Employee ID: ${intern.id}</p>
        <p class= "card-text">Email: ${intern.email} </p>
        <p class="card-text">School: ${intern.school}</p>
        </div>
        </div>
        `;
        htmlInfo.push(templateIntern)
    }
    const htmlInfo = []
    for (let i = 0; i < employeeArray.length; i++) {
        if(employeeArray[i].getRole() === "Manager")
        managerHTML(employeeArray[i])
    
        if(employeeArray[i].getRole() === "Intern")
        internHTML(employeeArray[i])
    
    
        if(employeeArray[i].getRole() === "Engineer")
        engineerHTML(employeeArray[i])
    }
    return htmlInfo.join('')
}


function generateHTML(employeeArray) {
    //insert template of HTML inside backticks
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel ="stylesheet">
</head>

<body class="">
    <h1 class="app-title text-center">My Team</h1>
    <section class="container justify-content-center row">
    ${teamInfo(employeeArray)}
    </section>
 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" ></script>
</body>
</html>

`}





module.exports = generateHTML