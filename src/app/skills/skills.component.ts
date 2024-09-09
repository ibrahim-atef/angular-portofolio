import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  focusTechnologies  = ['React', 'Node.js', 'MongoDB', 'Express.js', 'Angular', 'Flutter'];
  skills = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 75 },
    { name: 'JavaScript', progress: 70 }
  ];
}
