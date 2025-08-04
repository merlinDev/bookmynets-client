import { ImageModel } from "../../common/models/common/image.model"
import { Location } from "./location.model"

export interface EventsModel {
  event_id?:string,
  title: string,
  description: string,
  image_name: string,
  is_published:number,
  created_by: string,
  created_at: string,
  modified_by: string,
  modified_at: string,
  image_path: string,
  date:string,
  seo_title: string,
  location:Location,
  images: Array<ImageModel>
}