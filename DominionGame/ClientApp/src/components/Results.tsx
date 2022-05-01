import { makeStyles, Theme } from "@material-ui/core";
import { Deck } from "../models";
import ResultCard from "./ResultCard";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2D9CDB",
    marginTop: 75,
  },
  textStyles: {
    margin: "auto",
    display: "flex",
    msflexDirection: "column",
    color: "#FFF",
    fontFamily: "Arial",
  },
}));

const Results = (props: { result: Deck[] }) => {
  const styles = useStyles();
  function renderGameView() {
    if (props.result.length === 1) {
      var cardArray = props.result[0].cards;
      var events = props.result[0].events;
    } else {
      var cardArray = props.result[0].cards.concat(props.result[1].cards);
      var events =
        props.result[0].events && props.result[0].events.length > 0
          ? props.result[0].events
          : props.result[1].events;
    }
    return (
      <div>
        <h1 className={styles.textStyles}>Game Order:</h1>
        <ul key="GameList" style={{ listStyleType: "none", columns: 2 }}>
          {cardArray
            .sort((a, b) => {
              return a.cost - b.cost;
            })
            .map((card) => (
              <ResultCard
                key={`GL-${card.title}`}
                name={card.title + ` - cost: ${card.cost}`}
              />
            ))}
        </ul>
        {events && events.length > 0 && (
          <div>
            <h3 className={styles.textStyles}>Event:</h3>
            <ResultCard
              key={`GL-${events[0].title}`}
              name={`${events[0].title} - cost: ${events[0].cost}`}
            />
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.textStyles}>Box Order (A-Z):</h1>
      {props.result.map((result) => {
        return (
          <div key={result.name + "-0"}>
            <h2
              key={result.name + "-1"}
              className={styles.textStyles}
            >{`${result.name}:`}</h2>
            <ul
              key={result.name + "-2"}
              style={{ listStyleType: "none", columns: 2 }}
            >
              {result.cards.map((card) => (
                <ResultCard key={card.title} name={card.title} />
              ))}
            </ul>
            {result.events && result.events.length > 0 && (
              <div>
                <h3 className={styles.textStyles}>Event:</h3>
                <ResultCard
                  key={result.events[0].title}
                  name={result.events[0].title}
                />
              </div>
            )}
          </div>
        );
      })}
      {renderGameView()}
    </div>
  );
};
export default Results;
