import React from "react";
import {TicketItem} from "../ticket-item/ticket-item";

interface TicketsListProps {
    tickets: any[]
}

 const TicketsList = ({tickets}: TicketsListProps) => {

    return (
        <>
            {tickets.map(ticket =>
                <TicketItem ticket={ticket}/>
            )}
        </>
    );
};
export {TicketsList};