import {SplitSreen} from './split_screen_layout_pattern'

const LeftHandComponent = ({name}) => {
  return <h1 style ={{backgroundColor: "green"}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <p style ={{backgroundColor: "blue"}}>{message}</p>
}
function App() {
  return (
      <SplitSreen>
        <LeftHandComponent  name = "Walter"/>
        <RightHandComponent message="Hi How are you doing"/>
        left_weight ={2}
        right_weight = {4}
      </SplitSreen>
  );
}