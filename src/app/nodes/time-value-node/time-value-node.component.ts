import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"

export interface TimeValueNodeData {
  id: {
    name: WritableSignal<string>,
    timevalue: WritableSignal<string>,
  }
}


@Component({
  selector: 'app-time-value-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './time-value-node.component.html',
  styleUrl: './time-value-node.component.scss'
})
export class TimeValueNodeComponent extends CustomNodeComponent<TimeValueNodeData> {}
