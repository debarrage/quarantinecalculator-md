import { useCallback, useLayoutEffect, useState } from "react";

function getSize(node: HTMLElement): [number, number] {
    if (node.parentElement) {
        const { width, height } = node.parentElement.getBoundingClientRect();
        return [width, height];
    }
    return [0, 0];
}

/**
 * Calculates the size of the referred node. The hook returns a ref and a size object. 
 * The ref should be attached to a ReactElement. 
 */
export function useNodeSize(): [(node: HTMLElement | null) => void, [number, number]] {
    const [size, setSize] = useState<[number, number]>([0, 0]);
    const [node, setNode] = useState<HTMLElement | null>(null);

    // Get the node
    const ref = useCallback((node: HTMLElement | null) => {
        setNode(node);
    }, []);

    useLayoutEffect(() => {
        const update = () => {
            window.requestAnimationFrame(() => {
                if (node) {
                    setSize(getSize(node));
                }
            });
        };

        // Add the event listener
        window.addEventListener("resize", update);

        // Run a first time
        update();

        // Return cleanup when component is destroyed
        return () => window.removeEventListener("resize", update);
    }, [ref, node]);

    return [ref, size];
}
