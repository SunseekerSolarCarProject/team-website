import { Component, ElementRef, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ImageUploaderComponent),
        multi: true,
    }]
})
export class ImageUploaderComponent implements OnInit, ControlValueAccessor {

    @ViewChild('imagePreview') preview: ElementRef;

    selectedImage: File;

    currentImage: string;

    onChange: Function;

    constructor(
        private dbService: DatabaseService
    ) { }

    ngOnInit() {

    }

    writeValue(obj: any): void {
        this.currentImage = obj;
        this.preview.nativeElement.style.backgroundImage = `url(${this.currentImage})`;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState(isDisabled: boolean) {
    }

    fileUploaded(event) {
        this.selectedImage = event.target.files[0];
        this.showPreview();
        this.onChange(this.selectedImage);
    }

    showPreview() {
        const reader = new FileReader();
        const img = reader.readAsDataURL(this.selectedImage);
        reader.addEventListener('load', () => {
            this.preview.nativeElement.style.backgroundImage = `url(${reader.result})`;
          }, false);
    }

}
