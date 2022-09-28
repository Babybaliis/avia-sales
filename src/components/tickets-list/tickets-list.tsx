import React from "react";
import {TicketItem} from "../ticket-item/ticket-item";
import {Alert} from "antd";

interface TicketsListProps {
    tickets: any[]
}

const TicketsList = ({tickets}: TicketsListProps) => {

    return (
        <div>
            {tickets.length > 0 ?
                <>
                    {tickets.map(ticket => <TicketItem key={"ticket_item"+ ticket.id} ticket={ticket}/>
                    )}
                </>
                    : ( <Alert type="warning" description="Рейсов, подходящих под заданные фильтры, не найдено" showIcon/>)

            }
        </div>
    );
};
export {TicketsList};