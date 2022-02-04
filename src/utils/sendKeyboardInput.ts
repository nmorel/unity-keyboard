import KeyDefinition from '../models/KeyDefinition';
import MessageType from '../models/MessageType';

export default function sendKeyboardInput(keyDefinition: KeyDefinition) {

  if (window.vuplex) {
    window.vuplex.postMessage({ type: MessageType.INPUT_RECEIVED, value: keyDefinition.value });
  }
}

export function sendBoardInput(type: MessageType, tool?: string) {
  if (window.vuplex) {
    window.vuplex.postMessage({ type, tool });
  }
}