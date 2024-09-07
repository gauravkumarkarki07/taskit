import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProps{
    size?:number;
    color?:string;
    fullscreen?:boolean;
}

function Spinner({size=20,color='#f72585',fullscreen=true}:SpinnerProps) {
    return (
        <section className={fullscreen ? 'flex items-center justify-center min-h-screen':''}>
            <ClipLoader
                color={color}
                loading={true}
                size={size}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </section>
    )
}
export default Spinner