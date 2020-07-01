export const personal = {
    name: "Ethan Bowen",
    phoneNumber: "903-574-5008",
    email: "ethan.a.bowen@gmail.com",
    whoAmI: "Passionate, driven, concept-focused technologist eager to create meaningful products that impact lives.",
    social: {
        linkedIn: "https://www.linkedin.com/in/ethan-bowen-89115250/",
        gitHub: "https://github.com/ethanabowen",
        faceBook: "https://www.facebook.com/ethan.a.bowen"
    }
}

export const schools = [
    {
        school: "Texas Tech University",
        seal: "https://www.ttu.edu/traditions/images/SEAL.jpg",
        degree: "Bachelor's of Science in Computer Science",
        year: 2012
    },
    {
        school: "University of Texas at Arlington",
        seal: "https://www.uta.edu/ucomm/identity/pix/UTA-color-seal.jpg",
        degree: "Master’s of Science in Computer Science",
        year: 2016
    }
]

export const skills = {
    "frontend": [
        { technology: "Angular", proficiency: 6 },
        { technology: "Javascript", proficiency: 8 },
        { technology: "React", proficiency: 8 },
        { technology: "Node", proficiency: 5 },
        { technology: "Bootstrap", proficiency: 7 },
        { technology: "CSS", proficiency: 7 }
    ],
    "communication": [
        { technology: "REST", proficiency: 10 },
        { technology: "SOAP", proficiency: 8 },
        { technology: "RabbitMQ", proficiency: 9 },
        { technology: "WebSphereMQ", proficiency: 7 },
        { technology: "JMS", proficiency: 10 }
    ],
    "backend": [
        { technology: "Java", proficiency: 10 },
        { technology: "Spring Boot", proficiency: 10 },
        { technology: "Eureka/Zuul", proficiency: 7 },
        { technology: "C#", proficiency: 8 },
        { technology: "C/C++", proficiency: 6 },
        { technology: "PHP", proficiency: 8 }
    ],
    "storage": [
        { technology: "Dynamo", proficiency: 5 },
        { technology: "MySql", proficiency: 5 },
        { technology: "DB2", proficiency: 5 },
        { technology: "Heidi", proficiency: 5 },
        { technology: "Mongo", proficiency: 5 },
    ],
    "scripting": [
        { technology: "Python", proficiency: 7 },
        { technology: "Bash/Sheel", proficiency: 9 }
    ],
    "CI/CD": [
        { technology: "Jenkins", proficiency: 10 },
        { technology: "Gitlab", proficiency: 8 },
        { technology: "CodeBuild", proficiency: 6 },
        { technology: "CodePipeline", proficiency: 6 }
    ],
    "AWS": [
        { technology: "IAM", proficiency: 7 },
        { technology: "", proficiency: 7 },
        { technology: "AWS", proficiency: 7 },
        { technology: "AWS", proficiency: 7 },
        { technology: "Quicksight", proficiency: 6 },
        { technology: "Amplify", proficiency: 5 }
    ]
}

export const jobs = [
    {
        company: "CBORD",
        title: "Advisory Software Engineer",
        startDate: "03/2020",
        endDate: "Present",
        details: [
            "Served as technical lead on company wide Hub integration project",
            "Integrated AWS services such as functions, storage, and authentication throughout CBORD",
            "Introduced and harnessed IaC with Serverless and Terraform",
        ],
        site: "https://www.cbord.com/",
        icon: "university"
    },
    {
        company: "CBORD",
        title: "Software Engineer",
        startDate: "04/2019",
        endDate: "03/2020",
        details: [
            "Led external team members daily on technical and domain-specific topics",
            "Initiated several projects and proof of concepts in an effort to push the team forward",
            "Developed React webpages for CSGold's web migration"
        ],
        site: "https://www.cbord.com/",
        icon: "university"
    },
    {
        company: "Lockheed Martin - Skunkworks",
        title: "Software Engineer III",
        startDate: "09/2018",
        endDate: "04/2019",
        details: [
            "Built a plugin-based dependency injection library using native Java",
            "Refactored and heavily optimized entire CI/CD pipeline via Jenkins/Groovy",
            "Initiated more through SCRUM practices (retrospectives, code reviews, better planning)"
        ],
        site: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html",
        icon: "fighter-jet"
    },
    {
        company: "Pier 1 Imports",
        title: "Software Engineer II",
        startDate: "04/2016",
        endDate: "09/2018",
        details: [
            "Developed micro-service architecture to provide reliable, tolerant, and extensible Supply Chain products",
            "Adopted the open-source mindset by actively seeking and applying new opportunities to enhance the customer experience",
            "Created 'Generic Class Generator' in Java that populated any Java object with random values (recursively if needed)"
        ],
        site: "https://www.cbord.com/",
        icon: "store"
    },
    {
        company: "BNSF Railway",
        title: "Software Developer II",
        startDate: "09/2012",
        endDate: "04/2016",
        details: [
            "Drove preventative mechanical derailment efforts on WebSphere, Java, UNIX, and TIBCO platforms",
            "Implemented “Train Matching” software in charge of aggregating multiple real-time data feeds",
            "Resolved on-call production issues leading to several initiatives for system optimization and stability",
        ],
        site: "https://www.bnsf.com/",
        icon: "train"
    },
    {
        company: "RTL Genomics",
        title: "Intern",
        startDate: "11/2011",
        endDate: "03/2012",
        details: [
            "Assist and create stream line automation of DNA analysis processes using C#,Python, and UNIX",
            "Ground up creation of a multithreaded Server-Client application using C#’s TCP API"
        ],
        site: "https://rtlgenomics.com/",
        icon: "dna"
    },
    {
        company: "Halliburton",
        title: "Intern",
        startDate: "06/2011",
        endDate: "08/2011",
        details: [
            "Creating in-house C# applications used to meta-manage data from a database",
            "Familiarized selfwith FORTRAN and VisualBasic and embedded DLLs into other languages"
        ],
        site: "https://www.halliburton.com/"
    },
    {
        company: "Motio Inc",
        title: "Intern",
        startDate: "05/2010",
        endDate: "08/2010",
        details: [
            "Familiarized self with IBM Cognos BI environment while applying to it programming",
            "Programmed on MotioPI, a java - based product used to accompany the IBMCognos platform"
        ],
        site: "https://motio.com/"
    }
]


export const projects = [
    "NASDAQ Stock ticker and article website.  Using plain js (website), NodeJs (api) and Python (for article/ticker scraping)",
    "Implementation of Support Vector Machine and creation of custom Kernel",
    "Experiment with technologies to understand their place in the development ecosystem"]