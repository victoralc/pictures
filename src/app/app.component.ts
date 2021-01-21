import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Pictures Web Application";
  photos = [
    {
      url: 'https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300',
      description: 'Leão'
    },
    {
      url: 'https://image.freepik.com/free-photo/sunset-lake-beautiful-sunset-clouds-lake-landscape-background_9635-881.jpg',
      description: 'Leoa'
    }
  ];
}
