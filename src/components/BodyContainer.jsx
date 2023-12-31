

const BodyContainer = ({
  children,
  expanded,
  expandFunction,
  disabled,
  
}) => {
  const toggleExpandContainer = () => {
    if (expandFunction !== undefined) {
    
      expandFunction((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <button
      onClick={toggleExpandContainer}
      disabled={
        expandFunction === undefined ||
        (disabled !== undefined && disabled === true)
      }
      aria-expanded={expanded}
      className={`${
        expandFunction !== undefined &&
        "section-container transition-shadow hover:shadow-xl"
      } relative mb-5 w-full rounded-xl border-2 border-black p-4 text-left shadow-none outline-none  lg:mb-6 lg:px-5 xl:mb-7 xl:rounded-2xl xl:px-6 xl:py-5 2xl:mb-8 2xl:px-8 2xl:py-6`}
    >
      {children}

      {/* Text on mobile to inform section is expandable */}
      {expandFunction !== undefined && !expanded && (
        <div className="absolute bottom-0.5 right-1.5 flex flex-row items-center justify-start gap-0.5 md:hidden">
          <span className="text-4xs italic text-off-black-600">
            Expand to see more
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="h-2.5 w-2.5 fill-black"
          >
            <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
          </svg>
        </div>
      )}

      {/* Hover effect with chevrons */}
      <div
        className={`${
          expandFunction !== undefined &&
          (expanded ? "expanded-hover-chevron" : "hover-chevron")
        } ${
          expanded ? "-bottom-5 xl:-bottom-6" : "bottom-2.5 xl:bottom-2"
        } absolute -right-6 hidden flex-col content-start items-center opacity-0 md:flex lg:-right-7 xl:-right-8 2xl:-right-9`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={`-mb-[0.9375rem] h-5 w-5 fill-black  lg:-mb-[1.125rem] lg:h-6 lg:w-6 xl:-mb-[1.3125rem] xl:h-7 xl:w-7 2xl:-mb-6 2xl:h-8 2xl:w-8 ${
            expanded && "rotate-180"
          }`}
        >
          <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={`h-5 w-5 fill-black lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 ${
            expanded && "rotate-180"
          }`}
        >
          <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
        </svg>
      </div>
    </button>
  );
};

export default BodyContainer;