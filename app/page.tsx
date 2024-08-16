'use client'

const Page: React.FC = () => {
  return (
    <div
      style={{
        padding: 24,
        textAlign: 'center'
      }}
    >
      <p>long content</p>
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index}>
          {index % 20 === 0 && index ? 'more' : '...'}
          <br />
        </div>
      ))}
    </div>
  )
}

export default Page
