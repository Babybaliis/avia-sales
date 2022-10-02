import React, {useEffect, useState} from "react";
import {DivTable, ImgLogo, Section} from "./app-style";
import {TicketFilter} from "../ticket-filter/ticket-filter";
import {Tab, Tickets} from "../../avia-tickets-types";
import {Tabs} from "../tabs/tabs";
import logo from "../../img/Logo.svg";
import {Tabs as Tabss} from "antd";
import "antd/dist/antd.css";
import "../../style.css";
import {ticketSlice, useAppDispatch} from "../../store/hooks";
import api from "../api/api";

const {TabPane} = Tabss;

const App = () => {
    const {updateList} = ticketSlice.actions;
    const dispatch = useAppDispatch();

    const [tabsSort, setTabsSort] = useState<Tab[]>([
        {label: "Самый дешевый", id: 1},
        {label: "Самый быстрый ", id: 2},
        {label: "Оптимальный", id: 3},
    ]);

    const [searchId, setSearchId] = useState<string>("");

    const auth = (cb?: (searchId: string) => void) => {
        api.auth()
            .then(res => {
                setSearchId(res.searchId);
                if (!!cb) {
                    cb(res.searchId);
                }
            })
    };

    useEffect(() => {
        auth();
    }, []);
    useEffect(() => {
        if (searchId.length > 0) {
            api.loadList(searchId).then((res) => {
                dispatch(updateList(res));
            });
        }
    }, [searchId]);

    const fastSortFunc = (a: Tickets, b: Tickets): number =>
        a.segments
            .map((value) => value.duration)
            .reduce((partialSum, a) => partialSum + a, 0) -
        b.segments
            .map((value) => value.duration)
            .reduce((partialSum, c) => partialSum + c, 0);

    const optimalSortFunc = (a: Tickets, b: Tickets): number => {
        let aPrice = a.price;
        let bPrice = b.price;
        let aDuration = a.segments
            .map((value) => value.duration)
            .reduce((partialSum, a) => partialSum + a, 0);
        let bDuration = b.segments
            .map((value) => value.duration)
            .reduce((partialSum, a) => partialSum + a, 0);
        return aPrice + aDuration - (bPrice + bDuration);
    }

    return (
        <Section>
            <ImgLogo src={logo} alt={"logo"} width={'150px'} height={'auto'}/>
            <DivTable>
                <TicketFilter/>
                <Tabss defaultActiveKey="1" centered>
                    <TabPane tab="Самый дешевый" key="1">
                        <Tabs sortFunc={(a, b) => a.price - b.price}/>
                    </TabPane>
                    <TabPane tab="Самый быстрый" key="2">
                        <Tabs sortFunc={fastSortFunc}/>
                    </TabPane>
                    <TabPane tab="Оптимальный" key="3">
                        <Tabs
                            sortFunc={optimalSortFunc}/>
                    </TabPane>
                </Tabss>
            </DivTable>
        </Section>
    );
};

export {App};
