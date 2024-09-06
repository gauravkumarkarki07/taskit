import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <ClipLoader
                color={'#f72585'}
                loading={true}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </section>
    )
}
export default Spinner