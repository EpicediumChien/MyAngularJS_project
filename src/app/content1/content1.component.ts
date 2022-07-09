import { Component } from "@angular/core";

@Component({
    selector: 'app-content1',
    templateUrl: './content1.component.html'
})
export class Content1Component {
    allowNewServer = false;
    serverCreationStatus = 'No Server was created!'

    onCreateServer() {
        this.serverCreationStatus = 'Server was created!'
    }
}