import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../../common/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../auth/service/auth.service';
import { AuthStorageHelper } from '../../../auth/service/auth-storage.helper';
interface Node {

  name: string,
  route?: string,
  children?: Node[];
  single?: boolean
}

const TREE_DATA: Node[] = [
  {
    name: 'reservations',
    route: 'dashboard/reservations',
    children: [{ name: 'View Reservations', route: 'dashboard/reservations/view-reservations' }, { name: 'Make A Reservations', route: 'dashboard/reservations/make-a-reservation' }],

  },
  {

    name: 'manage work week',
    route: 'dashboard/work_week_manage',
    children: [{ name: '' }],

  },
  {

    name: 'settings',
    route: 'dashboard/settings',
    children: [{ name: '' }],


  },
  {
    name: 'payments',
    route: 'dashboard/payments',
    children: [{ name: '' }],


  },
  {
    name: 'Logout',
    children: [{ name: '' }],
    single: true
  },
];

@Component({
  selector: 'app-nav-parent',
  templateUrl: './nav-parent.component.html',
  styleUrl: './nav-parent.component.scss'
})
export class NavParentComponent {
isNode(node: Node) {
  if(node.route){
return true
  }
  return false

}
loged_user:any;
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  constructor(private router: Router, public dialog: MatDialog,private _auth_service: AuthService,private auth_storage_helper:AuthStorageHelper) {
    this.dataSource.data = TREE_DATA;
  this.loged_user =auth_storage_helper.get_user();
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {

        console.log(val.url)
        this.changeNav(val.url)
      }
    });
  }

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  nodeExpand(node: any) {

    var parent = this.getParent(node);

    if (parent == -1) {
      this.treeControl.collapseAll();
      this.treeControl.expand(node);
     if(node.name=="Logout"){
      this.logout()
     }

    } else {
      if (!parent) {

        this.treeControl.collapseAll();
        this.treeControl.expand(node);
        this.router.navigate([node.route]);
        if (node.children?.length>0){
          this.treeControl.expand(node.children[0]);
        }
      } else {

        var children = parent.children;
        if (children)
          for (let index = 0; index < children.length; index++) {
            const element = children[index];
            this.treeControl.collapse(element);
          }
        this.treeControl.expand(parent);
        this.treeControl.expand(node);

        this.router.navigate([node.route]);
      }
    }
  }
  nodeCollapse(node: any) {
    if (node.children) {
      this.treeControl.collapseAll();
    } else {
      this.treeControl.expand(node);
    }
  }

  getParent(node: Node): any {
    for (let index = 0; index < TREE_DATA.length; index++) {
      const element = TREE_DATA[index];
      if (element.children?.includes(node)) {
        return element;
      }
    }
    if (node.single) {
      return -1;
    } else {
      return null;
    }

  }

  findNodeByRoute(tree: Node[], targetRoute: string): Node | undefined {
    for (const node of tree) {
      if (node.route === targetRoute) {
        return node;
      }

      if (node.children) {
        const childResult = this.findNodeByRoute(node.children, targetRoute);
        if (childResult) {
          return childResult;
        }
      }
    }

    return undefined;
  }
  removeLeadingSlash(route: string): string {
    return route.replace(/^\//, '');
  }
  changeNav(targetRoute: string) {

    targetRoute = this.removeLeadingSlash(targetRoute);
    const foundNode = this.findNodeByRoute(TREE_DATA, targetRoute);

    if (foundNode) {

      this.nodeExpand(foundNode)
    }
  }

logout(){

  var data = {
    title: "Log out",
    text: "Are you sure  you want to logout from the system?",
    msg_type: "",
    msg: "",
    positive_button: "YES",
    negative_button: "CANCEL",
  }
  const dialogRef = this.dialog.open(ConfirmationDialogComponent
    , {
    width: '25vw',
    data: data,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this._auth_service.logOut();
      this.router.navigate(['auth/login']);
    }

  });
}
}
