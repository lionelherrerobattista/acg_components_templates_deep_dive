import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<"online" | "offline" | "unknown">("offline"); // literal types
  // private interval?: ReturnType<typeof setInterval>; // avoid error with type
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    }); // signal state
  }


  ngOnInit() {
    // this.interval = setInterval(() => { // random state
    const interval = setInterval(() => { // random state
      const rnd = Math.random(); // 0 - 0.9999

      if (rnd < 0.5) {
        this.currentStatus.set("online");
      } else if (rnd < 0.9) {
        this.currentStatus.set("offline");
      } else {
        this.currentStatus.set("unknown");
      }
    }, 5000);

    // set up on destroy listener
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

}
