import { useLayoutEffect, useState } from "react";

export function useWindowSize(marginTop: number) {
    const [size, setSize] = useState<[number, number]>([0, 0]);

    useLayoutEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            const height = window.innerHeight - marginTop;
            setSize([width, height]);
        };

        // Add the event listener
        window.addEventListener("resize", update);

        // Run a first time
        update();

        // Return cleanup when component is destroyed
        return () => window.removeEventListener("resize", update);
    }, [marginTop]);

    return size;
}
