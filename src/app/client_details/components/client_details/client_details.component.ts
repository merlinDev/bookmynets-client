import { Component } from '@angular/core';
import { FileResultModel } from '../../../common/models/common/file-result.model';
import { FileUploadService } from '../../../common/service/fileUpload_service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-details',
  templateUrl: './client_details.component.html',
  styleUrl: './client_details.component.scss',
})
export class ClientDetailsComponent {
  imageUrl: string | null = null;
  imageUrls: Array<FileResultModel> = [];
  imagedata: Array<any> = [];
  errors: any = [];

  netsForm: FormGroup;
  availableSports = ['Cricket', 'Futsal', 'Other'];
  netsList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private upload_service: FileUploadService
  ) {
    this.netsForm = this.fb.group({
      name: [''],
      sports: [''],
    });
  }

  // _register_form: RegisterModel = new FormGroup({});
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

  registerFormSubmit() {}

  onImageInputChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.imageUrl = file.name;
      this.uploadImage(Array.from(files));
    }
  }
  removeIcon(imageIndex: number) {
    this.imageUrls.splice(imageIndex, 1);
    this.imagedata.splice(imageIndex, 1);
  }

  uploadImage(files: Array<File>) {
    this.upload_service.Upload_file(
      (r: any) => {
        r.result.forEach((e: FileResultModel) => {
          var data = {
            image: e.filename,
            image_order: this.imageUrls.length + 1,
          };
          this.imageUrls.push(e);
          this.imagedata.push(data);
        });
      },
      (e: HttpErrorResponse) => {
        this.errors['image_names'] = 'Image too large';
      },
      files
    );
  }

  addItem() {
    const name = this.netsForm.value.name;
    const sports = this.netsForm.value.sports
      ? [this.netsForm.value.sports]
      : [];

    if (name && sports.length > 0) {
      this.netsList.push({ name, sports });
    }
    this.netsForm.reset();
  }

  editItem(index: number) {
    const selectedNet = this.netsList[index];
    this.netsForm.patchValue({
      name: selectedNet.name,
      sports: selectedNet.sports[0],
    });
  }

  deleteItem(index: number) {
    this.netsList.splice(index, 1);
  }
}
