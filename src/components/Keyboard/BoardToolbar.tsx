import React from "react";
import MessageType from "../../models/MessageType";
import { sendBoardInput } from "../../utils/sendKeyboardInput";
import "./boardToolbar.scss";

function ToolButton({ currentTool, tool, className = "", path }) {
  return (
    <li>
      <button
        type="button"
        className={[
          "item",
          className,
          currentTool === tool ? "is-active" : "",
        ].join(" ")}
        onClick={() => sendBoardInput(MessageType.SetTool, tool)}
      >
        <svg className="w-100 h-100 currentcolor">
          <svg viewBox="0 0 40 40">
            <path d={path} />
          </svg>
        </svg>
      </button>
    </li>
  );
}

export function BoardToolbar({
  currentTool,
  currentColor,
}: {
  currentTool: string;
  currentColor: string;
}) {
  return (
    <div
      role="toolbar"
      className="main-menu flex items-center darkable br3 iron-gray"
    >
      <ul
        role="menu"
        className="relative flex items-center selection-tools  darkable"
      >
        <ToolButton
          tool="selectPan"
          currentTool={currentTool}
          className="first"
          path="M19.18,27.86,21.44,22a1,1,0,0,1,.58-.57l5.83-2.26a.49.49,0,0,0,0-.92l-15.34-6.4a.5.5,0,0,0-.65.65l6.38,15.36A.5.5,0,0,0,19.18,27.86Z"
        />
        <ToolButton
          tool="selection"
          currentTool={currentTool}
          path="M11.72,11.19v1.7H10v-1.7Zm18.34,0v1.7h-1.7v-1.7Zm-14.64,0v1.7H13.57v-1.7Zm3.7,0v1.7H17.27v-1.7Zm3.7,0v1.7H21v-1.7Zm3.7,0v1.7H24.66v-1.7Zm-14.8,3.57v1.88H10V14.76Zm18.34,0v1.88h-1.7V14.76ZM11.72,18.51v1.87H10V18.51Zm18.34,0v1.87h-1.7V18.51ZM11.72,22.26v1.87H10V22.26Zm0,3.74v1.7H10V26Zm3.7,0v1.7H13.57V26Zm5.55.79.38.91H21ZM19.12,26v1.7H17.27V26ZM20,19.69,32.5,24.88l-5.24,2-2,5.25Z"
        />
        <ToolButton
          tool="pan"
          currentTool={currentTool}
          path="M22.5,34c-1.5,0-2.9-0.6-3.9-1.8l-3.4-4c-0.2-0.3-0.3-0.6-0.3-1c0.1-0.4,0.3-0.7,0.6-0.9  c0.5-0.4,1.2-0.3,1.7,0.1l1.3,1.3c0,0.1,0.1,0.1,0.2,0c0.1,0,0.1-0.1,0.1-0.2v-8.6c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3  c0,0,0,0,0,0v4.4c0.2-0.4,0.7-0.6,1.1-0.6c0.7,0,1.3,0.6,1.3,1.3v0.1c0.2-0.4,0.7-0.6,1.1-0.6c0.7,0,1.3,0.6,1.3,1.3l0,0  c0.2-0.4,0.6-0.6,1.1-0.6c0.7,0,1.3,0.6,1.5,1.3v4.1c0,2.4-2,4.3-4.4,4.3H22.5z M10.6,21.7l-2.5-2.4C8,19.2,8,19,8,18.9  c0-0.2,0.1-0.4,0.2-0.5l2.5-2.4c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0l-1.2,1h4.7c0.4,0,0.8,0.3,0.8,0.7  c0,0.4-0.3,0.7-0.8,0.7h-4.7l1.2,1.2c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0c-0.1,0.1-0.3,0.2-0.5,0.2C11,21.9,10.8,21.8,10.6,21.7  L10.6,21.7z M29.4,21.7l2.5-2.4C32,19.2,32,19,32,18.9c0-0.2-0.1-0.4-0.2-0.5L29.3,16c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.7,0,1  c0,0,0,0,0,0l1.2,1h-4.7c-0.4,0-0.8,0.3-0.8,0.7c0,0.4,0.3,0.7,0.8,0.7h4.7l-1.2,1.2c-0.3,0.3-0.3,0.7,0,1c0,0,0,0,0,0  c0.1,0.1,0.3,0.2,0.5,0.2C29,21.9,29.2,21.8,29.4,21.7L29.4,21.7z M19.2,14.1V9.5L18,10.6c-0.3,0.3-0.8,0.3-1.1,0  c-0.3-0.3-0.3-0.7,0-1c0,0,0,0,0,0l2.7-2.4C19.8,7.1,19.9,7,20,7c0.2,0,0.4,0,0.5,0.1L23,9.6c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0  c-0.3,0.3-0.8,0.3-1.1,0l-1.2-1.2v4.6c0,0.4-0.3,0.7-0.8,0.7C19.6,14.8,19.2,14.5,19.2,14.1L19.2,14.1z"
        />
        <span role="separator" className="separator b--gray o-50 bl h1" />
        <ToolButton
          tool="brush"
          currentTool={currentTool}
          path="M28.461 25.357c-.735 1.397-2.25 2.224-3.665 2.804-1.509.619-3.247.943-4.824.379-.988-.354-1.985-.989-2.68-1.777-.431-.488-.672-1.088-.802-1.722.331.057.673.088 1.025.086 2.555-.015 5.148-1.151 7.082-2.78 1.587-1.336 3.136-3.72 1.907-5.792-1.61-2.714-5.721-1.881-7.818-.343-2.159 1.584-3.541 3.91-3.772 6.546-.62-.489-1.108-1.197-1.386-2.184-.314-1.116-.215-2 .462-2.926.591-.808 1.37-1.478 2.085-2.173 1.085-1.056 2.555-2.519 1.886-4.179-.762-1.891-3.015-1.839-4.667-1.308-1.926.619-3.722 2.231-2.963 4.423-.001-.001 1.444-.398 1.446-.399-.701-2.024 2.269-3.009 3.825-2.83 2.378.274-.107 2.767-.793 3.429-1.667 1.609-3.287 3.175-2.877 5.679.31 1.89 1.429 3.404 2.987 4.207.127 1.346.544 2.587 1.554 3.576a8.424 8.424 0 003.212 1.951c1.902.617 3.982.232 5.78-.527 1.682-.71 3.414-1.717 4.291-3.384a56.28 56.28 0 00-1.295-.756zm-12.062-2.566c.219-2.625 2.073-5.162 4.539-6.144 1.194-.475 3.14-.64 4.09.428.679.764.396 1.847-.078 2.631-1.467 2.426-5.645 4.505-8.585 3.756.005-.227.016-.452.034-.671z"
        />
        <ToolButton
          tool="text"
          currentTool={currentTool}
          path="M27.06,26A3.68,3.68,0,0,1,26.4,26a1.63,1.63,0,0,1-.56-.21,1.15,1.15,0,0,1-.38-.41,1.38,1.38,0,0,1-.14-.64,1.25,1.25,0,0,1,.51-1.09,2.27,2.27,0,0,1,.54-.27,4.85,4.85,0,0,1,.63-.16l.68-.1.65-.1a4.45,4.45,0,0,0,.58-.15,1.22,1.22,0,0,0,.45-.25v1.06a4.32,4.32,0,0,1-.05.64,2,2,0,0,1-.27.79,1.82,1.82,0,0,1-.68.67A2.46,2.46,0,0,1,27.06,26ZM26,27.91a6.3,6.3,0,0,0,1.88-.28,3.64,3.64,0,0,0,1.6-1c0,.17,0,.34.07.51s.08.33.13.49h2.88a2.56,2.56,0,0,1-.28-1,11.49,11.49,0,0,1-.08-1.34V20a2.48,2.48,0,0,0-.42-1.51,2.85,2.85,0,0,0-1.08-.89,4.78,4.78,0,0,0-1.46-.43A12.11,12.11,0,0,0,27.66,17,9,9,0,0,0,26,17.2a4.84,4.84,0,0,0-1.53.57,3.54,3.54,0,0,0-1.12,1.06,3.32,3.32,0,0,0-.5,1.66h2.84a1.63,1.63,0,0,1,.56-1.2,2.16,2.16,0,0,1,1.32-.36,5.16,5.16,0,0,1,.71.05,1.48,1.48,0,0,1,.58.2,1.08,1.08,0,0,1,.4.42,1.5,1.5,0,0,1,.15.73.74.74,0,0,1-.26.67,1.92,1.92,0,0,1-.76.35,7.43,7.43,0,0,1-1.1.18c-.41,0-.83.09-1.26.16s-.85.16-1.27.27a3.47,3.47,0,0,0-1.12.51,2.73,2.73,0,0,0-.8.91,3.08,3.08,0,0,0-.31,1.45,3.27,3.27,0,0,0,.27,1.38,2.55,2.55,0,0,0,.75,1,3.28,3.28,0,0,0,1.12.56A5.11,5.11,0,0,0,26,27.91ZM11.48,22l2-6.82L15,20.59Zm-.25,5.62-.62-.83a1.38,1.38,0,0,1-.22-.76,1.54,1.54,0,0,1,0-.39c.17-.57.33-1.11.47-1.66l4.56-1.84,1.06,3.68a1.57,1.57,0,0,1,.06.44,1.42,1.42,0,0,1,0,.19.15.15,0,0,0,0,.09,1,1,0,0,1-.17.39,2.86,2.86,0,0,1-.33.47l-.17.22h5.28l-.09-.12a7.2,7.2,0,0,1-1-1.68L16.72,14.48a4.1,4.1,0,0,0-1.14-2,1.74,1.74,0,0,0-1.13-.36H11.22c.15.2.3.4.44.62a2,2,0,0,1,.32,1c0,.15-1.12,4.15-3.39,12a5.45,5.45,0,0,1-1.15,1.89Z"
        />
        <button
          type="button"
          className={[
            "item color",
            currentTool === "color" ? "is-active" : "",
          ].join(" ")}
          style={{
            color: currentColor === "c16" ? "#000" : "rgb(213, 14, 23)",
          }}
          onClick={() =>
            sendBoardInput(
              MessageType.SetColor,
              currentColor === "c16" ? "c1" : "c16"
            )
          }
        >
          <svg className="icon-add w-100 h-100 currentcolor" focusable="false">
            <svg viewBox="0 0 40 40">
              <defs>
                <clipPath id="clip-path">
                  <path
                    d="M20,11a9,9,0,1,1-9,9,9,9,0,0,1,9-9m0-3A12,12,0,1,0,32,20,12,12,0,0,0,20,8Z"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <circle cx="20" cy="20" r="7.5" fill="currentColor" />
              <g clipPath="url(#clip-path)">
                <image
                  width="72"
                  height="72"
                  transform="translate(2.72 2.67) scale(0.48)"
                  xlinkHref="data:image/png;base64,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"
                />
              </g>
            </svg>
          </svg>
        </button>
        <span role="separator" className="separator b--gray o-50 bl h1" />
        <ToolButton
          tool="circle"
          currentTool={currentTool}
          path="M20,11a9,9,0,1,1-9,9,9,9,0,0,1,9-9m0-2A11,11,0,1,0,31,20,11,11,0,0,0,20,9Z"
        />
        <ToolButton
          tool="rectangle"
          currentTool={currentTool}
          path=" M29,11V29H11V11H29m2-2H9V31H31V9Z"
        />
        <ToolButton
          tool="triangle"
          currentTool={currentTool}
          path="M20,13.47l3.71,7.42L27.76,29H12.24l4-8.11L20,13.47M20,9,14.5,20,9,31H31L25.5,20,20,9Z"
        />

        <span role="separator" className="separator b--gray o-50 bl h1" />
        <li>
          <button
            type="button"
            className={[
              "item add",
              currentTool === "add" ? "is-active" : "",
            ].join(" ")}
            onClick={() => sendBoardInput(MessageType.NewIdea)}
          >
            <span className="br-100 ba bw1 tc has-activity-color">
              <svg
                className="icon-add w-100 h-100 iron-gray currentcolor"
                focusable="false"
              >
                <svg id="icon-add" viewBox="0 0 32 32">
                  <path d="M16.8 22.3h-1.6c-0.3 0-0.5-0.2-0.5-0.5v-4.5h-4.5c-0.3 0-0.5-0.2-0.5-0.5v-1.6c0-0.3 0.2-0.5 0.5-0.5h4.5v-4.5c0-0.3 0.2-0.5 0.5-0.5h1.6c0.3 0 0.5 0.2 0.5 0.5v4.5h4.5c0.3 0 0.5 0.2 0.5 0.5v1.6c0 0.3-0.2 0.5-0.5 0.5h-4.5v4.5c0 0.3-0.2 0.5-0.5 0.5z" />
                </svg>
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
