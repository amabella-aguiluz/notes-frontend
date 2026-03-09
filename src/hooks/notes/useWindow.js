import { useState, useCallback } from "react";

/**
 * useWindow
 * Manages open/close state for any UI element.
 * Optionally tracks an anchor element (like Material-UI menus).
 */
export const useWindow = () => {
  const [window, setWindow] = useState(null);

  const open = Boolean(window);

  const handleOpen = useCallback((event = null) => {
    // if event is provided = is anchored to an element
    // if no event = open modal center

    setWindow(event?.currentTarget || true); // true if no element
  }, []);

  const handleClose = useCallback(() => {
    setWindow(null);
  }, []);

  return { open, window, handleOpen, handleClose };
};