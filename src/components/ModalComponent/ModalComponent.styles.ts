import { styled } from "@stitches/react"

export const WrapperDiv = styled("div", {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    pointerEvents: 'all',
    transition: 'transform 0.5s',
})

export const ModalDiv = styled("div", {
    height: '80%',
    width: '70%',
    backgroundColor: '#1c1e26',
    padding: '20px',
    borderRadius: '12px',
    transform: 'scale(0.5)',
    transition: '0.4s all',
    border: '5px solid rgba(255, 255, 255, 0.5)',
    display: 'block',
})