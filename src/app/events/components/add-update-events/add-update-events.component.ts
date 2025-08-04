import { Component } from '@angular/core';
import { FileResultModel } from '../../../common/models/common/file-result.model';
import { EventsModel } from '../../models/events.module';
import { EventsFormModule } from '../../models/events.form/events.form.module';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../service/events.service';
import { FileUploadService } from '../../../common/service/fileUpload_service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModel } from '../../../common/models/common/error.model';
import { EventsInit } from '../../models/events-init.module';
import { ResultModel } from '../../../common/models/common/result.model';
import { DoneDialogComponent } from '../../../common/components/dialogs/done-dialog/done-dialog.component';
import { Observable, map, startWith } from 'rxjs';
import { Location } from '../../models/location.model';
import { FormControl } from '@angular/forms';
import moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-update-events',
  templateUrl: './add-update-events.component.html',
  styleUrl: './add-update-events.component.scss'
})
export class AddUpdateEventsComponent {
  title = "Update Events";
  subtitle = "You can update events from here."
  imageUrl: string | null = null;
  imageUrls: Array<FileResultModel> = [];
  files: Array<File> | undefined;
  events: EventsModel | any;
  locations: Location[] = []
  errors: any = [];
  _events_form: EventsFormModule = new EventsFormModule();

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private upload_service: FileUploadService, private router: Router, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getLocations();
    this.route.params.subscribe(params => {
      if (params['events']) {
        var data = params['events'];
        this.getEvents(data)
      } else {
        this.title = "Add Events";
        this.subtitle = "You can add events from here.";
      }
    })
  }

  getEvents(seo: string) {
    this.eventsService.getEvents(
      (r: any) => {
        this.events = r.result;
        this.events.images.forEach((object: { "image_name": string, "image_path": string }) => {
          this.imageUrls.push({ "filename": object.image_name, "temp_url": object.image_path });
        });
        this._events_form = new EventsFormModule(this.events);

      }, (e: ErrorModel) => {

      }, 'seo_title=' + seo)
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.imageUrl = file.name;
      this.uploadImage(Array.from(files));
    }
  }

  onImageInputChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.imageUrl = file.name;
      this.uploadImage(Array.from(files));
    }
  }

  uploadImage(files: Array<File>) {

    this.upload_service.Upload_file((r: any) => {
   

      r.result.forEach((e: FileResultModel) => {
     
        this.imageUrls.push(e);
      });

    }, (e: HttpErrorResponse) => {
          this.errors["image_names"] = "Image too large"
    
    }, files)
  }
  saveEvents(publish_status: number) {
    var form_data = this._events_form.get_value();
   
   
    var location=this.locations.find(item => item.name === form_data.location);
    if(!location){
     location={name:form_data.location,id:""};
    }
   
    var data: EventsInit = {
      title: form_data.title,
      description: form_data.description,
      location: location,
      image_names: this.imageUrls.map(img => img.filename),
      date: moment(form_data.date).format("YYYY-MM-DD HH:mm:ss.SSS"),
      publish_status: publish_status
    }

    if (this.events) {
      data.event_id = this.events.event_id;
      this.eventsService.UpdateEvents(
        (r: ResultModel) => {
          this.Done({ title: 'The events has been updated successfully!', image: 'done.png' });
          this._events_form = new EventsFormModule(r.result);
        },(e: HttpErrorResponse) => {
          if (e.status == 422) {
            e.error.detail.map((errorData: any) => {
              this.errors[errorData.loc[1]] = errorData.msg
        
            });
          }
        }, data)
    }
    else {
      this.eventsService.AddEvents(
        (r: ResultModel) => {
          this.Done({ title: 'The events has been added successfully!', image: 'done.png' });
   
        }, (e: HttpErrorResponse) => {
          if (e.status == 422) {
            e.error.detail.map((errorData: any) => {
              this.errors[errorData.loc[1]] = errorData.msg
        
            });
          }
        }, data)
    }



  }

  viewEvents() {
    this.router.navigate(['dashboard/events/view-events']);
    //NavParentComponent.changeNav('dashboard/events/add-events')
  }

  removeIcon(filename: string) {
    var imageIndex = this.imageUrls.findIndex((e: FileResultModel) => { e.filename == filename });
    this.imageUrls.splice(imageIndex, 1)

  }

  Done(data: any): void {
    const dialogRef = this.dialog.open(DoneDialogComponent, {
      width: '16vw',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.viewEvents();
      //this.animal = result;
    });
  }

  getLocations() {

    this.eventsService.getAllLocations(
      (r: any) => {
        this.locations = r.result;
        this.options = this.locations.map((item) => item.name);
        if (this._events_form.form.get('location')) {
          const locationControl = this._events_form.form.get("location") as FormControl<any>;
          this.filteredOptions = locationControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        }
      }, (e: ErrorModel) => {

      }, "")


  }

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
