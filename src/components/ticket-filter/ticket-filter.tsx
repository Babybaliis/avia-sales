import React from "react";
import {DivFilter, InputFilter, DivCheckbox, H5} from "./ticket-filter-style";
import {Filter} from "../../avia-tickets-types";

interface TicketFilterProps {
    filters: Filter[]
}

const TicketFilter = ({filters}: TicketFilterProps) => {

    return (
        <DivFilter>
            <H5>КОЛИЧЕСТВО ПЕРЕСАДОК</H5>
            {filters.map((filter) =>
                <DivCheckbox key={'filter_input_' + filter.id} >
                    <InputFilter type={"checkbox"}
                                 checked={filter.done}
                                 onClick={(e)=>console.log(!filter.done)}/> {filter.label}
                </DivCheckbox>
            )}
        </DivFilter>
    )

}

export {TicketFilter}