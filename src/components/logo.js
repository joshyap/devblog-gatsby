import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="554"
      height="554"
      fill="none"
      viewBox="0 0 554 554"
    >
      <path fill="url(#pattern0)" d="M0 0h554v554H0V0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.0018)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0"
          width="500"
          height="500"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAioAAAIqCAYAAAAKMGGzAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAOSlJREFUeAHt3e2a47YOpdHMPOf+b3kmTuIuly3b+iAJgFznT9sSRQLv3oBQlU7OX3/5HwIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg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"
        ></image>
      </defs>
    </svg>
  );
}

export default Logo;
