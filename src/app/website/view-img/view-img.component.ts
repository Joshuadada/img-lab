import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-img',
  templateUrl: './view-img.component.html',
  styleUrls: ['./view-img.component.scss'],
})
export class ViewImgComponent implements OnInit {
  imageUrl: any;
  imageType = '' as string;
  constructor() {}

  ngOnInit(): void {}

  selectImg(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      this.getImgType(file.type);
      // this.imageName = file.name.slice(0, file.name.indexOf('.'));
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };

      reader.readAsDataURL(file);
      // this.outImage = document.getElementById('outImage') as HTMLImageElement;
    }
  }

  getImgType(rawType: string) {
    this.imageType = rawType.slice(6);
  }
}
