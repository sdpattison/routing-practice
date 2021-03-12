const DisplayPrettyColors = ({ val, textColor, bgColor}) => {
    if(isNaN(val)){
        return(
            <div>
                <h2 style={{ color : `${textColor}`, backgroundColor : `${bgColor}`}}>
                    The word is: {val}
                </h2>
            </div>
        );
    }
    return (
        <div>
            <h2 style={{ color : `${textColor}`, backgroundColor : `${bgColor}`}}>
                The number is: {val}
            </h2>
        </div>
    );
}

export default DisplayPrettyColors;