import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  resultText: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "#FFF",
    textAlign: "center",
  },
  resultContainer: {
    backgroundColor: "#27AE60",
    borderColor: "transparent",
    display: "inline-block",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 2,
    marginLeft: 5,
    width: 220,
    height: 40,
  },
}));

const ResultCard = (props: { name: string }) => {
  const styles = useStyles();
  return (
    <li>
      <div
        key={props.name + "-2"}
        className={`winner ${styles.resultContainer}`}
      >
        <h2 key={props.name + "-3"} className={styles.resultText}>
          {props.name}
        </h2>
      </div>
    </li>
  );
};

export default ResultCard;
