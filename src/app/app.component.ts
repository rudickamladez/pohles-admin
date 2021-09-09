import { Component } from "@angular/core";
import { SocketService } from './socketio/socket.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "PohLes Admin";

  public constructor(
    private readonly socketService: SocketService,
  ) {
  }
}
