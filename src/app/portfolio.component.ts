import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'], // Assuming you'll have a CSS file as well
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule]
})


export class PortfolioComponent {
  public componentObjectKeys = Object.keys;

  getNameCharacters(): string[] {
    return this.resumeData.name.split('');
  }
  getSkillTypes(): { type: string, skills: string[] }[] {
 return Object.keys(this.resumeData.skills).map(skillType => {
 return {
 type: skillType,
 skills: this.resumeData.skills[skillType as keyof typeof this.resumeData.skills]
      };
    });
  }

  getSkillsArray(skillKey: string): string[] {
    return this.resumeData.skills[skillKey as keyof typeof this.resumeData.skills];
  }

  resumeData = {
    "name": "Mohan Babu Asanapuram",
    "title": "Software Engineer | AI/ML Enthusiast | Backend Developer",
    "contact": {
      "email": "asanapurammohanbabu@gmail.com",
      "phone": "+91-6281865015",
      "linkedin": "https://www.linkedin.com/in/mohan-babu-asanapuram-b37923214"
    },
    "location": "India",
    "summary": "I am a passionate Software Engineer with a strong focus on Generative AI and backend systems. Experienced in deploying scalable microservices, building AI-powered document automation tools, and applying prompt engineering with LangChain. Skilled in Python, FastAPI, Docker, and Linux environments.",
    "education": [
      {
        "degree": "B.Tech in Computer Science Engineering",
        "institution": "Chadalawada Ramanamma Engineering College",
        "cgpa": "8.00",
        "year": "2019-2023"
      },
      {
        "degree": "Senior Secondary",
        "institution": "BIEAP Board",
        "cgpa": "9.61",
        "year": "2017-2019"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institution": "SSC Board",
        "cgpa": "8.7",
        "year": "2017"
      }
    ],
    "experience": [
      {
        "role": "Software Engineer",
        "company": "Tech Mahindra",
        "duration": "Jun 2024 – Present",
        "highlights": [
          "Worked with Git for version control for smoother deployments in a Linux-based development environment."
        ]
      },
      {
        "role": "Associate Software Engineer",
        "company": "Tech Mahindra",
        "duration": "Dec 2023 – May 2024",
        "highlights": [
          "Built and deployed backend services using FastAPI behind NGINX for scalability.",
          "Led an AI-powered document automation project using LLMs.",
          "Developed document cleaning pipelines with Python and Generative AI.",
          "Applied LangChain for prompt engineering and chaining modular LLM workflows.",
          "Used Docker to containerize applications for efficient orchestration."
        ]
      },
      {
        "role": "AI/ML Trainee",
        "company": "Tech Mahindra",
        "duration": "Dec 2022 – Nov 2023",
        "highlights": [
          "Worked on classification, regression, and clustering models.",
          "Helped develop document summarization and tagging tools."
        ]
      }
    ],
    "projects": [
      {
        "name": "AI-Powered Document Cleaning",
        "description": [
                        "Developing an end-to-end pipeline to generate, refine, and structure documents using pretrained Large Language",
                        "Models (LLMs).",
                        " Automates content creation (summaries, structured reports, standard templates) and document cleaning (error",
                        "correction, format alignment, noise removal).",
                        " Deployed backend with FastAPI, served via NGINX, containerized with Docker, and managed in Linux environments.",
                        " Integrated LangChain for prompt engineering and modular LLM workflows",
                        " Made using: Python, Nginx, FastAPI, Langchain, Docker, Github, Linux",

        ],
        "technologies": [
          "Python", "FastAPI", "Docker", "Nginx", "LangChain", "Linux", "GitHub"
        ],
        "status": "Ongoing"
      }
    ],
    "skills": {
      "languages": ["Python"],
      "frameworks": ["FastAPI", "Django", "Flask"],
      "databases": ["PostgreSQL", "MySQL"],
      "tools": ["Docker", "Git", "Linux"],
      "ai_ml": ["LangChain", "Generative AI", "Machine Learning"],
      "cs_fundamentals": ["OOPs Concepts", "Operating System"],
      "other skills": ["Prompt Engineering", "Microservices", "Version Control", "API Development", "Document Automation", "Problem Solving"]
    },
    "responsibilities": [
      "Team Member - AI Document Project: Developed and tested AI document cleaning features.",
      "Code Helper - AI/ML Team: Assisted teammates by debugging and reviewing code."
    ],
    "achievements": [
      "Received 'Pat on the Back' award for outstanding contribution to AI document automation at Tech Mahindra.",
      "Completed 90-day coding challenges on LeetCode and GeeksforGeeks."
    ]
  };
}