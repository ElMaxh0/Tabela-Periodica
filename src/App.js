import logo from './logo.svg';
import './App.css';
import PTable from './components/ptable/ptable';
import ItenData from './components/itenInfo';
import { usePage } from './hooks/page';

function App() {
  const {Pageid, setPageid} = usePage()
  switch(Pageid){
    case 2:
      return(
        <ItenData />
      )
      break;
    default:
      return (
        <>
        <main>
          <PTable />
        </main>
        </>
      );
  }
}

export default App;
