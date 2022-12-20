import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={200}
    // viewBox="0 0 220 200"
    backgroundColor="#5c5757"
    foregroundColor="#f0b7b7"
    {...props}
  >
    <rect rx="9"  width="220" height="200" />
  </ContentLoader>
)

export default MyLoader