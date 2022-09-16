import styled from "styled-components";
const PTableRow = styled.div `
display: flex;
flex-wrap: wrap;
`
const PTable_Element = styled.div `
display: flex;
flex-wrap: nowrap;
align-content: flex-start;
justify-content: flex-start;
align-items: center;
`
const PTable_Data = styled.div `
width:100%,
`
const PTableContainer = styled.div `

width:100%;


& > div {
    overflow-x :scroll;
}

.element__list {
    outline: solid 1px #fff;
    display: inline-block;
    width: 1368px;
    font-size: 0;
  }
  
.element__item {
    position: relative;
    display: inline-block;
    font-size: 16px;
  }
  
  .element__link {
    color: inherit;
    cursor: pointer;
    position: relative;
    /* width: 100%; */
    /* height: 100%; */
    width: 76px;
    height: 76px;
    display: block;
    border: solid 1px #fff;
    background: #ddd;
    z-index: 1;
  }
  .element__name,
.element__mass,
.element__num,
.element__sign {
  display: inline-block;
  position: absolute;
  padding: 3px;
}

.element__name,
.element__mass {
  font-size: 0.6em;
}

.element__mass {
  /* color: #0072ff; */
  bottom: 0;
  left: 0;
}

.element__num {
  color: #c00;
  font-size: 0.9em;
  right: 0;
  top: 0;
}

.element__sign {
  font-size: 30.4px;
  line-height: 1;
  color: #555;
  left: 0;
  top: 11.4px;
}

.element__name {
  bottom: 15.2px;
  left: 0;
}
  `
  export{
    PTableContainer,
    PTableRow,
    PTable_Element,
    PTable_Data
  }