import { Card } from "./style"

interface NewsProps {
    id: string;
    description: string;
    category: string;
    thumbnail: string;
}

export function Cards(props: NewsProps[]) {
    return (
        props.map(props => {
            <Card thumbnail={props.thumbnail}>
                <div className="category">
                    <p className="category text">
                        { props.category }
                    </p>
                </div>

                <p className="description">
                    { props.description }
                </p>
            </Card>
        })
    );
};