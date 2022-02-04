import KeyDefinition from "../models/KeyDefinition";
import MessageType from "../models/MessageType";

export default function sendKeyboardInput(keyDefinition: KeyDefinition) {
  if (window.vuplex) {
    window.vuplex.postMessage({
      type: MessageType.INPUT_RECEIVED,
      value: keyDefinition.value,
    });
  }
}

export function sendBoardInput(type: MessageType, data?: string) {
  console.log("sendEvent to webView", { type, data });
  if (window.vuplex) {
    window.vuplex.postMessage({ type, data });
  }
}
