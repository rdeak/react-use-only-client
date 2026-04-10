import {use} from "react";
import type {ItemDetail} from "./fetch-item-detail.ts";

export function DetailPopup({ dataPromise }: { dataPromise: Promise<ItemDetail> }) {
    const detail = use(dataPromise);
    return <div>{detail.description}</div>;
}
