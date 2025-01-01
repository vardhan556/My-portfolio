import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names with Tailwind CSS.
 * @param  {...any} inputs - Class names or conditions for class names.
 * @returns {string} - Merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
