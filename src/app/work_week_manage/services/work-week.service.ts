import { Injectable } from '@angular/core';
import { ErrorCallback, NextCallback, ServiceHelper } from '../../common/service/service.helper';
import { ResultModel } from '../../common/models/common/result.model';
import { ErrorModel } from '../../common/models/common/error.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkWeekService {

  constructor(private _:ServiceHelper) { 
    
  }

  public getWorkWeek(callback: NextCallback<ResultModel>, error: ErrorCallback<ErrorModel>, data: string) {
    this._.api().url('service-provider/portal/week/'+data).get((r: any) => {
      console.log(r);
      if (callback)
        callback(r)
    }, (e: ErrorModel) => {
      if (error)
        error(e)
    }, "")
  }

public editCategory(callback: NextCallback<ResultModel>, error: ErrorCallback<HttpErrorResponse>, data: any) {
  this._.api().url('service-provider/portal/work-week/').json(data).put((r: ResultModel) => {
    console.log(r);
    if (callback)
      callback(r)
  }, (e: HttpErrorResponse) => {
    if (error)
      error(e)
    })
  }

}
