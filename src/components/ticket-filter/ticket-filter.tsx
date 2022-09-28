import React from "react";
import { DivFilter, InputFilter, DivCheckbox, H5 } from "./ticket-filter-style";
import { ticketSlice, useAppDispatch, useAppSelector } from "../../store/hooks";

const TicketFilter = () => {
  const { onClick } = ticketSlice.actions;
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.ticketsReducer);

  return (
    <DivFilter>
      <H5>КОЛИЧЕСТВО ПЕРЕСАДОК</H5>
      {filters.map((filter) => (
        <DivCheckbox key={"filter_input_" + filter.id}>
          <InputFilter
            type={"checkbox"}
            checked={filter.done}
            onClick={(e) => dispatch(onClick(filter))}
          />
          {filter.label}
        </DivCheckbox>
      ))}
    </DivFilter>
  );
};

export { TicketFilter };
