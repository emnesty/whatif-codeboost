import { styled } from "../../../styles";

export const StyleSectionCharacters = styled("section", {
  paddingTop: "56px",
  paddingBottom: "72px",
  ".title": {
    display: "flex",
    alignItems: "center",
    marginBottom: 56,
    span: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$white",
      opacity: 0.4,
      marginRight: "11.3rem",
    },
    h2: {
      position: "relative",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "2.5rem",
      lineHeight: "3.5rem",
      color: "$white",
      maxWidth: "21.6rem",
      paddingLeft: 16,
      "&::before": {
        content: "",
        position: "absolute",
        top: 5.5,
        left: 0,
        width: 2,
        height: 59,
        background: "$red800",
      },
    },
  },
});

export const StyleListCharacters = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "40px 33px",
  ".marvel": {
    width: "28rem",
    height: "36.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
