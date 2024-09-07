import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"


export interface CounterNodeData {
  id: {
    name: WritableSignal<string>,
    count: WritableSignal<number>,
    min: WritableSignal<number>,
    max: WritableSignal<number>,
  }
}


@Component({
  selector: 'app-counter-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './counter-node.component.html',
  styleUrl: './counter-node.component.scss'
})
export class CounterNodeComponent extends CustomNodeComponent<CounterNodeData> {}
