
const Shimmer = () => {
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Array(12).fill("").map((_, index) => (
                <div key={index} style={{
                    backgroundColor: '#f0f0f0',
                    height: '350px',
                    width: '350px',
                    padding: '10px',
                    borderRadius: '10px',
                    margin: '10px'
                }}>
                    <div style={{ width: '100%', height: '70%', backgroundColor: '#e0e0e0', borderRadius: '10px' }}></div>
                    <div style={{ width: '80%', height: '20px', backgroundColor: '#e0e0e0', margin: '10px auto', borderRadius: '4px' }}></div>
                    <div style={{ width: '60%', height: '15px', backgroundColor: '#e0e0e0', margin: '5px auto', borderRadius: '4px' }}></div>
                </div>
            ))}
        </div>
    )
};
export default Shimmer;