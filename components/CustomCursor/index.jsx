import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#dac4f7'
      }}
      outerStyle={{
        border: '3px solid #dac4f7'
      }}
    />
  )
}

export default CustomCursor