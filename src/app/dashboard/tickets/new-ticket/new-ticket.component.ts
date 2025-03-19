import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  enteredTitle = "";
  enteredText = "";
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();


  ngOnInit(): void {
    console.log("ON INIT");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    console.log(this.form?.nativeElement);

  }

  // onSubmit(title: string, ticketText: string) {
  //   this.add.emit({ title: title, text: ticketText });
  //   // reset form
  //   this.form?.nativeElement.reset();
  // }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    // reset form
    this.enteredTitle = "";
    this.enteredText = "";
  }

}
