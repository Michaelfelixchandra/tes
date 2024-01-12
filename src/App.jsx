import Number from "./components/calculateInput";
import Identity from "./components/identity";
import NameForm from "./components/formName";
function App() {
  return (
    <div>
      <Identity name="Michael Felix Chandra" npm="2327240030" github="https://github.com/Michaelfelixchandra"/>
      <Number />
      <NameForm />
    </div>
  );
}

export default App;