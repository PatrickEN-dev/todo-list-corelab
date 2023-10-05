export type TFavoriteButtonProps = {
  initialValue: boolean;
  className?: string;
  onFavoriteChange: (isFavorite: boolean) => Promise<void> | void;
};
