import { withSSRAuth } from "../../utils/withSSRAuth";

export default function Me() {
    return (
        <></>
    )
}

export const getServerSideProps = withSSRAuth(async ctx => {
    return {
        props: {}
    };
});