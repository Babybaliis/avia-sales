import React, {useEffect, useState} from "react";
import {Tickets} from "../../avia-tickets-types";
import {DivTickets, InputButtonAdd, SectionTabs} from "./tabs-style";
import {TicketsList} from "../tickets-list/tickets-list";
import {Spin} from "antd";
import {useAppSelector} from "../../store/hooks";

interface TabsProps {
    sortFunc: (a: Tickets, b: Tickets) => any
}

const Tabs = ({sortFunc}: TabsProps) => {

    const [moreTickets, setMoreTickets] = useState<number>(5);
    const {tickets, filters} = useAppSelector(state => state.ticketsReducer)

    if (tickets.length == 0) {
        return (
            <Spin size={"large"}/>
        );
    }

    function addClick() {
        setMoreTickets(moreTickets + 5)
    }

    let sortTickets = tickets.filter(ticket => {
        if (filters[1].done && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) {
            return true
        } else if (filters[2].done && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) {
            return true
        } else if (filters[3].done && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) {
            return true
        } else if (filters[4].done && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) {
            return true
        }
        return false
    })
    sortTickets.sort(sortFunc)

    return (
        <SectionTabs>
            <DivTickets>
                <TicketsList tickets={sortTickets.slice(0, moreTickets)}/>
            </DivTickets>
            {sortTickets.length > 0 &&
                <InputButtonAdd type={"button"} value={'Показать еще 5 билетов'} onClick={addClick}/>
            }

        </SectionTabs>
    )

}

export {Tabs}