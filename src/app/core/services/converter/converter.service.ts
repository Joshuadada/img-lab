import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  // Function to convert an image to PNG format
  convertToPng(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (PNG format)
    const pngImageData = canvas.toDataURL('image/png');

    // Invoke the callback with the PNG data URL
    callback(pngImageData);
  }

  // convert to jpg
  convertToJpg(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const jpegImageData = canvas.toDataURL('image/jpeg');

    // Invoke the callback with the JPEG data URL
    callback(jpegImageData);
  }

  // convert to jpg
  convertToWebp(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const webpImageData = canvas.toDataURL('image/webp');

    // Invoke the callback with the JPEG data URL
    callback(webpImageData);
  }

  // convert to jpg
  convertToFavicon(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const faviconImageData = canvas.toDataURL('image/x-icon');

    // Invoke the callback with the JPEG data URL
    callback(faviconImageData);
  }

  // convert to jpg
  convertToTiff(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const tiffImageData = canvas.toDataURL('image/tiff');

    // Invoke the callback with the JPEG data URL
    callback(tiffImageData);
  }

  // convert to jpg
  convertToGif(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const gifImageData = canvas.toDataURL('image/gif');

    // Invoke the callback with the JPEG data URL
    callback(gifImageData);
  }

  // convert to jpg
  convertToEps(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const epsImageData = canvas.toDataURL('image/eps');

    // Invoke the callback with the JPEG data URL
    callback(epsImageData);
  }

  // convert to jpg
  convertToAvif(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const avifImageData = canvas.toDataURL('image/avif');

    // Invoke the callback with the JPEG data URL
    callback(avifImageData);
  }

  // convert to jpg
  convertToApng(
    inputImage: HTMLImageElement,
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

    // Convert the canvas content to a data URL (JPEG format)
    const apngImageData = canvas.toDataURL('image/avif');

    // Invoke the callback with the JPEG data URL
    callback(apngImageData);
  }

  convertImageToSVG(
    inputImage: HTMLImageElement,
    callback: (result: string | ArrayBuffer | null) => void
  ) {
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      // Canvas is not supported
      callback(null);
      return;
    }

    canvas.width = inputImage.naturalWidth;
    canvas.height = inputImage.naturalHeight;

    // Draw the input image on the canvas
    ctx.drawImage(inputImage, 0, 0);

    // Create an SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', inputImage.naturalWidth.toString());
    svg.setAttribute('height', inputImage.naturalHeight.toString());

    // Create an SVG image element
    const svgImage = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'image'
    );
    svgImage.setAttribute('x', '0');
    svgImage.setAttribute('y', '0');
    svgImage.setAttribute('width', inputImage.naturalWidth.toString());
    svgImage.setAttribute('height', inputImage.naturalHeight.toString());
    svgImage.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      inputImage.src // Use src attribute for xlink:href
    );

    // Append the SVG image to the SVG element
    svg.appendChild(svgImage);

    // Serialize the SVG to a string
    const svgString = new XMLSerializer().serializeToString(svg);

    // Callback with the SVG string
    callback(svgString as any);
  }
}
