import React from "react";
import {DivFilter, InputFilter, DivCheckbox, H5} from "./ticket-filter-style";
import {Filter} from "../../avia-tickets-types";

interface TicketFilterProps {
    filters: Filter[]
    setFilters: (filters: Filter[]) => void
}

const TicketFilter = ({filters, setFilters}: TicketFilterProps) => {

    return (
        <DivFilter>
            <H5>КОЛИЧЕСТВО ПЕРЕСАДОК</H5>
            {filters.map((filter) =>
                <DivCheckbox key={'filter_input_' + filter.id}>
                    <InputFilter type={"checkbox"}
                                 checked={filter.done}
                                 onClick={(e) => {
                                     setFilters(filters.map(value => {
                                         if (value.id === filter.id) {
                                             value.done = !filter.done
                                         }
                                         return value
                                     }))
                                 }}
                    />
                    {filter.label}
                </DivCheckbox>
            )}
        </DivFilter>
    )

}

export {TicketFilter}