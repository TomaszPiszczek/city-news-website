import { useParams } from 'react-router-dom';

function StateDetail() {
    const { id } = useParams(); 

    return (
        <div>
            <h1>State Detail</h1>
            <p>Clicked on state with ID: {id}</p>
        </div>
    );
}

export default StateDetail;
