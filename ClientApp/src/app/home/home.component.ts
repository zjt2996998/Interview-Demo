import { Component } from '@angular/core';

/**
 * HomeComponent
 *
 * */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sequence = [
    {
      id: 0,
      display: "Hello Joe",
      speaker: "jane"
    },
    {
      id: 1,
      display: "Good morning Jane, How are you doing today?",
      speaker: "joe"
    },
    {
      id: 2,
      display: "Well I guess I'm...",
      speaker: "jane",
      choices: [
        {
          display: "Having a terrible day",
          goto: 3,
        },
        {
          display: "Having a wonderful day",
          goto: 4,
        }
      ]
    },
    {
      id: 3,
      display: "Sorry to hear that",
      speaker: 'joe',
      mood: 'sad',
      goto: 5,
    },
    {
      id: 4,
      display: "Great news! Hope it stays that way",
      mood: 'happy',
      speaker: 'joe'
    },
    {
      id: 5,
      display: "Goodbye",
      speaker: "jane"
    }

  ];
  public res = this.sequence[0].display
  private num = 0
  public show: boolean = false;
  /**
   * Click method for change the person
   * @param null
   * */
  clickP() {
    // Get img by Id
    const joe = document.getElementById('joe')
    const jane = document.getElementById('jane')
    // Change img status by json sperker
    if (this.sequence[this.num].speaker == "joe") {
      joe.style.animation = 'myfirst 2s infinite'
      jane.style.animation = 'mySconed 2s infinite'
    }
    else if (this.sequence[this.num].speaker == "jane") {
      joe.style.animation = 'mySconed 2s infinite'
      jane.style.animation = 'myfirst 2s infinite'
    }
    if (this.num == 3) {
      this.num = this.sequence[this.num].goto
      this.res = this.sequence[this.num].display
      joe.style.animation = 'mySconed 2s infinite'
      jane.style.animation = 'myfirst 2s infinite'

    }  else if (this.num < 5 && this.num != 3) {
      this.num += 1
      //Display the values dynamically 
      this.res = this.sequence[this.num].display
      //Display or hide the List
      if (this.num == 2) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
  /**
   * click method for the list
   * @param num
   */
  clickChoose(num) {
    
    this.res = this.sequence[num.goto].display
    this.show = false
    this.num = num.goto
    console.log(this.sequence[this.num].speaker, this.num)
  }
}
