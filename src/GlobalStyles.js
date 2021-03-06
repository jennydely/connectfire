import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  #root{
    display: grid;
    grid-template-rows: 60px auto 60px;
    width: 375px;
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    height: 100%;
  }
  body {
    margin: 0;
    background-color: black;
    color:white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
    height: 100vh;
    max-width: 375px;
    overflow: hidden;
  }
  
  header {
    grid-row: 1;
    display:flex;
    flex-direction: row-reverse;
    max-width: 375px;
    justify-content:space-between;
    align-items: center;
    margin:2px 10px;
  
  }
  
  main{
  align-self:center;
  justify-self:center;
  grid-row: 2;
  max-width: 365px;
  margin: 5px;
  padding:5px;
  display: grid;
  grid-template-columns: repeat(3,101px);
  grid-template-rows: repeat(8,auto);
  row-gap:20px;
  column-gap:20px;
  overflow-y:scroll;
  scrollbar-width: none;
  }
  
  &&
  ::-webkit-scrollbar {
    display: none;
  }
  
  main a{
    color:white;
  }
  footer {
  grid-row: 3;
  position:sticky;
  display:flex;
  flex-direction: row;
  max-width: 375px;
  }
  
  button{
  background-color:#d81818;
  border: solid 1px white;
  border-radius:12px;
  color:white;
  font-size: medium;
  height: 101px;
  width: 101px;
  padding: 5px;
  }
 
  `