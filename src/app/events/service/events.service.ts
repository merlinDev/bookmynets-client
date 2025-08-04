import { Injectable } from '@angular/core';
import { ErrorCallback, NextCallback, ServiceHelper } from '../../common/service/service.helper';
import { EventsModel } from '../models/events.module';
import { ErrorModel } from '../../common/models/common/error.model';
import { ResultModel } from '../../common/models/common/result.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _: ServiceHelper) { }
  public  Publish_Status=1;
  public  UnPublish_Status=2;

  public getAllEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: string) {
    this._.api().url('portal/event').get((r: any) => {
      console.log(r);
      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    }, data)
  }
  public getEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, seo: string) {

    this._.api().url('event/seo_title').noAuth().get((r: any) => {
   
      console.log(r);
      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    }, seo)
  }
  public AddEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<HttpErrorResponse>, data: any) {


    this._.api().url('portal/event/add').json(data).post((r: ResultModel) => {

      // set logged in user to storage

      console.log(r);

      if (callback)
        callback(r)
    }, (e: HttpErrorResponse) => {
      if (error)
        error(e)
    })
  }
  public UpdateEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<HttpErrorResponse>, data: any) {


    this._.api().url('portal/event/edit').json(data).put((r: ResultModel) => {

      // set logged in user to storage

      console.log(r);

      if (callback)
        callback(r)
    }, (e: HttpErrorResponse) => {
      if (error)
        error(e)
    })
  }
  public DeleteEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: any) {


    this._.api().url('portal/event/delete/' + data).json(data).delete((r: ResultModel) => {

      // set logged in user to storage

      console.log(r);

      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    })
  }
  public PublishEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: any) {
    var payload = {
      "event_id": data,
      "publish_status": 1
    }

    this._.api().url('portal/event/publish').json(payload).put((r: ResultModel) => {

      // set logged in user to storage

      console.log(r);

      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    })
  }
  public UnPublishEvents(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: any) {
    var payload = {
      "event_id": data,
      "publish_status": 2
    }

    this._.api().url('portal/event/publish').json(payload).put((r: ResultModel) => {

      // set logged in user to storage

      console.log(r);

      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    })
  }
  public getAllLocations(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: string) {
    this._.api().url('portal/event/locations').get((r: any) => {
     
      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    }, data)
  }
}
