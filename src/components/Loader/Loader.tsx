import { BounceLoader } from "react-spinners";
export default function Loader() {
    return (
        <BounceLoader
        color='orange'
            cssOverride={{
                display: "block",
                margin: "0 auto",
                borderColor: "red",
        }}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
}