import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConverterService } from 'src/app/core/services/converter/converter.service';

@Component({
  selector: 'app-convert-img',
  templateUrl: './convert-img.component.html',
  styleUrls: ['./convert-img.component.scss'],
})
export class ConvertImgComponent implements OnInit {
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

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {
    this.initImageForm();
  }

  selectImg(event: any) {
    const file = event.target.files[0];
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
      imageType: new FormControl(),
    });
  }

  getImgType(rawType: string) {
    this.imageType = rawType.slice(6);
  }

  convertToPng() {
    this.converterService.convertToPng(
      this.outImage,
      (pngImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (pngImageData) {
          this.pngImageData = pngImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToJpg() {
    this.converterService.convertToPng(
      this.outImage,
      (jpgImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (jpgImageData) {
          this.jpgImageData = jpgImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToWebp() {
    this.converterService.convertToWebp(
      this.outImage,
      (webpImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (webpImageData) {
          this.webpImageData = webpImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToFavicon() {
    this.converterService.convertToFavicon(
      this.outImage,
      (faviconImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (faviconImageData) {
          this.faviconImageData = faviconImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToTiff() {
    this.converterService.convertToTiff(
      this.outImage,
      (tiffImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (tiffImageData) {
          this.tiffImageData = tiffImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToGif() {
    this.converterService.convertToGif(
      this.outImage,
      (gifImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (gifImageData) {
          this.gifImageData = gifImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToEps() {
    this.converterService.convertToEps(
      this.outImage,
      (epsImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (epsImageData) {
          this.epsImageData = epsImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToAvif() {
    this.converterService.convertToAvif(
      this.outImage,
      (avifImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (avifImageData) {
          this.avifImageData = avifImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToApng() {
    this.converterService.convertToApng(
      this.outImage,
      (apngImageData: string | ArrayBuffer | null) => {
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        if (apngImageData) {
          this.apngImageData = apngImageData;
          this.isSuccessful = true;
        }
      }
    );
  }

  convertToSvg() {
    this.converterService.convertToFavicon(
      this.outImage,
      (svgImageData: string | ArrayBuffer | null) => {
        console.log(svgImageData);
        // Do something with the PNG image data (e.g., display it, send it to a server, etc.)
        // if (svgImageData) {
        //   this.svgImageData = svgImageData;
        //   this.isSuccessful = true;
        // }
      }
    );
  }

  convertImage() {
    if (this.imageForm.value.imageType === 'png') {
      this.convertToPng();
    }
    if (this.imageForm.value.imageType === 'jpg') {
      this.convertToJpg();
    }
    if (this.imageForm.value.imageType === 'webp') {
      this.convertToWebp();
    }
    if (this.imageForm.value.imageType === 'favicon') {
      this.convertToFavicon();
    }
    if (this.imageForm.value.imageType === 'tiff') {
      this.convertToTiff();
    }
    if (this.imageForm.value.imageType === 'gif') {
      this.convertToGif();
    }
    if (this.imageForm.value.imageType === 'eps') {
      this.convertToEps();
    }
    if (this.imageForm.value.imageType === 'avif') {
      this.convertToAvif();
    }
    if (this.imageForm.value.imageType === 'apng') {
      this.convertToApng();
    }
    if (this.imageForm.value.imageType === 'svg') {
      this.convertToSvg();
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
    if (this.imageForm.value.imageType === 'png') {
      this.downloadPngImage();
    }
    if (this.imageForm.value.imageType === 'jpg') {
      this.downloadJpgImage();
    }
    if (this.imageForm.value.imageType === 'webp') {
      this.downloadWebpImage();
    }
    if (this.imageForm.value.imageType === 'favicon') {
      this.downloadFaviconImage();
    }
    if (this.imageForm.value.imageType === 'tiff') {
      this.downloadTiffImage();
    }
    if (this.imageForm.value.imageType === 'gif') {
      this.downloadGifImage();
    }
    if (this.imageForm.value.imageType === 'eps') {
      this.downloadEpsImage();
    }
    if (this.imageForm.value.imageType === 'avif') {
      this.downloadAvifImage();
    }
    if (this.imageForm.value.imageType === 'apng') {
      this.downloadApngImage();
    }
    if (this.imageForm.value.imageType === 'svg') {
      this.downloadSvgImage();
    }
  }
}
