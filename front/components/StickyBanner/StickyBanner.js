import { Wrapper } from "../Wrapper"

export const StickyBanner = ({ children }) => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 bg-brand text-white py-4 lg:bottom-auto lg:top-0"
      style={{ boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.5)" }}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  )
}
