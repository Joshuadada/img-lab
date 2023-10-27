import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompressorService } from 'src/app/core/services/compressor/compressor.service';

@Component({
  selector: 'app-compress-img',
  templateUrl: './compress-img.component.html',
  styleUrls: ['./compress-img.component.scss'],
})
export class CompressImgComponent implements OnInit {
  outImage: any;

  imageType = '' as string;
  imageName = '' as string;
  converterModal = false as boolean;
  isSuccessful = false as boolean;
  imageUrl: any;

  imageInputType: any;

  pngImageData: any;
  jpgImageData: any;
  webpImageData: any;
  faviconImageData: any;
  tiffImageData: any;
  gifImageData: any;
  svgImageData: any;
  epsImageData: any;
  avifImageData: any;
  apngImageData: any;

  imageForm!: FormGroup;

  constructor(private compressorService: CompressorService) {}

  ngOnInit(): void {
    this.initImageForm();
  }

  selectImg(event: any) {
    const file = event.target.files[0];
    console.log(event);
    if (file) {
      this.converterModal = true;
      const reader = new FileReader();
      this.getImgType(file.type);
      this.imageName = file.name.slice(0, file.name.indexOf('.'));
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };

      reader.readAsDataURL(file);
      this.outImage = document.getElementById('outImage') as HTMLImageElement;

      this.isSuccessful = false;
    }
  }

  initImageForm() {
    this.imageForm = new FormGroup({
      imgQuality: new FormControl(),
    });
  }

  getImgType(rawType: string) {
    this.imageType = rawType.slice(6);
  }

  compressJpgImage() {
    this.compressorService.compressJpgImage(
      this.outImage,
      Number(this.imageForm.value.imgQuality),
      (jpgImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (jpgImageData) {
          this.jpgImageData = jpgImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  compressImage() {
    this.compressJpgImage();
    if (this.imageType === 'png') {
      // this.convertToPng();
    }
    if (this.imageType.includes('jpg') || this.imageType.includes('jpeg')) {
      this.compressJpgImage();
    }
    if (this.imageType.includes('webp')) {
      // this.convertToWebp();
    }
    if (this.imageType.includes('ico')) {
      // this.convertToFavicon();
    }
    if (this.imageType.includes('tiff')) {
      // this.convertToTiff();
    }
    if (this.imageType.includes('gif')) {
      // this.convertToGif();
    }
    if (this.imageType.includes('eps')) {
      // this.convertToEps();
    }
    if (this.imageType.includes('avif')) {
      // this.convertToAvif();
    }
    if (this.imageType.includes('apng')) {
      // this.convertToApng();
    }
    if (this.imageType.includes('svg')) {
      // this.convertToSvg();
    }
  }

  downloadPngImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.pngImageData;
    downloadLink.download = `${this.imageName}.png`;
    downloadLink.click();
  }

  downloadJpgImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.jpgImageData;
    downloadLink.download = `${this.imageName}.jpg`;
    downloadLink.click();
  }

  downloadWebpImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.webpImageData;
    downloadLink.download = `${this.imageName}.webp`;
    downloadLink.click();
  }

  downloadFaviconImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.faviconImageData;
    downloadLink.download = `${this.imageName}.ico`;
    downloadLink.click();
  }

  downloadTiffImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.tiffImageData;
    downloadLink.download = `${this.imageName}.tiff`;
    downloadLink.click();
  }

  downloadGifImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.gifImageData;
    downloadLink.download = `${this.imageName}.gif`;
    downloadLink.click();
  }

  downloadEpsImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.epsImageData;
    downloadLink.download = `${this.imageName}.eps`;
    downloadLink.click();
  }

  downloadAvifImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.avifImageData;
    downloadLink.download = `${this.imageName}.avif`;
    downloadLink.click();
  }

  downloadApngImage() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.apngImageData;
    downloadLink.download = `${this.imageName}.apng`;
    downloadLink.click();
  }

  downloadSvgImage() {
    if (this.svgImageData) {
      const blob = new Blob([this.svgImageData], { type: 'image/svg+xml' });
      const url = window.URL.createObjectURL(blob);

      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `${this.imageName}.svg`;
      downloadLink.click();

      window.URL.revokeObjectURL(url);
    }
  }

  downloadImage() {
    if (this.imageType === 'png') {
      this.downloadPngImage();
    }
    if (this.imageType.includes('jpg') || this.imageType.includes('jpeg')) {
      this.downloadJpgImage();
    }
    if (this.imageType.includes('webp')) {
      this.downloadWebpImage();
    }
    if (this.imageType.includes('ico')) {
      this.downloadFaviconImage();
    }
    if (this.imageType.includes('tiff')) {
      this.downloadTiffImage();
    }
    if (this.imageType.includes('gif')) {
      this.downloadGifImage();
    }
    if (this.imageType.includes('eps')) {
      this.downloadEpsImage();
    }
    if (this.imageType.includes('avif')) {
      this.downloadAvifImage();
    }
    if (this.imageType.includes('apng')) {
      this.downloadApngImage();
    }
    if (this.imageType.includes('svg')) {
      this.downloadSvgImage();
    }
  }
}
