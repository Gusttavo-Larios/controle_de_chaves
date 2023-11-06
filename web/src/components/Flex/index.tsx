import {BaseFlexColumnContainerProps, BaseFlexRowContainerProps} from "./interface"
import {BaseStyledFlexColumnContainer, BaseStyledFlexRowContainer} from "./styled"

export function Flex():void {}

function Column(props:BaseFlexColumnContainerProps) {
    return <BaseStyledFlexColumnContainer {...props}/>
}

function Row(props:BaseFlexRowContainerProps) {
    return <BaseStyledFlexRowContainer {...props}/>
}

Flex.Column = Column
Flex.Row = Row