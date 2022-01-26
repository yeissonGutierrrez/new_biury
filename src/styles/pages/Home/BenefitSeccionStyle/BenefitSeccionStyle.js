import { style } from "typestyle";


const BenefitSeccionStyle = style({
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
    paddingBottom: '120px',
    alignItems: 'center',
    height: 'auto',
    position: "relative",
    overflow: 'hidden',
    $nest: {
        '& .membership_title_container': {
            display: 'grid',
            gridTemplateAreas: "'. pos1 .' 'pos2 pos3 pos4' '. pos5 .'",
            gridTemplateColumns: '300px 300px 300px',
            gridAutoRows: '1fr 1fr',
            height: '80%',
            marginLeft: '12%',
            $nest: {
                '& .position1': {
                    gridArea: 'pos1'
                },
                '& .position2': {
                    gridArea: 'pos2'
                },
                '& .position3': {
                    gridArea: 'pos3',
                    position: "relative",
                    $nest: {
                        '& .text': {
                            position: "absolute",
                            top: -100,
                            left: -150,
                            textAlign: "center",
                            fontFamily: 'CocoGothLight',
                            fontSize: '62px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'CocoGothSemiBold',
                                    lineHeight: 0,
                                    fontSize: '95px',
                                }
                            }
                        }
                    }
                },
                '& .position4': {
                    gridArea: 'pos4'
                },
                '& .position5': {
                    gridArea: 'pos5'
                },
            }
        },
    }
})


export default BenefitSeccionStyle