const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
    };

    const greetingStyle = {
        color: 'black',
        fontSize: '24px',
    };

    return (
        <div style={containerStyle}>
        <h2 style={greetingStyle}>{greeting}</h2>
        </div>
    );
};

export default  ItemListContainer;