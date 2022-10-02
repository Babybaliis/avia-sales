import React from "react";
import {TicketItem} from "../ticket-item/ticket-item";
import {Alert} from "antd";
import {DivList} from "./tickets-style";
import {Tickets} from "../../avia-tickets-types";

interface TicketsListProps {
    tickets: Tickets[];
    isLoading: boolean
}

const TicketsList = ({tickets, isLoading}: TicketsListProps) => {
    return (
        <DivList>
            {tickets.length > 0 && !isLoading ? (
                <>
                    {tickets.map((ticket) => (
                        <TicketItem
                            key={"ticket_item" + ticket.carrier + '_' + ticket.price + '_' + ticket.segments.length}
                            ticket={ticket}/>
                    ))}
                </>
            ) : (
                <><>

                </>
                    <img src={'https://i.pinimg.com/originals/5e/61/94/5e619452b5d5143f07a988902cfbd817.gif'} alt={'?'}
                         width={'470px'} height={'250px'}/>
                    <Alert
                        type="warning"
                        description="Рейсов, подходящих под заданные фильтры, не найдено"
                        showIcon/></>
            )}
        </DivList>
    );
};
export {TicketsList};
