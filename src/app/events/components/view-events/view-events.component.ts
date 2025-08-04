import { Component } from '@angular/core';
import { EventsModel } from '../../models/events.module';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../service/events.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorModel } from '../../../common/models/common/error.model';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrl: './view-events.component.scss'
})
export class ViewEventsComponent {
  take = 10;
  page = 0;
  total_count = 0;
  search_text="";
  events: Array<EventsModel> | undefined;
  date: string | undefined='';
  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService,private router: Router) {
  }
  range = new FormGroup({
    date_from: new FormControl<Date | null>(null),
    date_to: new FormControl<Date | null>(null),
  });
  ngOnInit() {
    // this.activatedRoute.data.subscribe((data: any) => {
    //   alert("dsd")
    //   this.events = data.resolvedData.result;
    // });

    this.getAllEvents();
  }
  changeTake(e: any) {
    this.take = e.target.value;
    this.page=0;
    this.getAllEvents();
  }
  dateChange(){
 var date="";
    if((this.range.value.date_from)){
      
      date+="&date_from="+(this.range.value.date_from).toISOString();
    }
    if((this.range.value.date_to)){
      date+="&date_to="+(this.range.value.date_to).toISOString();
    }
    this.date=date;
    this.getAllEvents()
  }

  pageChange(num: number) {
    if(num<=0 && !(0>=(this.take*this.page))){
      this.page = this.page + num;
      this.getAllEvents()
    }else if(num>0 && !((this.take*(this.page+1)>=this.total_count))){
      this.page = this.page + num;
      this.getAllEvents()
    }

  }
  searchText(e: any) {
  this.search_text=e.target.value;
    this.page=0;
    this.getAllEvents();
  }
  getAllEvents() {
    this.eventsService.getAllEvents(
      (r: any) => {
        console.log("r.result");
        console.log(r.result);
        this.events = r.result.data;
        this.total_count = r.result.page.count;

      }, (e: ErrorModel) => {


}, "take=" + this.take + '&skip=' + (this.page * this.take)+this.date+"&search_text="+this.search_text)


  }
  addEvents(){
    this.router.navigate(['dashboard/events/add-events']);
    //NavParentComponent.changeNav('dashboard/events/add-events')
  }
 
}
