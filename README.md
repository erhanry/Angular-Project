# Angular Project

SoftUni Project Defense
\
&nbsp;

## Built With

[![My Skills](https://skillicons.dev/icons?i=angular,js,ts,html,css,bootstrap,express,mongodb,vscode,docker)](https://skillicons.dev)
\
&nbsp;

# Angular sample code 　

```javascript
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Profile } from 'src/app/types/user';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: Profile | undefined = undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe({
      next: (user) => (this.user = user),
      error: (err) => console.error(`Error: ${err}`),
    });
  }

  totalPrice(bookList: Book[]) {
    return bookList.reduce((acc, { price }) => (acc += price), 0);
  }
}
```

\
&nbsp;

# Screenshots

### APP Structure

<div>
<img src="screenshots/APP Structure/img1.png" alt="APP Structure 1" align="top" width="250" height="800">
<img src="screenshots/APP Structure/img2.png" alt="APP Structure 2" align="top" width="250" height="800" style="margin-left: 30px">
</div>

\
&nbsp;

### Way of Work on the App

#### Angular 16

<img src="screenshots/Way of Work on the App/Angular.png" alt="Angular 16" width="700">

#### Expres.js

<img src="screenshots/Way of Work on the App/Express.png" alt="Expres.js" width="700">

\
&nbsp;

### Public Part

<img src="screenshots/Public Part/img1.png" alt="Public Part 1" width="700">
<img src="screenshots/Public Part/img2.png" alt="Public Part 2" width="700">
<img src="screenshots/Public Part/img3.png" alt="Public Part 3" width="700">
<img src="screenshots/Public Part/img4.png" alt="Public Part 4" width="700">

\
&nbsp;

### Native Design

<img src="screenshots/Native Design/img1.png" alt="Native Design 1" width="700">
<img src="screenshots/Native Design/img2.png" alt="Native Design 2" width="700">
<img src="screenshots/Native Design/img3.png" alt="Native Design 3" width="700">
<img src="screenshots/Native Design/img4.png" alt="Native Design 4" width="700">
<img src="screenshots/Native Design/img5.png" alt="Native Design 5" width="700">
<img src="screenshots/Native Design/img6.png" alt="Native Design 6" width="700">
<img src="screenshots/Native Design/img7.png" alt="Native Design 7" width="700">
<img src="screenshots/Native Design/img8.png" alt="Native Design 8" width="700">

\
&nbsp;

### Private Part

<img src="screenshots/Private Part/img1.png" alt="Private Part 1" width="700">
<img src="screenshots/Private Part/img2.png" alt="Private Part 2" width="700">
<img src="screenshots/Private Part/img3.png" alt="Private Part 3" width="700">
<img src="screenshots/Private Part/img4.png" alt="Private Part 4" width="700">
<img src="screenshots/Private Part/img5.png" alt="Private Part 5" width="700">
<img src="screenshots/Private Part/img6.png" alt="Private Part 6" width="700">
<img src="screenshots/Private Part/img7.png" alt="Private Part 7" width="700">
<img src="screenshots/Private Part/img8.png" alt="Private Part 8" width="700">
<img src="screenshots/Private Part/img9.png" alt="Private Part 9" width="700">
<img src="screenshots/Private Part/img10.png" alt="Private Part 10" width="700">
<img src="screenshots/Private Part/img11.png" alt="Private Part 11" width="700">
<img src="screenshots/Private Part/img12.png" alt="Private Part 12" width="700">

\
&nbsp;

### Possible functionalities

<img src="screenshots/Possible Functionalities/img1.png" alt="Possible functionalities 1" width="700">
<img src="screenshots/Possible Functionalities/img2.png" alt="Possible functionalities 2" width="700">
<img src="screenshots/Possible Functionalities/img3.png" alt="Possible functionalities 3" width="700">
<img src="screenshots/Possible Functionalities/img4.png" alt="Possible functionalities 4" width="700">
<img src="screenshots/Possible Functionalities/img5.png" alt="Possible functionalities 5" width="700">
<img src="screenshots/Possible Functionalities/img6.png" alt="Possible functionalities 6" width="700">
<img src="screenshots/Possible Functionalities/img7.png" alt="Possible functionalities 7" width="700">
<img src="screenshots/Possible Functionalities/img8.png" alt="Possible functionalities 8" width="700">
<img src="screenshots/Possible Functionalities/img9.png" alt="Possible functionalities 9" width="700">
<img src="screenshots/Possible Functionalities/img10.png" alt="Possible functionalities 10" width="700">
