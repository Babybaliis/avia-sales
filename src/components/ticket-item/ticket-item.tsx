import {
    Section,
    DivFlex,
    DivPrices,
    DivInfo,
    DivFlyInfo,
    DivMargin,
    DivFlexInfo,
    DivFlexColumn, DivFlyTime, DivFlexRow, DivFlying
} from "./ticket-item-style";
import {Tickets} from "../../avia-tickets-types";
import moment from "moment";


interface TicketItemProps {
    ticket: Tickets
}

const TicketItem = ({ticket}: TicketItemProps) => {
    const getHourAndMin = (date: string) => {
        let d = new Date(date)
        return moment(d).format('HH:mm')
    }

    return (
        <Section>
            <DivFlex>
                <DivPrices>
                    {ticket.price}
                </DivPrices>
                <DivPrices>
                    <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt={"logo"}/>
                </DivPrices>
            </DivFlex>
            <DivInfo>
                {ticket.segments.map((value, i) => {
                        return (
                            <DivFlexColumn>
                                <DivFlexInfo>
                                    <DivFlyInfo>
                                        <DivMargin>{value.origin} </DivMargin>
                                        -
                                        <DivMargin>{value.destination}</DivMargin>

                                    </DivFlyInfo>

                                    {getHourAndMin(value.date)}
                                </DivFlexInfo>
                                <DivFlyTime>
                                    <div style={{marginBottom: '5px'}}>
                                        В пути
                                    </div>
                                    <DivFlying>{Math.floor(value.duration / 60)}ч{' ' + value.duration % 60}м</DivFlying>
                                </DivFlyTime>
                                <DivFlyTime>
                                    <div style={{marginBottom: '5px'}}>
                                        Количество пересадок
                                    </div>
                                    <DivFlexRow>
                                        {(value.stops.length > 0) ? value.stops.map((str, i, arr) =>
                                            <DivFlexRow
                                                style={{marginLeft: i == 0 ? '0px' : '5px'}}>{str + (i != (arr.length - 1) ? ', ' : '')} </DivFlexRow>) : 'Прямой рейс'}
                                    </DivFlexRow>
                                </DivFlyTime>
                            </DivFlexColumn>
                        )
                    }
                )}
            </DivInfo>


        </Section>
    )
}
export {TicketItem};