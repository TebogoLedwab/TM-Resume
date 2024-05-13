import { Component } from '@angular/core';

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

  readonly experience: Experience[] = [
    {
      id: 1,
      companyName: "Hollard Health",
      role: "UI/UX Developer",
      years: "Present",
      location: "Johanessburg, Gauteng",
      jobDescription: "wertyuiokijhgfdcfvgbhnjmnbvcxsdertyuiolkjhgfdxcvbn"
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

}
