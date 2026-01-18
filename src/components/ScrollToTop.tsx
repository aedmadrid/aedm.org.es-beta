import React, { useLayoutEffect, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

type Props = {
  /**
   * If true, scrolling will use smooth behavior when available.
   * Defaults to false for immediate jumps (avoids jank on navigation).
   */
  smooth?: boolean;

  /**
   * CSS selector used to detect a fixed header (its height will be subtracted
   * from the scroll target). You can provide multiple selectors separated by commas.
   * Defaults to 'header, [data-scroll-offset], .fixed-header'.
   */
  offsetSelector?: string;

  /**
   * Additional pixel offset to subtract from computed target. Useful when you
   * have a header whose height changes or when you want extra spacing.
   */
  additionalOffset?: number;

  /**
   * When true, navigations that are "POP" (back/forward) will also trigger the
   * scroll behavior. If false, the browser's native restoration will be preserved
   * for POP navigations (recommended).
   */
  restoreOnPop?: boolean;
};

/**
 * ScrollToTop component
 *
 * - Scrolls to top on route change (by default for PUSH/REPLACE navigations).
 * - If the URL contains a hash (e.g. /page#section), attempts to scroll to the
 *   element with that id or named anchor and respects a fixed header offset.
 * - Respects browser back/forward restoration unless `restoreOnPop` is true.
 *
 * Usage: include <ScrollToTop /> inside your <BrowserRouter /> (once).
 */
export default function ScrollToTop({
  smooth = false,
  offsetSelector = "header, [data-scroll-offset], .fixed-header",
  additionalOffset = 0,
  restoreOnPop = false,
}: Props = {}) {
  const location = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  // When available, switch to manual scroll restoration so we can control
  // programmatic scrolling without clashing with browser default on history pop.
  useEffect(() => {
    const nav = window.history as unknown as {
      scrollRestoration?: "auto" | "manual";
    };
    if (!nav || typeof nav.scrollRestoration === "undefined") return;
    const previous = nav.scrollRestoration;
    try {
      nav.scrollRestoration = "manual";
    } catch {
      // Some browsers may throw; ignore and continue.
    }
    return () => {
      try {
        nav.scrollRestoration = previous;
      } catch {
        // ignore
      }
    };
  }, []);

  useLayoutEffect(() => {
    // Helper: compute header offset (sum heights of matching elements).
    const computeHeaderOffset = (): number => {
      let offset = 0;
      try {
        const els = document.querySelectorAll(offsetSelector || "");
        if (els && els.length) {
          els.forEach((el) => {
            if (!(el instanceof HTMLElement)) return;
            const style = window.getComputedStyle(el);
            if (style && style.display === "none") return;
            const rect = el.getBoundingClientRect();
            offset += rect.height;
          });
        }
      } catch {
        // selector could be invalid or other DOM errors - ignore.
      }
      offset += Math.max(0, Math.floor(additionalOffset || 0));
      return offset;
    };

    const { hash } = location;
    const isPop = navigationType === "POP";

    // If it's a POP navigation and restoreOnPop is false, skip programmatic scroll.
    if (isPop && !restoreOnPop) {
      // However, still handle hashes on POP because browsers sometimes don't jump to them.
      if (!hash) return;
    }

    // If there's a hash, try to scroll to the target element.
    if (hash) {
      // decode URI component and remove leading '#'
      const raw = hash.startsWith("#") ? hash.slice(1) : hash;
      let id = raw;
      try {
        id = decodeURIComponent(raw);
      } catch {
        // ignore decode errors and use raw
      }

      // Look for element by id first, then by name anchor.
      let target: HTMLElement | null = document.getElementById(id);
      if (!target) {
        const byName = document.querySelector<HTMLElement>(
          `a[name="${CSS.escape(id)}"]`,
        );
        if (byName) target = byName;
      }

      if (target) {
        const headerOffset = computeHeaderOffset();
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.pageYOffset - headerOffset;

        // Use scrollTo with fallback for browsers that don't support options.
        try {
          window.scrollTo({
            top: Math.max(0, Math.floor(top)),
            left: 0,
            behavior: smooth ? "smooth" : "auto",
          } as ScrollToOptions);
        } catch {
          // fallback
          window.scrollTo(0, Math.max(0, Math.floor(top)));
        }

        return;
      }

      // If element not found, fall through and scroll to top as a sensible default.
    }

    // No hash or couldn't find target => scroll to top.
    try {
      window.scrollTo({ top: 0, left: 0, behavior: smooth ? "smooth" : "auto" } as ScrollToOptions);
    } catch {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    location.pathname,
    location.hash,
    navigationType,
    smooth,
    offsetSelector,
    additionalOffset,
    restoreOnPop,
  ]);

  return null;
}
