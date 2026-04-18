import React, { useCallback, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(async () => {
    const button = buttonRef.current;
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    // Fallback for browsers without View Transitions support.
    if (!button || !doc.startViewTransition) {
      onToggle();
      return;
    }

    const { left, top, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      onToggle();
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 550,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }, [onToggle]);

  return (
    <>
      <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <span
            className={`absolute inset-0 transform transition-transform duration-500 rotate-0 ${
              isDark ? 'rotate-[360deg]' : '-rotate-[360deg]'
            }`}
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-blue-600" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </span>
        </div>
      </button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            ::view-transition-old(root),
            ::view-transition-new(root) {
              animation: none;
              mix-blend-mode: normal;
            }
          `,
        }}
      />
    </>
  );
}
