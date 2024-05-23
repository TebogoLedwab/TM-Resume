import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

interface Experience {
  id: number;
  companyName: string,
  role: string;
  years: string,
  location: string,
  jobDescription: string,
}

interface Education {
  id: number;
  schoolName: string;
  qualification: string;
  years: string
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor() { }

  expand: boolean = false;
  anchor: string = 'Read more';

  readonly experience: Experience[] = [
    {
      id: 1,
      companyName: "Hollard Health",
      role: "UI/UX Developer",
      years: "Present",
      location: "Johanessburg, Gauteng",
      jobDescription: "Design, development, testing, and maintenance of web applications using Blazor .NET 7, HTML, Bootstrap 5 and C#. Use Azure DevOps to assign, maintain tickets and allocate story points. Create database object model using Entity Framework. Modify existing SQL stored procedures according to the requirement with SQL Server Management Studio 19. Participate in agile software development lifecycle by giving input into prioritisation, estimates, planning, retrospectives, and code reviews. Optimize SQL queries for data retrieval with Microsoft SQL Server. Making use of Azure DevOps to track and test existing code."
    },
    {
      id: 2,
      companyName: "Genasys Technologies",
      role: "Jnr Frontend Developer",
      years: "Mar 2023 - Dec 2023",
      location: "Cape Town, Westen Cape",
      jobDescription: "wertyuioplokjhgfdsxcvbnm",
    },
    {
      id: 3,
      companyName: "Doshex",
      role: "Jnr Backend Developer",
      years: "Jan 2022 - Feb 2023",
      location: "Midrand, Gauteng",
      jobDescription: "987y6t5redfgtyuioplkjhgfd"
    },
    {
      id: 4,
      companyName: "Sharper (Former Digital Academy)",
      role: "Jnr Software Developer",
      years: "Jun 2020 - May 2021",
      location: "Johannesburg, Gauteng",
      jobDescription: "poiuytrewsdfghyuiop[;lkjhytrewsxcdfvghujiolkjhgfdcvb"
    },
  ]

  readonly education: Education[] = [
    {
      id: 1,
      schoolName: "Richfield",
      qualification: "Diploma in Information Technology",
      years: "Feb 2018 - Dec 2020"
    },
    {
      id: 2,
      schoolName: "Hoerskool Noorderland",
      qualification: "National Senior Certificate",
      years: "Jan 2016 - Dec 2017"
    },
  ]

  
  toggle() {
    this.expand = !this.expand;
    this.anchor = this.expand ? 'Show less' : 'Read more';
  }

}
