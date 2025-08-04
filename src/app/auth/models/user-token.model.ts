export class UserTokenModel {
    expire_at: string;
    first_name: string;
    last_name: string;
    token: string;
    user_id: string;
    user_image: string;
    user_status: number;

    constructor(obj: any) {
        this.expire_at = obj.expire_at
        this.first_name = obj.first_name
        this.last_name = obj.last_name
        this.token = obj.token
        this.user_id = obj.user_id
        this.user_image = obj.user_image
        this.user_status = obj.user_status
    }
    
    
}