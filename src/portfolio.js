
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Michael Lin",
  title: "Hi all, I'm Michael Lin",
  subTitle: emoji("A passionate Software Developer 🚀 having an experien"
  +"ce of building Web applications and Android applications."
  +" Self-motivated individual likes to learn new things."),
  
};

const socialMediaLinks = {

  github: "https://github.com/MichaelLinOuO",
  gmail: "michael90781@gmail.com" 
};

const skillsSection = {
  title: "What i do",
  subTitle: "GRADUATE INFORMATION ENGINEER WANTS TO EXPLORE NEW TECHS",
  skills: [
    emoji("⚡ Develop full stack web applications"),
    emoji("⚡ Develop Android application"),
    emoji("⚡ Problem solving by design algorithm")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },  
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    }
    ,
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    }

    
  ]
};


const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Applications",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "50%"
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    }
  ]
};





/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MichaelLinOuO", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Android App Project:",
  subtitle: "Using GOOGLE MAP API TO RECORD USER EXERCISE(e.g Speed,route line) AND"
  +" HEART RATE DETECTION USING PHONE CAMERA",
  projects: [
    {
      image: require("./assets/images/healthplus.png"),
      link: "https://play.google.com/store/apps/details?id=com.MichaelLin.fypHealthPlus"
    }
  ]
};


// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "Love Problem Solving and Learning",

  blogs: [
    {
      url: "https://linlinprogrammingworld.blogspot.com/2020/09/3-month-of-competitive-programming.html#more",
      title: "3 month of Competitive programming record ",
      description: "Improve problem solving and programming skills"
    },

  ]
};




const contactInfo = {
  title: emoji("Contact Me ☎️"),  
  email_address: "michael90781@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, blogSection, contactInfo};
