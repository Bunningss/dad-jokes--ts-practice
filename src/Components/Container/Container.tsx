import './Container.css'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container'>
      <div className="container-content">
        {children}
      </div>
    </div>
  )
}

export default Container