import { withSSRAuth } from "../../utils/withSSRAuth";

import { Container } from "../../styles/pages/dashboard.style";

import { Header } from "../../components/Header/Header.component";
import { Title } from "../../components/Title/Title.component";
import { Footer } from "../../components/Footer/Footer.component";

export default function Dashboard() {
    return (
        <Container>
            <Header/>
            <Title/>

            <Footer/>
        </Container>
    );
};

export const getServerSideProps = withSSRAuth(async ctx => {
    return {
        props: {}
    };
});