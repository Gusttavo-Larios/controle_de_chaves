import { TitleH1Props, TitleH2Props } from "./interface";

import { BaseStyledTitleH1,BaseStyledTitleH2 } from "./styled";

export function Title(): JSX.Element {
    return <></>
}

function H1(props: TitleH1Props): JSX.Element {
    return <BaseStyledTitleH1 {...props}/>
}

function H2(props: TitleH2Props): JSX.Element {
    return <BaseStyledTitleH2 {...props}/>
}

Title.H1 = H1
Title.H2 = H2