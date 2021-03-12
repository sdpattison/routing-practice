const DisplayNum = ({ val }) => {
    if(isNaN(val)){
        return(
            <div>
                <h2>The word is: {val}</h2>
            </div>
        );
    }
    return (
        <div>
            <h2>The number is: {val}</h2>
        </div>
    );
}

export default DisplayNum;