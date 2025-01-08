import { TypeComponentWindow } from "../../types"
import { ModalDiv, WrapperDiv } from "./ModalComponent.styles";



function ModalComponent({ setActive, children }: TypeComponentWindow) {
  return (
    <WrapperDiv onClick={() => setActive(false)}>
      <ModalDiv onClick={e => e.stopPropagation()}>
        {children}
      </ModalDiv>
    </WrapperDiv>
  )
}

export default ModalComponent;