import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompressorService {
  constructor() {}

  // Compress the image
  compressJpgImage(
    inputImage: HTMLImageElement,
    quality: number,
    callback: (result: string | ArrayBuffer | null) => void
  ) {
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      // Canvas is not supported
      return;
    }

    canvas.width = inputImage.naturalWidth;
    canvas.height = inputImage.naturalHeight;

    // Draw the input image on the canvas
    ctx.drawImage(
      inputImage,
      0,
      0,
      inputImage.naturalWidth,
      inputImage.naturalHeight
    );

    // Compress the canvas content to a data URL with the specified quality (0-1)
    const compressedImageData = canvas.toDataURL('image/jpeg', quality);

    // Invoke the callback with the compressed JPEG data URL
    callback(compressedImageData);
  }
}
