import styled from "@emotion/styled";


export const Friends = styled.ul`
  width: 320px;
  margin: auto;
  margin-bottom: 50px;
  `

export const Item = styled.li`
  display: flex;
  padding: 5px 10px;
  gap: 15px;
  background-color: #fff;

  align-items: center;
  justify-content: flex-start;
 
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  
  &:not(:last-child) {
  margin-bottom: 20px;
}
  &:hover, &:focus{
    background-color: rgb(236, 232, 232);
}`

export const Status = styled.span` 
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;`

export const Avatar = styled.img``

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;`