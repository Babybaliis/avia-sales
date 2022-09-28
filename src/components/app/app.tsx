import React, {useEffect, useState} from "react";
import {DivTable, ImgLogo, Section} from "./app-style";
import {TicketFilter} from "../ticket-filter/ticket-filter";
import {Filter, Tab, Tickets} from "../../avia-tickets-types";
import {Tabs} from "../tabs/tabs";
import logo from '../../img/Logo.svg'
import {Tabs as Tabss} from "antd";
import "antd/dist/antd.css";
import "../../style.css"
import {ticketSlice, useAppDispatch, useAppSelector} from "../../store/hooks";


const {TabPane} = Tabss;

const App = () => {
    const {updateList} = ticketSlice.actions
    const dispatch = useAppDispatch()

    const [tabsSort, setTabsSort] = useState<Tab[]>([
        {label: "Самый дешевый", id: 1},
        {label: "Самый быстрый ", id: 2},
        {label: "Оптимальный", id: 3}
    ]);

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
            loadList(searchId).then(res => {
                dispatch(updateList(res))
            })

        }

    }, [searchId])
    const loadList = async (searchId: string) => {
        return await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
            .then(res => {
                return res.json()
                    .then((json) => {
                        return json.tickets
                    })
            })
    }
    const fastSortFunc=(a:Tickets, b:Tickets):number =>
         (a.segments.map(value => value.duration)
            .reduce((partialSum, a) => partialSum + a,
                0
            ) - b.segments.map(value => value.duration)
            .reduce((partialSum, c) => partialSum + c,
                0
            ))

    return (
        <Section>
            <ImgLogo src={logo} alt={'logo'}/>
            <DivTable>
                <TicketFilter />
                <Tabss defaultActiveKey="1" centered>
                    <TabPane tab="Самый дешевый" key="1">
                        <Tabs
                              sortFunc={(a, b) => a.price - b.price}/>
                    </TabPane>
                    <TabPane tab="Самый быстрый" key="2">
                        <Tabs
                              sortFunc={fastSortFunc}/>
                    </TabPane>
                    <TabPane tab="Оптимальный" key="3">
                        <Tabs
                              sortFunc={(a, b) => {
                                  let aPrice=a.price
                                  let bPrice=b.price;
                                  let aDuration=a.segments.map(value => value.duration)
                                          .reduce((partialSum, a) => partialSum + a, 0);
                                  let bDuration=b.segments.map(value => value.duration)
                                          .reduce((partialSum, a) => partialSum + a, 0);
                                  return (aPrice+aDuration)-(bPrice+bDuration)
                              }}/>
                    </TabPane>
                </Tabss>

            </DivTable>

        </Section>
    )
}

export {App}