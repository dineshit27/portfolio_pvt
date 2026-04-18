import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-auto md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  role,
  tabIndex,
  onClick,
  onKeyDown,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  role?: React.AriaRole;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={cn(
        "group/bento row-span-1 flex h-full flex-col justify-between space-y-3 overflow-hidden rounded-xl border border-gray-200/80 bg-white/95 p-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:space-y-4 sm:p-4 md:p-5 dark:border-gray-700/70 dark:bg-gray-900/90",
        className,
      )}
    >
      {header}
      <div className="min-h-0 transition duration-200">
        <div className="inline-flex items-center justify-center rounded-lg border border-blue-200/80 bg-blue-50/90 p-2 text-blue-700 shadow-sm transition-all duration-300 group-hover/bento:scale-105 group-hover/bento:bg-blue-100 dark:border-blue-400/30 dark:bg-blue-500/15 dark:text-blue-300 dark:group-hover/bento:bg-blue-500/25">
          {icon}
        </div>
        <div className="mt-2 mb-1 line-clamp-2 break-words font-sans font-bold leading-tight text-[clamp(0.9rem,1.8vw,1.08rem)] text-gray-800 sm:mb-2 dark:text-gray-100">
          {title}
        </div>
      </div>
    </div>
  );
};
