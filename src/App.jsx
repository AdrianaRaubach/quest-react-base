import './App.css'
import Button from './components/button'
import TextoColoridoUppercase from './components/TextoColoridoUppercase'

function App() {
  const handleClick = (label) => {
      alert('A label deste botão é ' + label);
  };

  return (
      <>
          <TextoColoridoUppercase texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti tempora facere necessitatibus quo, eveniet sed officia dolorem hic nisi nihil iure optio explicabo fuga cumque suscipit adipisci magni itaque.' />
          <Button label="Baixar CV" onClick={() => handleClick("Baixar CV")} />
      </>
  );
}

export default App
