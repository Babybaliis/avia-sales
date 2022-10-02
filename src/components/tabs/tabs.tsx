import React, {useEffect, useState} from "react";
import { Tickets } from "../../avia-tickets-types";
import { DivTickets, InputButtonAdd, SectionTabs } from "./tabs-style";
import { TicketsList } from "../tickets-list/tickets-list";
import { Spin } from "antd";
import { useAppSelector } from "../../store/hooks";

interface TabsProps {
  sortFunc: (a: Tickets, b: Tickets) => number;
}

const Tabs = ({ sortFunc }: TabsProps) => {
  const [moreTickets, setMoreTickets] = useState<number>(5);
  const { tickets, filters } = useAppSelector((state) => state.ticketsReducer);
  const [sortTickets, setSortTickets] = useState<Tickets[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    let t=tickets.filter((ticket,index) => {
      return filters.map(filter=>filter.done && ticket.segments[0].stops.length== filter.stopCount && ticket.segments[1].stops.length==filter.stopCount)
          .reduce((a,b)=>a||b,false)

    })
    t.sort(sortFunc);
    t=t.slice(0, moreTickets)
    setSortTickets(t)
    setIsLoading(false)
  },[tickets,filters,moreTickets])

  if (tickets.length === 0) {
    return <Spin size={"large"} />;
  }


  function addClick() {
    setMoreTickets(moreTickets + 5);
  }


  return (
    <SectionTabs>
      <DivTickets>
        <TicketsList tickets={sortTickets} isLoading={isLoading}/>
      </DivTickets>
      {sortTickets.length > 0 && (
        <InputButtonAdd
          type={"button"}
          value={"Показать еще 5 билетов"}
          onClick={addClick}
        />
      )}
    </SectionTabs>
  );
};

export { Tabs };
