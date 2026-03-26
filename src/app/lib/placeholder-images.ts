
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * Defensive export to prevent runtime errors if JSON fails to load or is malformed.
 * This directly addresses the "Cannot read properties of undefined (reading 'find')" error.
 */
export const PlaceHolderImages: ImagePlaceholder[] = data?.placeholderImages || [];
