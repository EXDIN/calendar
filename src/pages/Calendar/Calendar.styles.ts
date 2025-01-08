import { styled } from "@stitches/react";

export const WrapperDiv = styled("div", {
    padding: '40px 100px',
    alignSelf: 'start',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '35px',
    height: 'calc(100vh - 20px)',
});

export const CalendHeader = styled("header", {
    display: 'flex',
    columnGap: '15px',
    justifyContent: 'space-between',
});

export const FilterInput = styled("input", {
    backgroundColor: 'beige',
    fontSize: '20px',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
});

export const HeaderCentrWrap = styled("div", {
    display: 'flex',
    columnGap: '15px',
    margin: 'auto',
});

export const ArrowsBut = styled("button", {
    backgroundColor: 'inherit',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
});


export const HeaderTitle = styled("h1", {
    alignSelf: 'center',
});

export const NamesDaysList = styled("ul", {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    fontSize: '35px',
    justifyItems: 'center',
    color: 'gray',
});

export const DaysListWrap = styled("div", {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    fontSize: '20px',
    justifyItems: 'center',
    color: 'black',
    height: '100%',
    gap: '15px',
});

export const TaskDesc = styled("span", {

});