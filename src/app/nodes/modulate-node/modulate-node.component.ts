import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"


export interface ModulateNodeData {
  id: {
    radix: WritableSignal<number>,
    multiply: WritableSignal<number>,
  }
}


@Component({
  selector: 'app-modulate-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './modulate-node.component.html',
  styleUrl: './modulate-node.component.scss'
})
export class ModulateNodeComponent extends CustomNodeComponent<ModulateNodeData> {}
