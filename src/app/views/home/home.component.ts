import { Component, signal, ChangeDetectionStrategy, AfterViewInit } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"

import { CounterNodeComponent } from "../../nodes/counter-node/counter-node.component"
import { ModulateNodeComponent } from "../../nodes/modulate-node/modulate-node.component"
import { SumNodeComponent } from "../../nodes/sum-node/sum-node.component"
import { TimerNodeComponent } from "../../nodes/timer-node/timer-node.component"
import { TimeValueNodeComponent } from "../../nodes/time-value-node/time-value-node.component"
import { TimeAddNodeComponent } from "../../nodes/time-add-node/time-add-node.component"
import { TimeDiffNodeComponent } from "../../nodes/time-diff-node/time-diff-node.component"
import { WidgetNodeComponent } from "../../nodes/widget-node/widget-node.component"

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[
    VflowModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {

  public nodes: Node[] = [
    {
      id: '5',
      point: { x: 100, y: 100 },
      type: CounterNodeComponent,
      data: {
        id: {
          name: signal('‚ ‚¢‚³‚Â'),
          count: signal(51),
          min: signal(0),
          max: signal(-1),
        }
      }
    },
    {
      id: '6',
      point: { x: 100, y: 500 },
      type: CounterNodeComponent,
      data: {
        id: {
          name: signal('�‰Œ©‚³‚ñ'),
          count: signal(3),
          min: signal(0),
          max: signal(-1),
        }
      }
    },
    {
      id: '7',
      point: { x: 300, y: 100 },
      type: ModulateNodeComponent,
      data: {
        id: {
          radix: signal(10),
          multiply: signal(1),
        }
      }
    },
    {
      id: '8',
      point: { x: 300, y: 500 },
      type: ModulateNodeComponent,
      data: {
        id: {
          radix: signal(1),
          multiply: signal(3),
        }
      }
    },
    {
      id: '10',
      point: { x: 500, y: 400 },
      type: SumNodeComponent,
      data: {
        id: {
          inputs: signal([]),
        }
      }
    },
    {
      id: '12',
      point: { x: 700, y: 200 },
      type: TimeValueNodeComponent,
      data: {
        id: {
          name: signal("Šî�€ŽžŠÔ"),
          timevalue: signal("07:00:00"),
        }
      }
    },
    {
      id: '9',
      point: { x: 700, y: 400 },
      type: CounterNodeComponent,
      data: {
        id: {
          name: signal('�‡ŒvŽžŠÔ(•ª)'),
          count: signal(14),
          min: signal(0),
          max: signal(-1),
        }
      }
    },
    {
      id: '11',
      point: { x: 900, y: 100 },
      type: TimerNodeComponent,
    },
    {
      id: '13',
      point: { x: 900, y: 300 },
      type: TimeAddNodeComponent,
      data: {
        id: {
          inputs: signal([]),
        }
      }
    },
    {
      id: '15',
      point: { x: 1100, y: 300 },
      type: TimeValueNodeComponent,
      data: {
        id: {
          name: signal("�I—¹—\’èŽžŠÔ"),
          timevalue: signal("07:14:00"),
        }
      }
    },
    {
      id: '16',
      point: { x: 1300, y: 200 },
      type: TimeDiffNodeComponent,
    },
    {
      id: '17',
      point: { x: 1600, y: 200 },
      type: WidgetNodeComponent,
    },
  ]

  public edges: Edge[] = [
    {
      id: '5-count -> 7-input',
      source: '5',
      sourceHandle: 'count-out',
      target: '7',
      targetHandle: 'input-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '6-count -> 8-input',
      source: '6',
      sourceHandle: 'count-out',
      target: '8',
      targetHandle: 'input-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '7-output -> 10-input',
      source: '7',
      sourceHandle: 'output-out',
      target: '10',
      targetHandle: 'input-1',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '8-output -> 10-input',
      source: '8',
      sourceHandle: 'output-out',
      target: '10',
      targetHandle: 'input-2',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '10-output -> 9-input',
      source: '10',
      sourceHandle: 'output-out',
      target: '9',
      targetHandle: 'count-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '12-timevalue -> 13-input',
      source: '12',
      sourceHandle: 'timevalue-out',
      target: '13',
      targetHandle: 'timevalue-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '9-count -> 13-input',
      source: '9',
      sourceHandle: 'count-out',
      target: '13',
      targetHandle: 'addvalue-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '13-count -> 15-input',
      source: '13',
      sourceHandle: 'output-out',
      target: '15',
      targetHandle: 'timevalue-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '11-count -> 15-input',
      source: '11',
      sourceHandle: 'timestamp-out',
      target: '16',
      targetHandle: 'timevalue1-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '15-count -> 16-input',
      source: '15',
      sourceHandle: 'timevalue-out',
      target: '16',
      targetHandle: 'timevalue2-in',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '16-timevalue -> 17-timevalue',
      source: '16',
      sourceHandle: 'timevalue-out',
      target: '17',
      targetHandle: 'in-timevalue',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '15-timevalue -> 16-input',
      source: '15',
      sourceHandle: 'timevalue-out',
      target: '17',
      targetHandle: 'in-lasttime',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '5-count -> 17-user',
      source: '5',
      sourceHandle: 'count-out',
      target: '17',
      targetHandle: 'in-user',
      markers: { end: { type: 'arrow' } }
    },
    {
      id: '6-count -> 17-user',
      source: '6',
      sourceHandle: 'count-out',
      target: '17',
      targetHandle: 'in-first',
      markers: { end: { type: 'arrow' } }
    },
  ]

  public connection: ConnectionSettings = {
    validator(connection) {
      if (connection.source === '3') {
        return false
      }

      return true
    }
  }

  handleConnect(connection: Connection) {
    const color = randomHex()
    this.edges = [...this.edges, {
      id: crypto.randomUUID(),
      type: 'template',
      data: {
        color
      },
      markers: {
        end: {
          type: 'arrow-closed',
          width: 30,
          height: 30,
          color
        }
      },
      edgeLabels: {
        center: {
          type: 'html-template',
          data: { color }
        }
      },
      ...connection
    }]
  }

  public deleteEdge(edge: Edge) {
    this.edges = this.edges.filter(e => e !== edge)
  }

  ngAfterViewInit(): void {

  }
}


function isComponentNode<T>(n: Node<T>): n is SharedNode & ComponentNode<T> {
  return CustomNodeComponent.isPrototypeOf(n.type)
}

function isDefaultNode(n: Node): n is SharedNode & DefaultNode {
  return n.type === 'default'
}

function randomHex() {
  const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  let hex = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
  }

  return hex
}
