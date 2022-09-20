import React, {useEffect, useState} from "react";
import {Section, ImgLogo, DivTable} from "./app-style";
import {TicketFilter} from "../ticket-filter/ticket-filter";
import {TicketsList} from "../tickets-list/tickets-list";
import {Filter, Tab, Tickets} from "../../avia-tickets-types";
import {Tabs} from "../tabs/tabs";
import logo from '../../img/Logo.svg'
import {Alert, Pagination, Spin, Tabs as Tabss} from "antd";
import "antd/dist/antd.css";
import "../../style.css"


const {TabPane} = Tabss;

const App = () => {

    const [flyingSort, setFlyingSort] = useState<Filter[]>([
        {label: "Все", done: false, id: 1},
        {label: "Без пересадок ", done: false, id: 2},
        {label: "1 пересадка", done: false, id: 3},
        {label: "2 пересадки", done: false, id: 4},
        {label: "3 пересадки", done: false, id: 5}

    ]);

    const [tabsSort, setTabsSort] = useState<Tab[]>([
        {label: "Самый дешевый", id: 1},
        {label: "Самый быстрый ", id: 2},
        {label: "Оптимальный", id: 3}

    ]);

    const [ticket, setTicket] = useState<Tickets[]>([]);
    const [searchId, setSearchId] = useState<string>('');


    const auth = (cb?: (searchId: string) => void) => {
        fetch("https://front-test.dev.aviasales.ru/search")
            .then(res => {
                res.json()
                    .then((json: { searchId: string }) => {
                        setSearchId(json.searchId)
                        if (!!cb) {
                            cb(json.searchId)
                        }
                    })
            })
    }


    useEffect(() => {
        auth()
    }, [])
    useEffect(() => {
        if (searchId.length > 0) {
            loadList(searchId)
        }

    }, [searchId])

    const loadList = async (searchId: string) => {
        let response = await fetch(
            `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`
        ).then(res => {
            res.json()
                .then((json) => {
                    setTicket(json.tickets)

                })
        });

    }

    return (

        <Section>
            <ImgLogo src={logo} alt={'logo'}/>
            <DivTable>
                <TicketFilter filters={flyingSort} setFilters={setFlyingSort}/>
                <Tabss defaultActiveKey="1" centered>
                    <TabPane tab="Самый дешевый" key="1" >
                        <Tabs tabs={tabsSort}
                              tickets={ticket}
                              sortFunc={(a, b) => a.price - b.price}/>
                    </TabPane>
                    <TabPane tab="Самый быстрый" key="2">
                        <Tabs tabs={tabsSort}
                              tickets={ticket}
                              sortFunc={(a, b) =>
                                  a.segments.map(value => value.duration)
                                      .reduce((partialSum, a) => partialSum + a,
                                          0
                                      ) - b.segments.map(value => value.duration)
                                      .reduce((partialSum, a) => partialSum + a,
                                          0
                                      )}/>
                    </TabPane>
                    <TabPane tab="Оптимальный" key="3">
                        <Tabs tabs={tabsSort}
                              tickets={ticket}
                              sortFunc={(a, b) => (a.price - b.price)
                        ||
                                  (a.segments.map(value => value.duration)
                                      .reduce((partialSum, a) => partialSum + a,
                                          0
                                      ) - b.segments.map(value => value.duration)
                                      .reduce((partialSum, a) => partialSum + a,
                                          0
                                      ))}/>
                    </TabPane>
                </Tabss>
            </DivTable>

        </Section>
    )
}

export
{
    App
}