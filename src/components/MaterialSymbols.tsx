"use client";

import { useEffect } from "react";

const ICON_FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";

/**
 * Loads the Material Symbols icon font without blocking the first paint.
 *
 * Previously this stylesheet was a synchronous <link rel="stylesheet"> in the
 * document <head>, which is render-blocking: on a slow mobile connection the
 * browser waited for this cross-origin request before painting anything, which
 * showed up as a long blank screen. The icons are decorative, so we load the
 * stylesheet after mount instead. The <head> still preconnects to the font
 * origins, so the fetch is fast once it starts.
 */
export function MaterialSymbols() {
  useEffect(() => {
    if (document.querySelector(`link[data-material-symbols]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ICON_FONT_HREF;
    link.setAttribute("data-material-symbols", "");
    document.head.appendChild(link);
  }, []);

  return null;
}
