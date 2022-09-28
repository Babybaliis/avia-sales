import {
  DivFlex,
  DivFlexColumn,
  DivFlexInfo,
  DivFlexRow,
  DivFlyInfo,
  DivFlying,
  DivFlyTime,
  DivFlyTransfers,
  DivInfo,
  DivMargin,
  DivPrices,
  Section,
} from "./ticket-item-style";
import { Segment, Tickets } from "../../avia-tickets-types";
import moment from "moment";

interface TicketItemProps {
  ticket: Tickets;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  const getHourAndMin = (date: string) => {
    let d = new Date(date);
    return moment(d).format("HH:mm");
  };

  const finishHoursMin = (date: string, finishTime: number) => {
    let d = new Date(date);
    return moment(d.getTime() + finishTime * 60000).format("HH:mm");
  };

  const finishFlying = (value: Segment) => {
    return (
      Math.floor(value.duration / 60) +
      "ч" +
      (" " + (value.duration % 60)) +
      "м"
    );
  };

  const getTransfers = (value: Segment) => {
    if (value.stops.length === 0) {
      return "0 пересадок";
    } else if (value.stops.length === 1) {
      return "1 пересадка";
    } else {
      return value.stops.length + " пересадки";
    }
  };

  return (
    <Section>
      <DivFlex>
        <DivPrices>{ticket.price}</DivPrices>
        <DivPrices>
          <img
            src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            alt={"logo"}
            style={{ width: "80px" }}
          />
        </DivPrices>
      </DivFlex>
      <DivInfo>
        {ticket.segments.map((value, i) => {
          return (
            <DivFlexColumn>
              <DivFlexInfo>
                <DivFlyInfo>
                  <DivMargin>{value.origin} </DivMargin>-
                  <DivMargin>{value.destination}</DivMargin>
                </DivFlyInfo>
                {getHourAndMin(value.date) +
                  " " +
                  "-" +
                  " " +
                  finishHoursMin(value.date, value.duration)}
              </DivFlexInfo>
              <DivFlyTime>
                <div>В пути</div>
                <DivFlying> {finishFlying(value)}</DivFlying>
              </DivFlyTime>
              <DivFlyTransfers>
                <div>{getTransfers(value)}</div>
                <DivFlexRow>
                  {value.stops.length > 0
                    ? value.stops.map((str, i, arr) => (
                        <DivFlexRow
                          style={{ marginLeft: i === 0 ? "0px" : "5px" }}
                        >
                          {str + (i !== arr.length - 1 ? ", " : "")}{" "}
                        </DivFlexRow>
                      ))
                    : "Прямой рейс"}
                </DivFlexRow>
              </DivFlyTransfers>
            </DivFlexColumn>
          );
        })}
      </DivInfo>
    </Section>
  );
};
export { TicketItem };
