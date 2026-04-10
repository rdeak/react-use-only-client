import {Suspense, useState} from "react";
import {DetailPopup} from "./detail-popup.tsx";
import {fetchItemDetail, type ItemDetail} from "./fetch-item-detail.ts";
import {Skeleton} from "./Skeleton.tsx";

export function ItemCard({itemId}: { itemId: number }) {
    const [promise, setPromise] = useState<Promise<ItemDetail> | null>(null);

    const handleOpen = () => {
        setPromise(fetchItemDetail(itemId));
    };

    return (
        <>
            <button onClick={handleOpen}>Show Details</button>
            {promise && (
                <Suspense fallback={<Skeleton />}>
                    <DetailPopup dataPromise={promise} />
                </Suspense>
            )}
        </>
    );
}