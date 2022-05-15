import styled from 'styled-components'

const Container = styled.div`
   display:flex
`;

const Pane = styled.div`
  flex:${props =>props.weight}
`


export const SplitSreen = ({
  children,
  left_weight =1,
  right_weight =1,
}) =>{
  
  const [left , right] = children;
  
  return (
    <Container>
      <Pane weight ={left_weight}>
        {left}
      </Pane>
      <Pane weight ={left_weight}>
       {right}
       </Pane>
    </Container>
  )
}