import { Location } from "./location.model";

export interface EventsInit {
  event_id?: string,
  title: string,
  description: string,
  image_names: string[],
  location:Location,
  date: string,
  publish_status?:number
}