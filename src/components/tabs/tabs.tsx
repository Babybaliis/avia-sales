import React, {useEffect, useState} from "react";
import {Tab, Tickets} from "../../avia-tickets-types";
import { DivTickets, SectionTabs} from "./tabs-style";
import {TicketsList} from "../tickets-list/tickets-list";
import {Spin} from "antd";

interface TabsProps {
    tabs: Tab[]
    tickets: Tickets[],
    sortFunc: (a: Tickets, b: Tickets) => any
}

const Tabs = ({tabs, tickets, sortFunc}: TabsProps) => {
    useEffect(() => {

        if (tickets.length > 0) {
            tickets.sort(sortFunc)
        }

    }, [tickets])

    if (tickets.length == 0) {
        return (
            <Spin size={"small"}/>
        );
    }
    tickets.sort(sortFunc)

    return (
        <SectionTabs>
            <DivTickets>
                <TicketsList tickets={tickets}/>
            </DivTickets>

        </SectionTabs>
    )

}

export {Tabs}