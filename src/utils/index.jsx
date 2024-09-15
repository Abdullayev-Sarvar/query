import { Suspense } from "react"

const SuspenseComponent = ({children}) => {
  return (
    <Suspense fallback={<div className="w-full max-w-[1366px] h-screen flex justify-center items-center"><div className="loader"></div></div>}>
        {children}
    </Suspense>
  )
}

export default SuspenseComponent