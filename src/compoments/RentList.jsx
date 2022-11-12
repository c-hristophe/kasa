import React from "react";
import { list } from '../datas/list'
const scaleValue = list.scaleValue
function RentList() {
    return (
		<div>
			{list.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
		</div>
	)
}

export default RentList