import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"


export interface SumNodeData {
  id: {
    inputs: WritableSignal<[string]>,
  }
}


@Component({
  selector: 'app-sum-node',
  standalone: true,
  imports: [
    CommonModule,
    VflowModule,
  ],
  templateUrl: './sum-node.component.html',
  styleUrl: './sum-node.component.scss'
})
export class SumNodeComponent extends CustomNodeComponent<SumNodeData> {}
