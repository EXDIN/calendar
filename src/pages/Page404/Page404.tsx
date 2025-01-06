import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";
import { styled } from "@stitches/react";

const MyDiv = styled("span", {
  padding: '15px 25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
  borderRadius: '15px',
  backgroundColor: 'black',
  fontSize: '20px',
  fontWeight: '600',
  color: 'white'
})


function Page404() {
  return (
      <Link to={Pages.Calendar}>
          <MyDiv>This page wasn`t found, back to Calendar</MyDiv>
      </Link>
  )
}

export default Page404;
