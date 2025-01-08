import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";
import { MyDiv } from "./Page404.styles";


function Page404() {
    return (
        <Link to={Pages.Calendar}>
            <MyDiv>This page wasn`t found, back to Calendar</MyDiv>
        </Link>
    )
}

export default Page404;
