declare module "@madzadev/image-slider" {
  import * as React from "react";

  export interface ImageItem {
    url: string;
  }

  export interface SliderProps {
    imageList: ImageItem[];
    width: number;
    height: number;
    loop?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showArrowControls?: boolean;
    showDotControls?: boolean;
    bgColor?: string;
  }

  const Slider: React.FC<SliderProps>;

  export default Slider;
}
