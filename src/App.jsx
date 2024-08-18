
import { useContext } from 'react';
import { DarkModeContext } from './context/ContextDarkMode';

import MyRoute from './routes/MyRoute';
import Menu from './components/Menu';
function App() {
  const { isDark} = useContext(DarkModeContext);
 return(
  <main className={isDark ? "dark-mode" : "" } > 
 <section className='content-portfolio'>
  <section className='container-menuandcard'>
    <Menu/>
  </section>
  <MyRoute/>
{/* <Card/> */}
    </section>
  </main>
 )
}

export default App
