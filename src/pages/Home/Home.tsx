import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";
import { MyDiv } from "./Home.styles";


function Home() {
    return (
        <Link to={Pages.Calendar}>
            <MyDiv>Go to Calendar</MyDiv>
        </Link>
    )
}

export default Home;