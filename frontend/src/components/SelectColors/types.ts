export interface TSelectColorsProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export interface IColorOption {
  themeColor: string;
  textColor: string;
}
