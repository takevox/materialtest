import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"



@Component({
  selector: 'app-timer-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './timer-node.component.html',
  styleUrl: './timer-node.component.scss'
})
export class TimerNodeComponent extends CustomNodeComponent {}
