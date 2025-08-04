import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsModel } from '../../models/events.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from '../../service/events.service';
import { ConfirmationDialogComponent } from '../../../common/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ResultModel } from '../../../common/models/common/result.model';
import { ErrorModel } from '../../../common/models/common/error.model';
import { DoneDialogComponent } from '../../../common/components/dialogs/done-dialog/done-dialog.component';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent {
  @Output()update=new EventEmitter(); 
  @Input() events: EventsModel | any;
  router: any;
  expanded: boolean = false;

  constructor(router: Router, public dialog: MatDialog
    , private eventsService: EventsService) {
    this.router = router;
   
  }

  ngOnInit(): void {
    if(this.events.is_published==this.eventsService.Publish_Status){
      this.events.is_published=true;
    }else{
      this.events.is_published=false;
    }
  }

  to_recipe() {
    // var data = {
    //   recipe: this.events.seo_title
    // }


    // this.router.navigate(['/view-recipe/'+recipe_id]);
    this.router.navigate(['/dashboard/events/update-events/' + this.events.seo_title]);
  }

  AskToDelete(): void {
    var data = {
      title: "Delete Events",
      text: "Are you sure you want to delete this events?",
      msg_type: "warning",
      msg: "This action cannot be undone, and all associated information will be permanently removed.",
      positive_button: "DELETE",
      negative_button: "CANCEL",
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent
      , {
      width: '25vw',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
      //this.animal = result;
    });
  }

  delete() {
    this.eventsService.DeleteEvents(
      (r: ResultModel) => {
        console.log(r.result);
        this.Done({title:'The events has been successfully deleted!',image:'delete.png'});
       
      }, (e: ErrorModel) => {
        console.log(e);
      }, this.events.event_id)
  }

  publish() {
    this.eventsService.PublishEvents(
      (r: ResultModel) => {
        console.log(r.result);
        this.change();
      }, (e: ErrorModel) => {
        console.log(e);
      }, this.events.event_id)
  }

  unpublish() {
    this.eventsService.UnPublishEvents(
      (r: ResultModel) => {
        console.log(r.result);
        this.change();
      }, (e: ErrorModel) => {
        console.log(e);
      }, this.events.event_id)
  }

  change(){
    this.update.emit();
  }

  Done(data:any): void {
   
    const dialogRef = this.dialog.open(DoneDialogComponent, {
      width: '16vw',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.change();
      //this.animal = result;
    });
  }

 

}


